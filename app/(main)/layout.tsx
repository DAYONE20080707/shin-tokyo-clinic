import Footer1 from "@/components/footer/Footer_01"
import Header_04 from "@/components/header/Header_04"
import Link from "next/link"

interface MainLayoutProps {
  children: React.ReactNode
}

// 右サイドバー（WEB予約、LINE予約、お問い合わせ）
const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-[200px] z-50 hidden lg:flex flex-col">
      {/* WEB予約 */}
      <Link
        href="/"
        className="w-[80px] h-[211px] bg-accentColor rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="writing-vertical-rl text-sm tracking-[0.2em]">
          WEB予約
        </span>
      </Link>
      {/* LINE予約 */}
      <Link
        href="/"
        className="w-[80px] h-[211px] bg-[#06C755] rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-2"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        <span className="writing-vertical-rl text-sm tracking-[0.2em]">
          LINE予約
        </span>
      </Link>
      {/* お問い合わせ */}
      <Link
        href="/contact"
        className="w-[80px] h-[211px] bg-[#FFB800] rounded-l-[10px] flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span className="writing-vertical-rl text-sm tracking-[0.2em]">
          お問い合わせ
        </span>
      </Link>
    </div>
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
