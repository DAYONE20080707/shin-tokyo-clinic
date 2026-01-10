// components/case/Case_02.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { CirclePlay, PauseCircle } from "lucide-react"
import MoreButton from "@/components/ui/button/MoreButton"
import { casesFetch } from "@/lib/api/casesFetch"

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import SectionContent from "@/components/ui/frame/SectionContent"

interface CaseProps {
  limit?: number
}

const Case_02 = ({ limit = 5 }: CaseProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const swiperRef = useRef<any>(null)

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

  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop()
    } else {
      swiperRef.current?.autoplay.start()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <SectionContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto relative">
        <ContentHeadline subTitle="Case study" mainTitle="導入事例" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mt-16"
        >
          {contents.map((post) => (
            <SwiperSlide key={post.id} className="md:w-[700px]">
              <Link
                href={`/case/${post.id}`}
                className="block md:w-[800px] h-[250px] md:h-[400px] relative hover:opacity-80 transition-opacity"
              >
                <div className="w-full h-[250px] md:h-[400px] mt-5 md:mt-0">
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
                <div className="absolute bottom-0 left-0 w-full md:w-[400px] bg-black/50 py-3 md:py-8 px-3 md:px-10 text-white">
                  <p className="md:text-lg font-bold min-h-12 md:min-h-0">
                    {post.title}
                  </p>
                  <p className="mt-2 md:mt-4 text-white text-xs min-h-8 md:min-h-0">
                    #
                    {Array.isArray(post.category) && post.category.length > 0
                      ? post.category.join(", ")
                      : "カテゴリーなし"}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-4 md:right-60 -bottom-3 z-10">
          <div className="swiper-pagination"></div>
          <button onClick={handlePlayPause} className="focus:outline-none">
            {isPlaying ? (
              <PauseCircle size={30} className="text-gray-600" />
            ) : (
              <CirclePlay size={30} className="text-gray-600" />
            )}
          </button>
        </div>
      </section>
      <div className="flex justify-center mt-16">
        <MoreButton
          href="/case"
          className="text-accentColor border-accentColor"
        />
      </div>
    </SectionContent>
  )
}

export default Case_02
