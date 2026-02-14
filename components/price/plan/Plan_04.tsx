// components/plan/Plan_04.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import PlanOption from "@/components/ui/module/PlanOption"

const Plan_04 = () => {
  return (
    <SectionContent className="bg-bgLight">
      <section className="lg:max-w-[1200px] mx-auto">
        <ContentHeadline
          subTitle="Plan"
          mainTitle="料金プラン"
          subTitleClassName=""
          titleClassName=""
        />
      </section>
      <PlanOption />
    </SectionContent>
  )
}

export default Plan_04
