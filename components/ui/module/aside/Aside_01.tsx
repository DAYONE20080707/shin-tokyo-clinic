// components/module/aside/Aside_01.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";

const Aside_01 = () => {
  return (
    <>
      <PageContent className="bg-white px-0 pt-0">
        <section className="md:max-w-[1200px] py-10 md:py-16 mx-auto bg-[url('/common/aside.png')] bg-no-repeat bg-cover flex flex-col items-center  text-white px-4">
          <p className="md:text-lg font-bold">料金プラン</p>
          <h4 className="text-3xl md:text-[40px] font-poppins font-bold">
            Plan
          </h4>
          <p className="text-center md:text-lg font-medium md:w-[495px] my-6">
            御社のニーズに沿ったプランをご用意しております。
          </p>
          <div className="w-full flex justify-center">
            <MoreButton className="!bg-white !text-accentColor" />
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Aside_01;
