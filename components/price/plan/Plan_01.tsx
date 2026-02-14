// components/plan/Plan_01.tsx
"use client"

import SectionContent from "@/components/ui/frame/SectionContent"
import PlanOption from "@/components/ui/module/PlanOption"

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
        </section>
        <PlanOption />
      </SectionContent>
    </>
  )
}

export default Plan_01
