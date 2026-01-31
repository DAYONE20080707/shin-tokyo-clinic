import Link from "next/link"
import { Mail } from "lucide-react"

const ContactButtonHeader = ({
  className = "",
  children = "Contact us", // デフォルトのテキスト
}: {
  className?: string
  children?: React.ReactNode
}) => {
  // テキストが英語の場合はfont-en、日本語の場合はfont-enを使わない
  const isEnglish = children === "Contact us"

  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full px-4 py-4 min-w-[197px] ${
        isEnglish
          ? "font-en text-lg tracking-[0.03em]"
          : " text-base tracking-[0.03em]"
      } ${className}`}
    >
      <Mail className="w-4 h-4 mr-1 flex-shrink-0" />
      {children}
    </Link>
  )
}

export default ContactButtonHeader
