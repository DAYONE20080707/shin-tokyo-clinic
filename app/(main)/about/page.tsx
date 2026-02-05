import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import About_01 from "@/components/about/about/About_01"
import Purpose_01 from "@/components/about/purpose/Purpose_01"
import History_01 from "@/components/about/history/History_01"
import Message_01 from "@/components/about/message/Message_01"
import Profile_01 from "@/components/top/profile/Profile_01"

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <About_01 />
      <Purpose_01 />
      <History_01 />
      <Message_01 />
      <Profile_01 />
    </div>
  )
}

export default AboutPage
