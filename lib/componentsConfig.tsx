import Header_01 from "@/components/header/Header_01"
import Header_02 from "@/components/header/Header_02"
import Header_03 from "@/components/header/Header_03"
import Header_04 from "@/components/header/Header_04"
import Footer1 from "@/components/footer/Footer_01"
import Footer2 from "@/components/footer/Footer_02"
import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import About_01 from "@/components/top/about/About_01"
import Message_01 from "@/components/top/message/Message_01"
import Service_01 from "@/components/top/service/Service_01"
import News_01 from "@/components/top/news/News_01"
import Plan_01 from "@/components/top/plan/Plan_01"
import Faq_01 from "@/components/top/faq/Faq_01"
import Profile_01 from "@/components/top/profile/Profile_01"
import Flow_01 from "@/components/top/flow/Flow_01"
import Access_01 from "@/components/top/access/Access_01"
import Cta_01 from "@/components/ui/module/cta/Cta_01"
import Cta_02 from "@/components/ui/module/cta/Cta_02"
import Cta_03 from "@/components/ui/module/cta/Cta_03"
import Cta_04 from "@/components/ui/module/cta/Cta_04"
import Aside_01 from "@/components/ui/module/aside/Aside_01"
import Aside_02 from "@/components/ui/module/aside/Aside_02"
import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import Privacy_01 from "@/components/privacy/Privacy_01"
import Site_01 from "@/components/site/Site_01"
import LowerAbout_01 from "@/components/about/about/About_01"
import LowerAbout_02 from "@/components/about/about/About_02"
import LowerAbout_03 from "@/components/about/about/About_03"
import LowerAbout_04 from "@/components/about/about/About_04"
import Purpose_01 from "@/components/about/purpose/Purpose_01"
import History_01 from "@/components/about/history/History_01"
import LowerMessage_01 from "@/components/about/message/Message_01"
import LowerMessage_02 from "@/components/about/message/Message_02"
import LowerMessage_03 from "@/components/about/message/Message_03"
import LowerMessage_04 from "@/components/about/message/Message_04"
import LowerPlan_01 from "@/components/price/plan/Plan_01"
import LowerPlan_02 from "@/components/price/plan/Plan_02"
import LowerPlan_03 from "@/components/price/plan/Plan_03"
import LowerPlan_04 from "@/components/price/plan/Plan_04"
import LowerFaq_01 from "@/components/faq/faq/Faq_01"
import LowerFaq_02 from "@/components/faq/faq/Faq_02"
import Contact_01 from "@/components/contact/contact/Contact_01"
import ServiceAbout_01 from "@/components/service/about/About_01"
import ServiceAbout_02 from "@/components/service/about/About_02"
import ServiceAbout_03 from "@/components/service/about/About_03"
import ServiceAbout_04 from "@/components/service/about/About_04"
import LowerService1_01 from "@/components/service/service1/Service_01"
import LowerService1_02 from "@/components/service/service1/Service_02"
import LowerService1_03 from "@/components/service/service1/Service_03"
import LowerService2_01 from "@/components/service/service2/Service_01"
import LowerService2_02 from "@/components/service/service2/Service_02"
import LowerService2_03 from "@/components/service/service2/Service_03"
import LowerService3_01 from "@/components/service/service3/Service_01"
import LowerService3_02 from "@/components/service/service3/Service_02"
import LowerService3_03 from "@/components/service/service3/Service_03"
import LowerBlog_01 from "@/components/blog/blog/Blog_01"
import LowerBlog_02 from "@/components/blog/blog/Blog_02"
import LowerBlog_03 from "@/components/blog/blog/Blog_03"
import BlogDetail_01 from "@/components/blog/blogDetail/BlogDetail_01"
import LowerCase_01 from "@/components/case/case/LowerCase_01"
import LowerCase_02 from "@/components/case/case/LowerCase_02"
import LowerCase_03 from "@/components/case/case/LowerCase_03"
import CaseDetail_01 from "@/components/case/caseDetail/CaseDetail_01"
import LowerNews_01 from "@/components/news/news/LowerNews_01"
import LowerNews_02 from "@/components/news/news/LowerNews_02"
import LowerNews_03 from "@/components/news/news/LowerNews_03"
import NewsDetail_01 from "@/components/news/newsDetail/NewsDetail_01"

