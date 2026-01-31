// components/blog/Blog_01.tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import Image from "next/image"
import { blogsFetch } from "@/lib/api/blogsFetch"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import SectionContent from "@/components/ui/frame/SectionContent"

interface BlogProps {
  limit?: number
}

// HTMLタグを除去してプレーンテキストを取得する関数
const stripHtmlTags = (html: string): string => {
  if (!html) return ""
  // HTMLタグを除去
  let text = html.replace(/<[^>]*>/g, "")
  // HTMLエンティティをデコード
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
  // 連続する空白や改行を整理
  text = text.replace(/\s+/g, " ").trim()
  return text
}

const Blog_01 = ({ limit = 3 }: BlogProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 旧データ取得処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
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
        const data = await blogsFetch.list(Math.min(limit ?? 100, 100))
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
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
    <SectionContent className="bg-bgLight">
      <section className="lg:max-w-[1200px] mx-auto lg:space-y-10">
        <ContentHeadline subTitle="Blog" mainTitle="ブログ" />
     <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
          {contents.map((post) => (
            <ul key={post.id} className="w-full">
              <Link href={`/blog/${post.id}`} className="block group">
                <li className="flex flex-row lg:flex-col items-center rounded-2xl overflow-hidden">
                  <figure className="w-1/2 lg:w-full h-[120px] lg:h-[223px]">
                    {post.image && (
                      <Image
                        src={post.image.url}
                        alt={post.title ?? "ブログサムネイル"}
                        width={370}
                        height={223}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </figure>
                  <div className="w-1/2 lg:w-full p-4 flex flex-col justify-between">
                    <div>
                      <p className=" text-base lg:text-lg font-medium break-words leading-[160%] group-hover:text-accent transition-colors">
                        {post.title}
                      </p>
                      {post.content && (
                        <p className="mt-2 text-sm lg:text-base line-clamp-2 leading-[160%] text-gray-700">
                          {Array.from(stripHtmlTags(post.content))
                            .slice(0, 100)
                            .join("")}
                          ...
                        </p>
                      )}
                    </div>
                    {post.category && post.category.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.category.map((cat, index) => (
                          <span key={index} className="text-xs text-gray-500">
                            #{cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </SectionContent>
  )
}

export default Blog_01
