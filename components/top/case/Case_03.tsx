// components/case/Case_03.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import { ChevronRight } from "lucide-react"
import { casesFetch } from "@/lib/api/casesFetch"
import SectionContent from "@/components/ui/frame/SectionContent"

interface CaseProps {
  limit?: number
}

const Case_03 = ({ limit = 3 }: CaseProps) => {
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
        const data = await casesFetch.list(Math.min(limit ?? 100, 100))
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
      <section className="md:max-w-[1200px] mx-auto space-y-10">
        <ContentHeadline subTitle="Case study" mainTitle="導入事例" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/case/${post.id}`}
              className="w-full block hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-[250px] rounded-[15px] mt-5 md:mt-0">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title ?? "導入事例サムネイル"}
                    width={370}
                    height={223}
                    className="w-full h-full rounded-t-2xl object-cover"
                  />
                )}
              </div>
              <div className="bg-white p-6">
                <p className="text-lg font-bold md:min-h-14">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center text-accentColor font-semibold">
                  もっと見る
                  <ChevronRight className="ml-1 w-4 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MoreButton
            href="/case"
            className="text-accentColor border-accentColor"
          />
        </div>
      </section>
    </SectionContent>
  )
}

export default Case_03
