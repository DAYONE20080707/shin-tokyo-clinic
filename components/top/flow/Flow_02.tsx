// components/flow/Flow_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import FlowCard from "@/components/ui/ItemCard/FlowCard_02"
import SectionContent from "@/components/ui/frame/SectionContent"

const Flow_02 = ({ className = "" }) => {
  return (
    <>
      <SectionContent className={className}>
        <section className="lg:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="Flow"
            mainTitle="ご利用の流れ"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-1 gap-y-10">
            <FlowCard
              number="01"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="02"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="03"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="04"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Flow_02
