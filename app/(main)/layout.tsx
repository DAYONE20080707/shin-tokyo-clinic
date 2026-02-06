import Footer1 from "@/components/footer/Footer_01"
import Header_04 from "@/components/header/Header_04"
import Link from "next/link"
import Image from "next/image"

interface MainLayoutProps {
  children: React.ReactNode
}

// PC: 右サイドバー（縦書き）/ SP: 画面最下部固定（横並び横書き）
const RightSidebar = () => {
  return (
    <>
      {/* PC: 右サイドバー */}
      <div className="fixed right-0 top-[200px] z-50 hidden lg:flex flex-col gap-4">
        {/* 保険診療予約 */}
        <Link
          href="/coming-soon"
          className="w-[80px] h-[220px] bg-[#ffd89b] rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity py-[10px] px-[10px]"
        >
          <Image
            src="/common/sidebar-icon01.svg"
            alt=""
            width={24}
            height={24}
            className="mb-3"
          />
          <span className="[writing-mode:vertical-rl] text-base font-bold tracking-[0.02em]">
            保険診療予約
          </span>
        </Link>
        {/* 低身長治療予約 */}
        <Link
          href="/coming-soon"
          className="w-[80px] h-[220px] bg-[#73c6be] rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity py-[10px] px-[10px]"
        >
          <Image
            src="/common/sidebar-icon02.svg"
            alt=""
            width={20}
            height={24}
            className="mb-3 scale-y-[-1]"
          />
          <span className="[writing-mode:vertical-rl] text-base font-bold tracking-[0.02em]">
            低身長治療予約
          </span>
        </Link>
        {/* 電話番号 */}
        <Link
          href="tel:0362819234"
          className="w-[80px] h-[220px] bg-accentColor rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity py-[10px] px-[10px]"
        >
          <Image
            src="/common/sidebar-icon03.svg"
            alt=""
            width={20}
            height={20}
            className="mb-3"
          />
          <span className="[writing-mode:vertical-rl] text-lg font-bold tracking-[0.02em]">
            03-6281-9234
          </span>
        </Link>
      </div>

      {/* SP: 画面最下部固定バー */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden">
        <Link
          href="/coming-soon"
          className="flex-1 bg-[#ffd89b] flex items-center justify-center py-3 text-white hover:opacity-90 transition-opacity"
        >
          <span className="text-sm font-bold">保険診療予約</span>
        </Link>
        <Link
          href="/coming-soon"
          className="flex-1 bg-[#73c6be] flex items-center justify-center py-3 text-white hover:opacity-90 transition-opacity"
        >
          <span className="text-sm font-bold">低身長治療予約</span>
        </Link>
        <Link
          href="tel:0362819234"
          className="flex-1 bg-accentColor flex items-center justify-center py-3 text-white hover:opacity-90 transition-opacity"
        >
          <span className="text-sm font-bold">電話</span>
        </Link>
      </div>
    </>
  )
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header_04 />
      <main className="flex-1">{children}</main>
      <RightSidebar />
      <Footer1 />
    </div>
  )
}

export default MainLayout
