// components/module/cta/Cta_04.tsx
"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonBlue from "@/components/ui/button/FreeButtonBlue";

const Cta_04 = () => {
  return (
    <>
      <PageContent className="bg-accentColor">
        <section className="md:max-w-[1200px] mx-auto grid grid-cols-2 gap-x-10">
          <div className="bg-white text-accentColor text-center px-16 py-6 flex flex-col items-center">
            <Phone className="w-[50px] h-[40px] mx-auto mb-4 text-accentColor" />
            <h4
              className="relative inline-block after:content[] after:bg-[url('/cta/line-right.svg')] after:bg-no-repeat after:inline-block after:w-[10px] after:h-[20px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4 
            before:content[] before:bg-[url('/cta/line-left.svg')] before:bg-no-repeat before:inline-block before:w-[10px] before:h-[14px] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4"
            >
              電話で予約
            </h4>
            <div className="flex justify-center mt-2">
              <FreeButtonBlue href="/" text="00-000-0000" />
            </div>
          </div>
          <div className="bg-white text-[#4270ed] text-center px-16 py-6 flex flex-col items-center">
            <Mail className="w-[50px] h-[40px] mx-auto mb-4 text-accentColor" />
            <h4
              className="relative inline-block after:content[] after:bg-[url('/cta/line-right.svg')] after:bg-no-repeat after:inline-block after:w-[10px] after:h-[20px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4 
            before:content[] before:bg-[url('/cta/line-left.svg')] before:bg-no-repeat before:inline-block before:w-[10px] before:h-[14px] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4 "
            >
              WEBで予約
            </h4>
            <div className="flex justify-center mt-2">
              <FreeButtonBlue href="/" text="LINE予約" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Cta_04;
