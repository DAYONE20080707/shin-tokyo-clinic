import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import About_01 from "@/components/top/about/About_01"
import Message_01 from "@/components/top/message/Message_01"
import Service_01 from "@/components/top/service/Service_01"
import News_01 from "@/components/top/news/News_01"
import Faq_01 from "@/components/top/faq/Faq_01"
import Profile_01 from "@/components/top/profile/Profile_01"
import Flow_01 from "@/components/top/flow/Flow_01"
import Access_01 from "@/components/top/access/Access_01"

// メインページ
// Figmaデザイン順: KV → 選ばれる理由 → 診療案内 → 院長挨拶 → 当院の特徴 → 医院の様子 → 予約の流れ → FAQ → アクセス
const HomePage = () => {
  return (
    <div>
      <KeyVisual_01 />
      <News_01 />

      <Service_01 />
      <Message_01 />
      <About_01 />
      <Profile_01 />

      <Flow_01 />
      <Faq_01 />
      <Access_01 />
    </div>
  )
}

export default HomePage
