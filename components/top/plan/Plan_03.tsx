// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanCard from "@/components/ui/ItemCard/PlanCard_03"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_03"
import SectionContent from "@/components/ui/frame/SectionContent"

const Plan_03 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="lg:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="Plan"
            mainTitle="料金プラン"
            subTitleClassName=""
            titleClassName=""
          />
          <PlanList />

          <div className="flex justify-center mt-10 lg:mt-16">
            <Link
              href="/"
              className="bg-accentColor text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-12 lg:h-[58px] font-semibold"
            >
              申し込む
            </Link>
          </div>
        </section>
        <PlanOption />
      </SectionContent>
    </>
  )
}

export default Plan_03
