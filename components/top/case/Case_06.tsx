// components/case/Case_06.tsx

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import { casesFetch } from "@/lib/api/casesFetch"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import SectionContent from "@/components/ui/frame/SectionContent"

interface CaseProps {
  limit?: number
}

const Case_06 = ({ limit = 9 }: CaseProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // --- 旧 microcms 実装 ---
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "cases",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
      setLoading(false);
    };

    getWorks();
    */

    // --- 新 casesFetch 実装 ---
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await casesFetch.list(limit ?? 9)
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch cases:", error)
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
        <div className="lg:w-[300px]">
          <ContentHeadline subTitle="Case study" mainTitle="導入事例" />
          <div className="mt-0 lg:mt-16">
            <MoreButton
              href="/case"
              className="text-accentColor border-accentColor"
            />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-[820px] space-y-5">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/case/${post.id}`}
              className="w-full lg:flex lg:space-x-6 border-b border-[#eeeeee] pb-5 hover:opacity-80 transition-opacity"
            >
              <p className="font-medium">
                {post.date
                  ? format(new Date(post.date), "yyyy/MM/dd", { locale: ja })
                  : ""}
              </p>
              <p className="mt-1 lg:mt-0 w-40 h-[25px] px-2 bg-accentColor rounded-[5px] text-white flex justify-center items-center text-xs">
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

export default Case_06
