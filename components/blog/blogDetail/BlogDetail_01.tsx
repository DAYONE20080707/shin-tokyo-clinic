// components/blog/blogDetail/BlogDetail_01.tsx

import Link from "next/link"
import Image from "next/image"
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow"
import { blogsFetch } from "@/lib/api/blogsFetch"
import styles from "@/styles/microcms.module.css"

interface BlogDetailProps {
  params: {
    id: string
  }
  draftKey?: string
}

const BlogDetail_01 = async ({ params, draftKey }: BlogDetailProps) => {
  const { id } = params

  const post = await blogsFetch.get(id, draftKey)

  if (!post) {
    return (
      <div className="max-w-[1200px] mx-auto py-16 px-4">
        <div className="text-center">
          <p>記事が見つかりませんでした</p>
        </div>
      </div>
    )
  }

  // 前後の記事を取得
  const allPosts = await blogsFetch.list(100, draftKey)
  const sorted = allPosts.sort(
    (a, b) =>
      new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime()
  )
  const index = sorted.findIndex((p) => p.id === id)
  const prevPost = index > 0 ? sorted[index - 1] : null
  const nextPost = index < sorted.length - 1 ? sorted[index + 1] : null

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4">
      <article className="bg-white">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10 gap-2">
          <div className="flex flex-wrap gap-2">
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
            <time className="text-base">
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

        {post.image && (
          <div className="w-full h-[400px] relative mb-24">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* 前後記事ナビ */}
      <nav className="mt-24 border-t border-b border-black py-4">
        <div className="flex justify-between items-center relative">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.id}`}
              className="group flex items-center text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <NavigationArrow direction="left" className="text-accentColor" />
              <div>
                <p className="text-base mb-1 font-bold font-lato">PREV</p>
                <p className="text-lg font-semibold line-clamp-2">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.id}`}
              className="group flex items-center justify-end text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <div className="text-left">
                <p className="text-base mb-1 font-bold font-lato">NEXT</p>
                <p className="text-lg font-semibold line-clamp-2">
                  {nextPost.title}
                </p>
              </div>
              <NavigationArrow direction="right" className="text-accentColor" />
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}
        </div>
      </nav>
    </div>
  )
}

export default BlogDetail_01
