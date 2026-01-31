// components/plan/Plan_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanCard from "@/components/ui/ItemCard/PlanCard_01"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_01"
import SectionContent from "@/components/ui/frame/SectionContent"

const Plan_01 = () => {
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
        </section>
        <PlanOption />
      </SectionContent>
    </>
  )
}

export default Plan_01
