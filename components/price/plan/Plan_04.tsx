// components/plan/Plan_04.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanCard_04 from "@/components/ui/ItemCard/PlanCard_04"
import PlanList from "@/components/ui/ItemCard/PlanList_04"

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
        <PlanList />
      </section>
      <PlanOption />
    </SectionContent>
  )
}

export default Plan_04
