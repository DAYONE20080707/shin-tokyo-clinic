"use client"

import Image from "next/image"

// 私たちについて
const Lowerkv_04 = () => {
  return (
    <div className="md:max-h-[900px] mx-auto relative overflow-hidden">
      <div className="md:max-w-[1240px] mx-auto pt-[96px] space-y-10 px-5">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-[0.05em] leading-[120%] mx-auto">
          <span className="block text-accentColor font-lato text-lg font-extrabold mb-1 ![line-height:120%]">
            title
          </span>
          タイトルが入ります
        </h1>
      </div>

      <div className="mt-10 md:mt-[120px] ">
        <Image
          src="/common/lower-kv-01.jpg"
          alt="キービジュアル"
          width={1440}
          height={600}
          className="w-full h-full object-cover aspect-[1440/600]"
        />
      </div>
    </div>
  )
}

export default Lowerkv_04
