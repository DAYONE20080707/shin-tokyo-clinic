// components/top/profile/Profile_01.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const Profile_01 = () => {
  const facilityImages = [
    { src: "/images/facility-img01.jpg", alt: "医院内観1" },
    { src: "/images/facility-img02.jpg", alt: "医院内観2" },
    { src: "/images/facility-img03.jpg", alt: "医院内観3" },
  ]

  return (
    <section className="bg-[#f3fbfa] py-16 lg:py-24 overflow-hidden">
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
            <div className="mb-10">
              <p className="text-xl font-bold text-[#393939] leading-[1.7] mb-4">
                テキストが入ります。
              </p>
              <p className="text-base font-medium text-[#393939] leading-[1.7]">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
              </p>
            </div>
            <Link
              href="/coming-soon"
              className="inline-flex items-center justify-between w-full lg:w-[350px] bg-[#f5a623] hover:bg-[#e6991e] transition-colors text-white font-bold text-base rounded-full px-6 py-4"
            >
              <span>詳しく見る</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-[#f5a623]" />
              </span>
            </Link>
          </div>

          {/* 右側：画像3枚並び */}
          <div className="mt-10 lg:mt-0 lg:flex-1">
            <div className="flex gap-5 lg:gap-10 overflow-x-auto lg:overflow-visible">
              {facilityImages.map((image, index) => (
                <div
                  key={index}
                  className="w-[280px] lg:w-[350px] flex-shrink-0 h-[200px] lg:h-[280px] relative rounded-[10px] overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile_01
