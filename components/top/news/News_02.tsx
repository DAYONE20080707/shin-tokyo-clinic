// components/news/News_02.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { CirclePlay, PauseCircle } from "lucide-react"
import MoreButton from "@/components/ui/button/MoreButton"
import { newsFetch } from "@/lib/api/newsFetch"

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import SectionContent from "@/components/ui/frame/SectionContent"

interface NewsProps {
  limit?: number
}

const News_02 = ({ limit = 5 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    // 旧データ取得処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "news",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch news:", error)
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
        const data = await newsFetch.list(Math.min(limit ?? 100, 100))
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
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
        <ContentHeadline subTitle="News" mainTitle="お知らせ" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mt-16"
        >
          {contents.map((post) => (
            <SwiperSlide key={post.id} className="w-[700px]">
              <Link
                href={`/news/${post.id}`}
                className="block w-[800px] h-[400px] relative hover:opacity-80 transition-opacity"
              >
                <div className="w-full h-[400px] mt-5 md:mt-0">
                  {post.image && (
                    <Image
                      src={post.image.url}
                      alt="制作物サムネイル"
                      width={370}
                      height={223}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 bg-black/50 py-8 px-10 text-white">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="mt-4 text-white text-xs">
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

        <div className="absolute right-60 -bottom-3 z-10 flex items-center gap-4">
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
          href="/news"
          className="text-accentColor border-accentColor"
        />
      </div>
    </SectionContent>
  )
}

export default News_02
