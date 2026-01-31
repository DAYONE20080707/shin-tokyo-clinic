// components/module/cta/Cta_02.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite";

const Cta_02 = () => {
  return (
    <>
      <PageContent className="bg-accentColor">
        <section className="md:max-w-[1200px] mx-auto grid grid-cols-2 gap-x-20">
          <Image
            src="/cta/background.png"
            alt="ctaイメージ画像"
            width={500}
            height={363}
          />
          <div className=" flex flex-col justify-center">
            <h4 className="text-white text-[32px] font-bold">
              見出しテキスト入ります見出しテキスト入ります
            </h4>
            <p className="text-white text-lg font-semibold py-6">
              リード文はいりますリード文はいりますリード文はいりますリード文はいりますリード文はいりますリード文はいります
            </p>
            <div>
              <FreeButtonWhite href="/" text="お問い合わせ" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Cta_02;
