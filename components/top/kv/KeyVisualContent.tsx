// components/ui/frame/KeyVisualContent.tsx
"use client"

import classNames from "classnames"
import Image from "next/image"
import { useState, useEffect } from "react"

interface KeyVisualContentProps {
  className?: string
  isSlider?: boolean
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({
  className,
  isSlider = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { src: "/top/kv/kv_img1.jpg", alt: "KV Image 1" },
    { src: "/top/kv/kv_img2.jpg", alt: "KV Image 2" },
    { src: "/top/kv/kv_img3.jpg", alt: "KV Image 3" },
    { src: "/top/kv/kv_img4.jpg", alt: "KV Image 4" },
    { src: "/top/kv/kv_img5.jpg", alt: "KV Image 5" },
  ]

  useEffect(() => {
    if (!isSlider) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(timer)
  }, [slides.length, isSlider])

  // 単一画像の場合
  if (!isSlider) {
    return (
      <div className={classNames("relative w-full", className)}>
        <Image
          src={slides[0].src}
          alt={slides[0].alt}
          priority
          fill
          className="object-cover"
        />
      </div>
    )
  }

  // スライダーの場合
  return (
    <div className={classNames("relative w-full", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            priority={index === 0}
            fill
            className="object-cover"
          />
          {/* 黒20%のグラデーションオーバーレイ */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div> */}
        </div>
      ))}
    </div>
  )
}

export default KeyVisualContent
