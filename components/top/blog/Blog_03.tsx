// components/blog/Blog_03.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import { ChevronRight } from "lucide-react";
import { blogsFetch } from "@/lib/api/blogsFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface BlogProps {
  limit?: number;
}

const Blog_03 = ({ limit = 3 }: BlogProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 旧 microcms 直接呼び出し
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
      setLoading(false);
    };
    getWorks();
    */

    // 新 blogsFetch を利用
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await blogsFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
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
      <section className="lg:max-w-[1200px] mx-auto space-y-10">
        <ContentHeadline subTitle="Blog" mainTitle="ブログ" />

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10">
          {contents.map((post) => (
            <div key={post.id} className="w-full">
              <div className="w-full h-[250px] rounded-[15px] mt-5 lg:mt-0">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title ?? "ブログサムネイル"}
                    width={370}
                    height={223}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                )}
              </div>
              <div className="bg-white p-6">
                <p className="text-lg font-bold lg:min-h-14">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {post.description}
                </p>
                <Link
                  href="/"
                  className="mt-6 flex items-center text-accentColor font-semibold"
                >
                  もっと見る
                  <ChevronRight className="ml-1 w-4 h-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </SectionContent>
  );
};

export default Blog_03;
