// components/news/newsDetail/NewsDetail_01.tsx

import Link from "next/link"
import Image from "next/image"
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow"
import { newsFetch } from "@/lib/api/newsFetch"
import styles from "@/styles/microcms.module.css"

interface NewsDetailProps {
  params: {
    id: string
  }
  draftKey?: string
}

const NewsDetail_01 = async ({ params, draftKey }: NewsDetailProps) => {
  const { id } = params

  const post = await newsFetch.get(id, draftKey)

  if (!post) {
    return (
      <div className="max-w-[1200px] mx-auto py-16 px-4">
        <div className="text-center">
          <p>お知らせが見つかりませんでした</p>
        </div>
      </div>
    )
  }

  // 前後の記事を取得
  const allPosts = await newsFetch.list(100, draftKey)
  const sorted = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt ?? b.createdAt).getTime() -
      new Date(a.publishedAt ?? a.createdAt).getTime()
  )
  const index = sorted.findIndex((p) => p.id === id)
  const prevPost = index > 0 ? sorted[index - 1] : null
  const nextPost = index < sorted.length - 1 ? sorted[index + 1] : null

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}.${m}.${d}`
  }

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-xs text-[#393939] mb-10">
        <Link href="/" className="hover:underline">
          トップページ
        </Link>
        <span>&gt;</span>
        <span className="line-clamp-1">{post.title}</span>
      </nav>

      <article>
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10 gap-2">
          <div className="flex flex-wrap gap-2">
            {Array.isArray(post.category) && post.category.length > 0 ? (
              post.category.map((cat, i) => (
                <span
                  key={i}
                  className="text-primaryColor text-xs border border-primaryColor rounded-full px-3 py-1"
                >
                  {cat}
                </span>
              ))
            ) : (
              <span className="text-primaryColor text-xs border border-primaryColor rounded-full px-3 py-1">
                カテゴリーなし
              </span>
            )}
          </div>
          <time className="text-base font-en text-[#393939]">
            {formatDate(post.publishedAt || post.createdAt)}
          </time>
        </div>

        {post.image && (
          <div className="w-full h-[300px] lg:h-[400px] relative mb-16 lg:mb-24">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* 前後記事ナビ */}
      <nav className="mt-24 border-t border-b border-[#393939] py-4">
        <div className="flex justify-between items-center relative">
          {prevPost ? (
            <Link
              href={`/news/${prevPost.id}`}
              className="group flex items-center text-[#393939] hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <NavigationArrow direction="left" className="text-accentColor" />
              <div>
                <p className="text-base mb-1 font-bold font-en text-primaryColor">
                  PREV
                </p>
                <p className="text-sm lg:text-base font-medium line-clamp-2">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#393939]" />

          {nextPost ? (
            <Link
              href={`/news/${nextPost.id}`}
              className="group flex items-center justify-end text-[#393939] hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <div className="text-left">
                <p className="text-base mb-1 font-bold font-en text-primaryColor">
                  NEXT
                </p>
                <p className="text-sm lg:text-base font-medium line-clamp-2">
                  {nextPost.title}
                </p>
              </div>
              <NavigationArrow
                direction="right"
                className="text-accentColor"
              />
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}
        </div>
      </nav>
    </div>
  )
}

export default NewsDetail_01
