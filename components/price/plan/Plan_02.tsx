// components/plan/Plan_02.tsx
import SectionContent from "@/components/ui/frame/SectionContent"
import PlanOption from "@/components/ui/module/PlanOption"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"

const Plan_02 = () => {
  return (
    <SectionContent className="bg-bgLight">
      <section className="w-full lg:max-w-[1200px] mx-auto overflow-hidden">
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

export default Plan_02
