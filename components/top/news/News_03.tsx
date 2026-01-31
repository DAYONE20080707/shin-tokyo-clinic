// components/news/News_03.tsx

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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

const News_03 = ({ limit = 3 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        setLoading(true)
        const data = await newsFetch.list(Math.min(limit ?? 100, 100))
        if (!controller.signal.aborted) {
          setContents(data)
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to fetch news:", error)
          setContents([])
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    load()

    return () => controller.abort()
  }, [limit])

  if (loading) return <h1>Loading...</h1>
  if (!contents || contents.length === 0) return <h1>No contents</h1>

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto space-y-10">
        <ContentHeadline subTitle="News" mainTitle="お知らせ" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="w-full block hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-[250px] rounded-[15px] mt-5 md:mt-0 overflow-hidden">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title ?? "ニュースサムネイル"}
                    width={370}
                    height={223}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                )}
              </div>
              <div className="bg-white p-6">
                <p className="text-lg font-bold line-clamp-2">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {post.date
                    ? format(new Date(post.date), "yyyy/MM/dd", { locale: ja })
                    : ""}
                </p>

                <div className="mt-6 inline-flex items-center text-accentColor font-semibold">
                  もっと見る
                  <ChevronRight className="ml-1 w-4 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MoreButton
            href="/news"
            className="text-accentColor border-accentColor"
          />
        </div>
      </section>
    </SectionContent>
  )
}

export default News_03
