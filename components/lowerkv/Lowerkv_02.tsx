"use client";

import Image from "next/image";

// 私たちについて
const Lowerkv_02 = () => {
  return (
    <div className="h-[200px] lg:h-[400px] relative overflow-hidden">
      <Image
        src="/images/lower-kv-01.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="lg:max-w-[1240px] mx-auto space-y-10 px-5 relative h-full flex items-center">
        <h1 className="text-3xl lg:text-5xl font-semibold tracking-[0.05em] leading-[120%] text-white">
          <span className="block font-lato text-lg font-extrabold mb-1 ![line-height:120%]">
            title
          </span>
          タイトルが入ります
        </h1>
      </div>
    </div>
  );
};

export default Lowerkv_02;
