// components/top/profile/Profile_01.tsx
"use client"

import { useRef, useState, useCallback } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

/* ──────────────────────────────────────────────
   Swiper を完全に排除した自作無限スライダー
   - CSS animation ベース（JS タイマー不要）
   - ドラッグ操作対応
   - pause on hover
   - レスポンシブ対応
   ────────────────────────────────────────────── */

const facilityImages = [
  { src: "/images/facility-img01.jpg", alt: "医院内観1" },
  { src: "/images/facility-img02.jpg", alt: "医院内観2" },
  { src: "/images/facility-img03.jpg", alt: "医院内観3" },
]

// ─── 無限ループ用スライダー ───
const InfiniteSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)

  // 3枚×3セット = 9枚で無限ループを実現
  const slides = [...facilityImages, ...facilityImages, ...facilityImages]

  // ── ドラッグ操作 ──
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartX.current = e.clientX
    const track = trackRef.current
    if (track) {
      const style = getComputedStyle(track)
      const matrix = new DOMMatrix(style.transform)
      scrollStartX.current = matrix.m41
      track.style.animationPlayState = "paused"
      track.style.transform = `translateX(${matrix.m41}px)`
    }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !trackRef.current) return
      const delta = e.clientX - dragStartX.current
      trackRef.current.style.transform = `translateX(${scrollStartX.current + delta}px)`
    },
    [isDragging]
  )

  const handlePointerUp = useCallback(() => {
    if (!isDragging || !trackRef.current) return
    setIsDragging(false)
    setIsPaused(false)
    // アニメーション再開
    trackRef.current.style.transform = ""
    trackRef.current.style.animationPlayState = "running"
  }, [isDragging])

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => {
        if (!isDragging) setIsPaused(true)
      }}
      onMouseLeave={() => {
        if (!isDragging) setIsPaused(false)
      }}
    >
      <div
        ref={trackRef}
        className="flex facility-track"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] lg:w-[350px] mx-[10px] lg:mx-[20px]"
          >
            <div className="rounded-[10px] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[200px] lg:h-[280px] object-cover select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── メインコンポーネント ───
const Profile_01 = () => {
  return (
    <>
      {/* CSS animation で無限スクロール */}
      <style jsx global>{`
        @keyframes facility-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* 3枚 × (幅 + gap) 分だけ左にずらす → ループ */
            transform: translateX(calc(-1 * (280px + 20px) * 3));
          }
        }

        @media (min-width: 1024px) {
          @keyframes facility-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * (350px + 40px) * 3));
            }
          }
        }

        .facility-track {
          animation: facility-scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section id="facility" className="bg-[#f3fbfa] py-16 lg:py-24 overflow-hidden">
        <div className="lg:max-w-[1560px] mx-auto px-5 lg:px-0 lg:pl-[calc((100%-1200px)/2)]">
          <div className="flex flex-col lg:flex-row lg:gap-[120px] lg:items-start">
            {/* 左側：テキストコンテンツ */}
            <div className="lg:w-[350px] lg:flex-shrink-0">
              <div className="mb-8 lg:mb-16">
                <p className="text-lg font-bold tracking-[0.03em] font-en text-primaryColor">
                  Facility
                </p>
                <h2 className="text-[32px] leading-[1.5] mt-2 tracking-[0.05em] font-bold text-primaryColor">
                  医院の様子
                </h2>
              </div>
              {/* PCのみボタン表示 */}
              <div className="hidden lg:block lg:mt-10">
                <Link
                  href="/coming-soon"
                  className="inline-flex items-center justify-between w-[350px] bg-[#f5a623] hover:bg-[#e6991e] transition-colors text-white font-bold text-base rounded-full px-6 py-4"
                >
                  <span>詳しく見る</span>
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[#f5a623]" />
                  </span>
                </Link>
              </div>
            </div>

            {/* 右側：画像スライダー */}
            <div className="mt-10 lg:mt-0 lg:flex-1 -mx-5 lg:mx-0">
              <InfiniteSlider />
            </div>
          </div>

          {/* SPのみボタン表示（スライダーの下） */}
          <div className="lg:hidden mt-10">
            <Link
              href="/coming-soon"
              className="inline-flex items-center justify-between w-full bg-[#f5a623] hover:bg-[#e6991e] transition-colors text-white font-bold text-base rounded-full px-6 py-4"
            >
              <span>詳しく見る</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-[#f5a623]" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile_01
