// components/case/Case_04.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { casesFetch } from "@/lib/api/casesFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface CaseProps {
  limit?: number;
}

const Case_04 = ({ limit = 3 }: CaseProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

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
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await casesFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
        if (mounted) setContents([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [limit]);

  if (loading) return <h1>Loading...</h1>;
  if (!contents || contents.length === 0) return <h1>No contents</h1>;

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto md:flex justify-between">
        <div className="md:w-[300px]">
          <ContentHeadline subTitle="Case study" mainTitle="導入事例" />
          <div className="mt-0 md:mt-16 flex justify-center">
            <MoreButton
              href="/case"
              className="text-accentColor border-accentColor"
            />
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-[820px] grid grid-cols-1 gap-y-5 md:gap-y-10 gap-x-10 md:gap-x-16">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/case/${post.id}`}
              className="w-full md:flex space-x-6 hover:opacity-80 transition-opacity"
            >
              <div className="w-full md:w-[180px] h-[250px] md:h-[130px] mt-5 md:mt-0">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title ?? "導入事例サムネイル"}
                    width={370}
                    height={223}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                )}
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center text-accentColor font-semibold">
                  もっと見る
                  <ChevronRightIcon className="ml-1 w-4 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SectionContent>
  );
};

export default Case_04;