// セクション情報とコンポーネントのマッピングの型定義
interface SectionOption {
  id: string
  src: string
  alt: string
}

interface SectionInfo {
  title: string
  options: SectionOption[]
  components: { [key: string]: JSX.Element }
}

interface PageConfig {
  sections: { [key: string]: SectionInfo }
}

interface ComponentsConfig {
  [key: string]: PageConfig
}

// ページ情報とコンポーネントのマッピング
export const componentsConfig: ComponentsConfig = {
  Home: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      kv: {
        title: "キービジュアル",
        options: [
          { id: "KeyVisual_01", src: "/admin/step-01.png", alt: "KeyVisual_01" },
        ],
        components: {
          KeyVisual_01: <KeyVisual_01 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "About_01", src: "/admin/step-01.png", alt: "About_01" },
        ],
        components: {
          About_01: <About_01 />,
        },
      },
      service: {
        title: "サービス",
        options: [
          { id: "Service_01", src: "/admin/step-01.png", alt: "Service_01" },
        ],
        components: {
          Service_01: <Service_01 />,
        },
      },
      plan: {
        title: "料金プラン",
        options: [
          { id: "Plan_01", src: "/admin/step-01.png", alt: "Plan_01" },
        ],
        components: {
          Plan_01: <Plan_01 />,
        },
      },
      flow: {
        title: "ご利用の流れ",
        options: [
          { id: "Flow_01", src: "/admin/step-01.png", alt: "Flow_01" },
        ],
        components: {
          Flow_01: <Flow_01 />,
        },
      },
      news: {
        title: "お知らせ",
        options: [
          { id: "News_01", src: "/admin/step-01.png", alt: "News_01" },
        ],
        components: {
          News_01: <News_01 />,
        },
      },
      faq: {
        title: "よくある質問",
        options: [
          { id: "Faq_01", src: "/admin/step-01.png", alt: "Faq_01" },
        ],
        components: {
          Faq_01: <Faq_01 />,
        },
      },
      access: {
        title: "アクセス",
        options: [
          { id: "Access_01", src: "/admin/step-01.png", alt: "Access_01" },
        ],
        components: {
          Access_01: <Access_01 />,
        },
      },
      aside: {
        title: "ASIDE",
        options: [
          { id: "Aside_01", src: "/admin/step-01.png", alt: "Aside_01" },
          { id: "Aside_02", src: "/admin/step-02.png", alt: "Aside_02" },
        ],
        components: {
          Aside_01: <Aside_01 />,
          Aside_02: <Aside_02 />,
        },
      },
      profile: {
        title: "会社概要",
        options: [
          { id: "Profile_01", src: "/admin/step-01.png", alt: "Profile_01" },
        ],
        components: {
          Profile_01: <Profile_01 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Blog: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      blog: {
        title: "記事一覧",
        options: [
          { id: "LowerBlog_01", src: "/admin/step-01.png", alt: "LowerBlog_01" },
          { id: "LowerBlog_02", src: "/admin/step-02.png", alt: "LowerBlog_02" },
          { id: "LowerBlog_03", src: "/admin/step-03.png", alt: "LowerBlog_03" },
        ],
        components: {
          LowerBlog_01: <LowerBlog_01 />,
          LowerBlog_02: <LowerBlog_02 />,
          LowerBlog_03: <LowerBlog_03 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  About: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "LowerAbout_01", src: "/admin/step-01.png", alt: "LowerAbout_01" },
          { id: "LowerAbout_02", src: "/admin/step-02.png", alt: "LowerAbout_02" },
          { id: "LowerAbout_03", src: "/admin/step-03.png", alt: "LowerAbout_03" },
          { id: "LowerAbout_04", src: "/admin/step-04.png", alt: "LowerAbout_04" },
        ],
        components: {
          LowerAbout_01: <LowerAbout_01 />,
          LowerAbout_02: <LowerAbout_02 />,
          LowerAbout_03: <LowerAbout_03 />,
          LowerAbout_04: <LowerAbout_04 />,
        },
      },
      purpose: {
        title: "私たちの想い",
        options: [{ id: "Purpose_01", src: "/admin/step-01.png", alt: "Purpose_01" }],
        components: {
          Purpose_01: <Purpose_01 />,
        },
      },
      history: {
        title: "企業沿革",
        options: [{ id: "History_01", src: "/admin/step-01.png", alt: "History_01" }],
        components: {
          History_01: <History_01 />,
        },
      },
      message: {
        title: "メッセージ",
        options: [
          { id: "LowerMessage_01", src: "/admin/step-01.png", alt: "LowerMessage_01" },
          { id: "LowerMessage_02", src: "/admin/step-02.png", alt: "LowerMessage_02" },
          { id: "LowerMessage_03", src: "/admin/step-03.png", alt: "LowerMessage_03" },
          { id: "LowerMessage_04", src: "/admin/step-04.png", alt: "LowerMessage_04" },
        ],
        components: {
          LowerMessage_01: <LowerMessage_01 />,
          LowerMessage_02: <LowerMessage_02 />,
          LowerMessage_03: <LowerMessage_03 />,
          LowerMessage_04: <LowerMessage_04 />,
        },
      },
      profile: {
        title: "会社概要",
        options: [
          { id: "Profile_01", src: "/admin/step-01.png", alt: "Profile_01" },
        ],
        components: {
          Profile_01: <Profile_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Price: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      plan: {
        title: "料金プラン",
        options: [
          { id: "LowerPlan_01", src: "/admin/step-01.png", alt: "LowerPlan_01" },
          { id: "LowerPlan_02", src: "/admin/step-02.png", alt: "LowerPlan_02" },
          { id: "LowerPlan_03", src: "/admin/step-03.png", alt: "LowerPlan_03" },
          { id: "LowerPlan_04", src: "/admin/step-04.png", alt: "LowerPlan_04" },
        ],
        components: {
          LowerPlan_01: <LowerPlan_01 />,
          LowerPlan_02: <LowerPlan_02 />,
          LowerPlan_03: <LowerPlan_03 />,
          LowerPlan_04: <LowerPlan_04 />,
        },
      },
      flow: {
        title: "ご利用の流れ",
        options: [
          { id: "Flow_01", src: "/admin/step-01.png", alt: "Flow_01" },
        ],
        components: {
          Flow_01: <Flow_01 className="bg-bgLight" />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Faq: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      faq: {
        title: "よくある質問",
        options: [
          { id: "LowerFaq_01", src: "/admin/step-01.png", alt: "LowerFaq_01" },
          { id: "LowerFaq_02", src: "/admin/step-02.png", alt: "LowerFaq_02" },
        ],
        components: {
          LowerFaq_01: <LowerFaq_01 />,
          LowerFaq_02: <LowerFaq_02 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Contact: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      contact: {
        title: "お問い合わせ",
        options: [{ id: "Contact_01", src: "/admin/step-01.png", alt: "Contact_01" }],
        components: {
          Contact_01: <Contact_01 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Service: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "ServiceAbout_01", src: "/admin/step-01.png", alt: "ServiceAbout_01" },
          { id: "ServiceAbout_02", src: "/admin/step-02.png", alt: "ServiceAbout_02" },
          { id: "ServiceAbout_03", src: "/admin/step-03.png", alt: "ServiceAbout_03" },
          { id: "ServiceAbout_04", src: "/admin/step-04.png", alt: "ServiceAbout_04" },
        ],
        components: {
          ServiceAbout_01: <ServiceAbout_01 />,
          ServiceAbout_02: <ServiceAbout_02 />,
          ServiceAbout_03: <ServiceAbout_03 />,
          ServiceAbout_04: <ServiceAbout_04 />,
        },
      },
      Cta1: {
        title: "CTA1",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      service1: {
        title: "サービス1",
        options: [
          { id: "LowerService1_01", src: "/admin/step-01.png", alt: "LowerService1_01" },
          { id: "LowerService1_02", src: "/admin/step-02.png", alt: "LowerService1_02" },
          { id: "LowerService1_03", src: "/admin/step-03.png", alt: "LowerService1_03" },
        ],
        components: {
          LowerService1_01: <LowerService1_01 />,
          LowerService1_02: <LowerService1_02 />,
          LowerService1_03: <LowerService1_03 />,
        },
      },
      service2: {
        title: "サービス2",
        options: [
          { id: "LowerService2_01", src: "/admin/step-01.png", alt: "LowerService2_01" },
          { id: "LowerService2_02", src: "/admin/step-02.png", alt: "LowerService2_02" },
          { id: "LowerService2_03", src: "/admin/step-03.png", alt: "LowerService2_03" },
        ],
        components: {
          LowerService2_01: <LowerService2_01 />,
          LowerService2_02: <LowerService2_02 />,
          LowerService2_03: <LowerService2_03 />,
        },
      },
      service3: {
        title: "サービス3",
        options: [
          { id: "LowerService3_01", src: "/admin/step-01.png", alt: "LowerService3_01" },
          { id: "LowerService3_02", src: "/admin/step-02.png", alt: "LowerService3_02" },
          { id: "LowerService3_03", src: "/admin/step-03.png", alt: "LowerService3_03" },
        ],
        components: {
          LowerService3_01: <LowerService3_01 />,
          LowerService3_02: <LowerService3_02 />,
          LowerService3_03: <LowerService3_03 />,
        },
      },
      cta2: {
        title: "CTA2",
        options: [
          { id: "Cta_01", src: "/admin/step-01.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/step-02.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/step-03.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/step-04.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
          Cta_02: <Cta_02 />,
          Cta_03: <Cta_03 />,
          Cta_04: <Cta_04 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Privacy: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      privacy: {
        title: "プライバシーポリシー",
        options: [{ id: "Privacy_01", src: "/admin/step-01.png", alt: "Privacy_01" }],
        components: {
          Privacy_01: <Privacy_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Site: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      privacy: {
        title: "サイトポリシー",
        options: [{ id: "Site_01", src: "/admin/step-01.png", alt: "Site_01" }],
        components: {
          Site_01: <Site_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  BlogDetail: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      blogDetail: {
        title: "記事詳細",
        options: [
          { id: "BlogDetail_01", src: "/admin/step-01.png", alt: "BlogDetail_01" },
        ],
        components: {
          BlogDetail_01: <BlogDetail_01 params={{ id: "" }} />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  Case: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      case: {
        title: "事例一覧",
        options: [
          { id: "LowerCase_01", src: "/admin/step-01.png", alt: "LowerCase_01" },
          { id: "LowerCase_02", src: "/admin/step-02.png", alt: "LowerCase_02" },
          { id: "LowerCase_03", src: "/admin/step-03.png", alt: "LowerCase_03" },
        ],
        components: {
          LowerCase_01: <LowerCase_01 />,
          LowerCase_02: <LowerCase_02 />,
          LowerCase_03: <LowerCase_03 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  News: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/step-01.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/step-02.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/step-03.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/step-04.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
          Lowerkv_02: <Lowerkv_02 />,
          Lowerkv_03: <Lowerkv_03 />,
          Lowerkv_04: <Lowerkv_04 />,
        },
      },
      news: {
        title: "お知らせ一覧",
        options: [
          { id: "LowerNews_01", src: "/admin/step-01.png", alt: "LowerNews_01" },
          { id: "LowerNews_02", src: "/admin/step-02.png", alt: "LowerNews_02" },
          { id: "LowerNews_03", src: "/admin/step-03.png", alt: "LowerNews_03" },
        ],
        components: {
          LowerNews_01: <LowerNews_01 />,
          LowerNews_02: <LowerNews_02 />,
          LowerNews_03: <LowerNews_03 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  CaseDetail: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      caseDetail: {
        title: "事例詳細",
        options: [
          { id: "CaseDetail_01", src: "/admin/step-01.png", alt: "CaseDetail_01" },
        ],
        components: {
          CaseDetail_01: <CaseDetail_01 params={{ id: "" }} />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  NewsDetail: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/step-01.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/step-02.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/step-03.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/step-04.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      newsDetail: {
        title: "お知らせ詳細",
        options: [
          { id: "NewsDetail_01", src: "/admin/step-01.png", alt: "NewsDetail_01" },
        ],
        components: {
          NewsDetail_01: <NewsDetail_01 params={{ id: "" }} />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/step-01.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/step-02.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
}
