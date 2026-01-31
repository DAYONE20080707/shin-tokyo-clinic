"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { blogsFetch } from "@/lib/api/blogsFetch"
import { Cms } from "@/types"
import styles from "@/styles/microcms.module.css"

interface BlogDetailProps {
  params: {
    id: string
  }
  draftKey?: string
}

const BlogDetail_02 = ({ params, draftKey }: BlogDetailProps) => {
  const { id } = params

  const [post, setPost] = useState<Cms | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const currentPost = await blogsFetch.get(id, draftKey)
        if (!mounted) return

        if (!currentPost) {
          setError("記事が見つかりませんでした")
          return
        }

        setPost(currentPost)

        // ✅ 全記事取得（draftKey対応）
        const allPosts = await blogsFetch.list(100, draftKey)
        if (!mounted) return

        const sorted = allPosts.sort(
          (a, b) =>
            new Date(b.date ?? "").getTime() -
            new Date(a.date ?? "").getTime()
        )

        // ✅ 関連記事生成（TypeScript安全）
        const related = sorted.filter((p) => {
          if (
            p.id === id ||
            !Array.isArray(p.category) ||
            !Array.isArray(currentPost.category)
          ) {
            return false
          }

          return p.category.some((cat) =>
            currentPost.category!.includes(cat)
          )
        })

        setRelatedPosts(related.slice(0, 5))
      } catch (err) {
        console.error("Failed to fetch blog post:", err)
        if (mounted) {
          setError("記事の取得に失敗しました")
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [id, draftKey])

  if (loading) {
    return (
      <div className="bg-bgLight pb-24">
        <div className="max-w-[1200px] mx-auto pt-24 px-3">
          <div className="text-center">
            <p>読み込み中...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="bg-bgLight pb-24">
        <div className="max-w-[1200px] mx-auto pt-24 px-3">
          <div className="text-center">
            <p>{error || "記事が見つかりませんでした"}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bgLight pb-24">
      {post.image && (
        <div className="w-full h-[40vh] max-h-[480px] relative">
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="max-w-[1200px] mx-auto mt-10 lg:mt-24 px-3">
        <article className="bg-white p-5 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-2">
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(post.category) && post.category.length > 0 ? (
                post.category.map((cat, i) => (
                  <span
                    key={i}
                    className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1"
                  >
                    {cat}
                  </span>
                ))
              ) : (
                <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                  カテゴリーなし
                </span>
              )}
            </div>

            {post.date && (
              <time className="text-gray-500 text-sm">
                {new Date(post.date)
                  .toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\//g, ".")}
              </time>
            )}
          </div>

          <h1 className="text-xl lg:text-3xl font-bold mb-10 lg:mb-24 pb-10 border-b border-accentColor">
            {post.title}
          </h1>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-10 lg:mt-24 bg-white p-5 lg:p-16">
            <h2 className="text-2xl mb-6 text-accentColor">関連記事</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white overflow-hidden duration-300"
                >
                  {relatedPost.image && (
                    <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden lg:h-[180px]">
                      <Image
                        src={relatedPost.image.url}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    {relatedPost.date && (
                      <time className="text-xs block">
                        {new Date(relatedPost.date)
                          .toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, ".")}
                      </time>
                    )}
                    <p className="text-lg font-semibold line-clamp-2 mt-1">
                      {relatedPost.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default BlogDetail_02
