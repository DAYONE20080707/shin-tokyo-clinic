// components/plan/Plan_01.tsx
"use client"

import React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_01"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_01"

const Plan_01 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="lg:max-w-[1200px] mx-auto">
          <div className="mb-24">
            <h2 className="text-center text-[28px] font-bold leading-[150%]">
              様々な料金プランをご用意しております。
            </h2>
            <p className="mt-4 text-center text-base font-light leading-[160%]">
              様々な料金プランをご用意しております
            </p>
          </div>

          {/* <ContentHeadline
            subTitle="Plan"
            mainTitle="料金プラン"
            subTitleClassName=""
            titleClassName=""
          /> */}
          <PlanList />
        </section>
        <PlanOption />
      </SectionContent>
    </>
  )
}

export default Plan_01
