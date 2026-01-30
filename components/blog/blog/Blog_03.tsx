// components/blog/Blog_03.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cms } from "@/types"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"
import { blogsFetch } from "@/lib/api/blogsFetch"

interface BlogProps {
  limit?: number
}

const Blog_03 = ({ limit = 3 }: BlogProps) => {
  const [allContents, setAllContents] = useState<Cms[]>([])
  const [displayContents, setDisplayContents] = useState<Cms[]>([])
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")

  // 初回ロードで全件取得 & カテゴリ一覧生成
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await blogsFetch.list(100)
        if (!mounted) return

        setAllContents(data)

        // 重複しないカテゴリを抽出
        const uniqueCats = new Set<string>()
        data.forEach((post) => {
          post.category?.forEach((c) => uniqueCats.add(c))
        })

        setCategories([
          { id: "all", name: "すべて" },
          ...Array.from(uniqueCats).map((c) => ({ id: c, name: c })),
        ])

        setDisplayContents(data.slice(0, limit))
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
        if (mounted) {
          setAllContents([])
          setCategories([{ id: "all", name: "すべて" }])
        }
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [limit])

  // カテゴリ変更時
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayContents(allContents.slice(0, limit))
    } else {
      const filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      )
      setDisplayContents(filtered.slice(0, limit))
    }
  }, [activeCategory, allContents, limit])

  return (
    <PageContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリボタン */}
        <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-x-20 rounded-full bg-white mx-auto px-5 md:px-20 w-fit">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-1 py-4 transition-all font-bold whitespace-nowrap ${
                activeCategory === category.id
                  ? "text-accentColor border-b-4 border-accentColor"
                  : "hover:text-accentColor"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center mt-16">
            <h1>Loading...</h1>
          </div>
        ) : displayContents.length === 0 ? (
          <div className="text-center mt-16">
            <p>記事がありません</p>
          </div>
        ) : (
          <>
            <div className="mt-16 bg-white p-4 md:p-16">
              {displayContents.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="w-full hover:opacity-90 transition-opacity"
                >
                  <div className="w-full flex flex-col md:flex-row gap-4 border-b border-[#eeeeee] p-4 md:p-6">
                    <p className="font-medium">
                      {post.date
                        ? new Date(post.date)
                            .toLocaleDateString("ja-JP", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, ".")
                        : ""}
                    </p>
                    <div className="flex flex-col md:flex-row gap-2">
                      <p className="inline-block h-[25px] px-4 py-1 bg-accentColor rounded-[5px] text-white justify-center items-center text-xs w-fit">
                        {post.category?.length
                          ? post.category.join(", ")
                          : "カテゴリーなし"}
                      </p>
                      <p className="text-lg font-bold">{post.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <MoreButton className="text-accentColor border-accentColor" />
            </div>
          </>
        )}
      </section>
    </PageContent>
  )
}

export default Blog_03
