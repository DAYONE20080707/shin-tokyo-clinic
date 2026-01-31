// components/news/News_04.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import { ChevronRight } from "lucide-react"
import { newsFetch } from "@/lib/api/newsFetch"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import SectionContent from "@/components/ui/frame/SectionContent"

interface NewsProps {
  limit?: number
}

const News_04 = ({ limit = 3 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 旧データ取得処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "news",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch news:", error)
      }
      setLoading(false)
    }
    getWorks()
    */

    // 新データ取得処理（共通化）
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await newsFetch.list(Math.min(limit ?? 100, 100))
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
        if (mounted) setContents([])
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [limit])

  if (loading) return <h1>Loading...</h1>
  if (!contents || contents.length === 0) return <h1>No contents</h1>

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto md:flex justify-between">
        <div className="w-[300px]">
          <ContentHeadline subTitle="News" mainTitle="お知らせ" />
          <div className="mt-16 flex justify-center">
            <MoreButton
              href="/news"
              className="text-accentColor border-accentColor"
            />
          </div>
        </div>

        <div className="w-[820px] grid grid-cols-1 gap-y-10 gap-x-16">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="w-full flex space-x-6 hover:opacity-80 transition-opacity"
            >
              <div className="w-[250px] h-[150px] mt-5 md:mt-0">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt="制作物サムネイル"
                    width={370}
                    height={223}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                )}
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {post.date
                    ? format(new Date(post.date), "yyyy/MM/dd", { locale: ja })
                    : ""}
                </p>
                <div className="mt-6 flex items-center text-accentColor font-semibold">
                  もっと見る
                  <ChevronRight className="ml-1 w-4 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SectionContent>
  )
}

export default News_04
