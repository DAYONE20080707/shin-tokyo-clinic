// components/news/News_06.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import { newsFetch } from "@/lib/api/newsFetch"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import SectionContent from "@/components/ui/frame/SectionContent"

interface NewsProps {
  limit?: number
}

const News_06 = ({ limit = 9 }: NewsProps) => {
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
      <section className="lg:max-w-[1200px] mx-auto lg:flex justify-between gap-x-20">
        <div className="w-[300px]">
          <ContentHeadline subTitle="News" mainTitle="お知らせ" />
          <div className="mt-16">
            <MoreButton
              href="/news"
              className="text-accentColor border-accentColor"
            />
          </div>
        </div>

        <div className="w-[820px] space-y-5">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="w-full flex space-x-6 border-b border-[#eeeeee] pb-5 hover:opacity-80 transition-opacity"
            >
              <p className="font-medium">
                {post.date
                    ? format(new Date(post.date), "yyyy/MM/dd", { locale: ja })
                    : ""}
              </p>
              <p className=" w-44 h-[25px] px-2 bg-accentColor rounded-[5px] text-white flex justify-center items-center text-xs">
                {Array.isArray(post.category) && post.category.length > 0
                  ? post.category.join(", ")
                  : "カテゴリーなし"}
              </p>
              <p className="text-lg font-bold">{post.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </SectionContent>
  )
}

export default News_06
