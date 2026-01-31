// components/plan/Plan_02.tsx
import PlanCard from "@/components/ui/ItemCard/PlanCard_02"
import PlanOption from "@/components/ui/module/PlanOption"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanList from "@/components/ui/ItemCard/PlanList_02"
import SectionContent from "@/components/ui/frame/SectionContent"

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
        <PlanList />
      </section>
      <PlanOption />
    </SectionContent>
  )
}

export default Plan_02
