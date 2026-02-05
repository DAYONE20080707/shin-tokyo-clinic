import Link from "next/link"
import { Mail } from "lucide-react"

type ContactButtonVariant = "rounded" | "square"

const ContactButton = ({
  className = "",
  children = "Contact us",
  variant = "rounded",
}: {
  className?: string
  children?: React.ReactNode
  variant?: ContactButtonVariant
}) => {
  // テキストが英語の場合はfont-en、日本語の場合はfont-enを使わない
  const isEnglish = children === "Contact us"

  // variant に応じたスタイル
  const variantStyles = {
    rounded: "px-10 py-4 rounded-full",
    square: "px-4 py-4 min-w-[197px]",
  }

  return (
    <Link
      href="/coming-soon"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full ${variantStyles[variant]} ${
        isEnglish ? "font-en text-lg tracking-[0.03em]" : " text-base tracking-[0.03em]"
      } ${className}`}
    >
      <Mail className="w-4 h-4 mr-1 flex-shrink-0" />
      {children}
    </Link>
  )
}

export default ContactButton
