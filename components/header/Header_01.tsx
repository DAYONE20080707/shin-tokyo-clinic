// components/header/Header_01

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu as MenuIcon, X } from "lucide-react"
import Menu from "@/components/ui/navigation/Menu"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "../ui/frame/HeaderContent"
import SnsIconButton from "@/components/ui/button/SnsIconButton"
import { SnsButton } from "@/components/ui/button/SnsButton"

const Header_01 = () => {
  const { companyName } = CompanyInfo[0]

  // スクロール状態とメニュー開閉状態を管理
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // メニュー開閉状態
  const [isAnimating, setIsAnimating] = useState(false) // フェードアニメーション用状態

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
      }, 200) // アニメーションの長さに合わせて調整
    } else {
      setIsMenuOpen(true)
    }
  }

  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ")

  return (
    <HeaderContent className="h-20">
      <div
        className={`px-6 lg:pl-10 lg:pr-0 w-full h-full flex items-center justify-between mx-auto transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex gap-10">
          {/* ロゴ */}
          <Link href="/" className="w-[150px] lg:w-[200px]">
            {CompanyInfo[0].companyName("primary")}
          </Link>

          {/* デスクトップ用メニュー */}
          <ul className="hidden lg:flex items-center gap-10 font-en tracking-[0.03em]">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex h-full gap-10">
          <div className="flex items-center ">
            {SnsButton.slice(0, 3).map((sns, index) => (
              <SnsIconButton
                key={index}
                href={sns.href}
                src={sns.src}
                alt={sns.name}
                className="text-white hover:text-accentColor transition-colors duration-200"
              />
            ))}
          </div>
          <ContactButton variant="square" />
        </div>
        {/* ハンバーガーメニューボタン */}
        <button
          className={`block lg:hidden text-white transition-transform duration-300 ${
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

      {/* スマホ用メニュー */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-70 text-white lg:hidden transition-opacity duration-300 z-50 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${isAnimating ? "pointer-events-auto" : ""}`}
      >
        <ul className="flex flex-col items-center space-y-6 py-10">
          {filteredMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <div onClick={handleMenuToggle}>{item.name}</div>
              </Link>
            </li>
          ))}
          <div className="flex items-center ">
            {SnsButton.slice(0, 3).map((sns, index) => (
              <SnsIconButton
                key={index}
                href={sns.href}
                src={sns.name === "Line" ? sns.src : sns.src_w || sns.src}
                alt={sns.name}
                className="text-white hover:text-accentColor transition-colors duration-200"
              />
            ))}
          </div>
          {/* ContactButton */}
          <li>
            <ContactButton variant="square" className="w-full py-4 font-normal" />
          </li>
        </ul>
      </div>
    </HeaderContent>
  )
}

export default Header_01
