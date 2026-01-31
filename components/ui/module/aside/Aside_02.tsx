// components/module/aside/Aside_02.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";

const Aside_02 = () => {
  return (
    <>
      <PageContent className="bg-white">
        <section className="lg:max-w-[1200px]  py-16 mx-auto grid grid-cols-2 ">
          <div className="bg-accentColor rounded-l-lg flex flex-col items-center text-white py-16">
            <p className="text-lg font-semibold">見出し</p>
            <h4 className="text-[40px] font-poppins font-bold">asideaside</h4>
            <p className="text-center text-lg font-semibold w-[495px] pt-1 pb-6">
              見出しはいります。見出しはいります。見出しはいります。
              見出しはいります。見出しはいります。見出しはいります。
            </p>
            <div>
              <MoreButton className="bg-white text-accentColor" />
            </div>
          </div>
          <div className="bg-[#393939] rounded-r-lg flex flex-col items-center text-white py-16">
            <p className="text-lg font-semibold">見出し</p>
            <h4 className="text-[40px] font-poppins font-bold">asideaside</h4>
            <p className="text-center text-lg font-semibold w-[495px] pt-1 pb-6">
              見出しはいります。見出しはいります。見出しはいります。
              見出しはいります。見出しはいります。見出しはいります。
            </p>
            <div>
              <MoreButton className="bg-white text-accentColor" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Aside_02;
