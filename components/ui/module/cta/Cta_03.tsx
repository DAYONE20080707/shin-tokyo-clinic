// components/module/cta/Cta_03.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"
import SectionContent from "../../frame/SectionContent"
import MoreLinkButton from "../../button/MoreButton"

const Cta_03 = () => {
  return (
    <>
      <SectionContent className="!py-0 !px-0 " variant="dot">
        <section className="mx-auto grid lg:grid-cols-2 rounded-t-[40px] overflow-hidden">
          <div className="text-white text-center bg-accentColor py-10 lg:py-16 px-5">
            <p className="lg:text-lg font-semibold mb-1">事業紹介</p>
            <h4 className="text-3xl lg:text-[40px] font-en leading-[120%]">Our Service</h4>
            <p className="lg:text-lg my-3 lg:my-6 leading-[160%]">人事・経営コンサルティングや就職支援、貿易事業など<br />
            様々なサービスを提供しております。</p>
            <div className="flex justify-center">
              <MoreLinkButton href="#service" className="lg:!w-[350px]" />
            </div>
          </div>
          <div className="bg-white text-baseColor text-center py-10 lg:py-16 px-5">
            <p className="lg:text-lg font-semibold mb-1">お問い合わせ</p>
            <h4 className="text-3xl lg:text-[40px] font-en leading-[120%]">Contact us</h4>
            <p className="lg:text-lg my-3 lg:my-6 leading-[160%]">人事・経営に関することや、就職支援については<br />
            お気軽にご相談ください。</p>
            <div className="flex justify-center">
            <MoreLinkButton href="/coming-soon" variant="black" className="lg:!w-[350px]">Contact us</MoreLinkButton>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Cta_03
