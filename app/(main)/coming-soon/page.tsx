import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import PageContent from "@/components/ui/frame/PageContent"
import Breadcrumb from "@/components/ui/module/Breadcrumb"
import ComingSoon from "@/components/coming-soon/ComingSoon"
import SectionContent from "@/components/ui/frame/SectionContent"

// お問い合わせ完了
const ComingSoonPage = () => {
  return (
    <PageContent variant="primary">
      <div className="mx-auto max-w-[1200px]">
        <Breadcrumb
          mainTitle="Coming Soon"
          parentDirectoryName=""
          parentDirectoryLink=""
        />
      </div>

      {/* <Lowerkv_01 enTitle="CONTACT" mainTitle="お問い合わせ" /> */}
      <ComingSoon />
    </PageContent>
  )
}

export default ComingSoonPage
