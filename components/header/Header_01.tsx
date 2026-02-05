// components/header/Header_01
// Figma: 東京駅こどもの成長クリニック ヘッダー

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu as MenuIcon, X, Phone } from "lucide-react"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "../ui/frame/HeaderContent"

// メニュー項目定義
const menuItems = [
  { name: "お知らせ", href: "/coming-soon" },
  { name: "診療案内", href: "/coming-soon" },
  { name: "医師紹介", href: "/coming-soon" },
  { name: "当院の特徴", href: "/coming-soon" },
  { name: "医院の様子", href: "/coming-soon" },
  { name: "よくあるご質問", href: "/coming-soon" },
  { name: "アクセス", href: "/coming-soon" },
]

// CTAボタン定義
const ctaButtons = [
  {
    label: "保険診療予約",
    icon: "/images/navi-icon01.svg",
    href: "/coming-soon",
    bgColor: "bg-[#ffd89b]",
  },
  {
    label: "低身長治療予約",
    icon: "/images/navi-icon02.svg",
    href: "/coming-soon",
    bgColor: "bg-[#73c6be]",
  },
]

const Header_01 = () => {
  // スクロール状態とメニュー開閉状態を管理
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsAnimating(false)
      }, 200)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <HeaderContent className="h-auto">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        {/* メインヘッダー */}
        <div className="max-w-[1200px] mx-auto px-5 py-6 flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="shrink-0">
            <div className="w-[180px] lg:w-[240px] h-[50px] lg:h-[70px] relative">
              {CompanyInfo[0].companyName("tertiary")}
            </div>
          </Link>

          {/* デスクトップ: CTAボタン + メニュー */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* CTAボタン群 */}
            <div className="flex gap-1 items-center">
              {ctaButtons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className={`${btn.bgColor} flex gap-1 items-center justify-center px-4 py-2 rounded-full w-[240px]`}
                >
                  <Image
                    src={btn.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-white font-bold text-lg tracking-wide">
                    {btn.label}
                  </span>
                </Link>
              ))}
              {/* 電話ボタン */}
              <Link
                href="tel:0000000000"
                className="bg-primaryColor flex gap-1 items-center justify-center px-6 py-1 rounded-full w-[150px]"
              >
                <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                <span className="text-white font-bold text-sm tracking-wide">
                  00-000-0000
                </span>
              </Link>
            </div>

            {/* メニュー */}
            <nav className="flex gap-10 items-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-[#393939] text-base font-semibold tracking-wide hover:opacity-70 transition-opacity py-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ハンバーガーメニューボタン（SP） */}
          <button
            className={`block lg:hidden text-[#393939] transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" strokeWidth={1} />
            ) : (
              <MenuIcon className="w-8 h-8" strokeWidth={1} />
            )}
          </button>
        </div>
      </div>

      {/* スマホ用メニュー */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white lg:hidden transition-opacity duration-300 z-50 overflow-y-auto ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${isAnimating ? "pointer-events-auto" : ""}`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-5">
          <button onClick={handleMenuToggle} aria-label="Close menu">
            <X className="w-8 h-8 text-[#393939]" strokeWidth={1} />
          </button>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col gap-3 px-5 mb-8">
          {ctaButtons.map((btn, index) => (
            <Link
              key={index}
              href={btn.href}
              className={`${btn.bgColor} flex gap-2 items-center justify-center px-4 py-3 rounded-full`}
              onClick={handleMenuToggle}
            >
              <Image
                src={btn.icon}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white font-bold text-lg tracking-wide">
                {btn.label}
              </span>
            </Link>
          ))}
          <Link
            href="tel:0000000000"
            className="bg-primaryColor flex gap-2 items-center justify-center px-4 py-3 rounded-full"
            onClick={handleMenuToggle}
          >
            <Phone className="w-5 h-5 text-white" strokeWidth={2} />
            <span className="text-white font-bold text-base tracking-wide">
              00-000-0000
            </span>
          </Link>
        </div>

        {/* メニュー */}
        <ul className="flex flex-col px-5">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200">
              <Link
                href={item.href}
                className="block py-4 text-[#393939] text-base font-semibold"
                onClick={handleMenuToggle}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HeaderContent>
  )
}

export default Header_01
