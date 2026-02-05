import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Plan_01 from "@/components/price/plan/Plan_01"
import Flow_01 from "@/components/top/flow/Flow_01"
import Cta_01 from "@/components/ui/module/cta/Cta_01"

// 料金プラン
const PricePage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <Plan_01 />
      <Flow_01 className="bg-bgLight" />
      <Cta_01 />
    </div>
  )
}

export default PricePage
