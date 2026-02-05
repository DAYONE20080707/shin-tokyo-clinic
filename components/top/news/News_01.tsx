// components/top/news/News_01.tsx
// 病院からのお知らせセクション

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Cms } from "@/types"
import { newsFetch } from "@/lib/api/newsFetch"

interface NewsProps {
  limit?: number
}

// 日付フォーマット関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}.${month}.${day}`
}

const News_01 = ({ limit = 6 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

  if (loading) {
    return (
      <section className="bg-[#f3fbfa] py-16 lg:py-[120px] px-4 lg:px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          <p className="text-center">Loading...</p>
        </div>
      </section>
    )
  }

  if (!contents || contents.length === 0) {
    return (
      <section className="bg-[#f3fbfa] py-16 lg:py-[120px] px-4 lg:px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          <p className="text-center">お知らせはありません</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#f3fbfa] py-16 lg:py-[120px] px-4 lg:px-5">
      <div className="lg:max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-10 lg:mb-16">
          <p className="font-bold text-lg tracking-[0.03em] text-primaryColor font-en">
            News
          </p>
          <h2 className="text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-[0.05em] text-primaryColor mt-2">
            病院からの
            <br className="lg:hidden" />
            お知らせ
          </h2>
        </div>

        {/* ニュースカード */}
        <div className="bg-white rounded-[20px] lg:rounded-[40px] p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-20">
            {contents.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.id}`}
                className="flex gap-4 py-6 border-b border-primaryColor hover:opacity-80 transition-opacity"
              >
                {/* サムネイル */}
                <div className="relative w-[120px] lg:w-[150px] h-[80px] lg:h-[100px] flex-shrink-0 rounded-[10px] overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>

                {/* テキストコンテンツ */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  {/* 日付とカテゴリ */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm lg:text-base text-primaryColor font-medium font-en">
                      {formatDate(post.publishedAt || post.createdAt)}
                    </p>
                    {Array.isArray(post.category) && post.category.length > 0 && (
                      <span className="inline-flex items-center justify-center px-3 lg:px-4 py-1 text-xs font-bold text-primaryColor border border-primaryColor rounded-full">
                        {post.category[0]}
                      </span>
                    )}
                  </div>

                  {/* タイトルと説明 */}
                  <div className="text-sm lg:text-base text-[#393939] leading-[1.7] line-clamp-3">
                    <span className="font-medium">{post.title}</span>
                    {post.description && (
                      <>
                        <br />
                        <span className="text-[#5f5f5f]">{post.description}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News_01
