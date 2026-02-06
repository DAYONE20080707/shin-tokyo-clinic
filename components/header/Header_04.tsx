"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

// ヘッダー
const Header_04 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  return (
    <header className="w-full h-[75px] lg:h-auto tracking-wide px-4 lg:px-0 fixed top-0 left-0 z-50 bg-white">
      <div className="h-full lg:max-w-[1200px] lg:mx-auto lg:px-5 flex items-center justify-between lg:py-6">
        {/* ロゴ */}
        <Link href="/" className="w-[200px] lg:w-[350px]">
          <Image
            src="/common/logo01.png"
            alt="シン・東京駅こどもの成長クリニック"
            width={350}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* PC用ナビゲーション */}
        <div className="hidden lg:flex flex-col items-end gap-4">
          {/* 上部ボタン */}
          <div className="flex gap-1">
            <Link
              href="/coming-soon"
              className="bg-[#ffd89b] text-white text-lg font-bold rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity w-[220px]"
            >
              <Image src="/common/navi-icon01.svg" alt="" width={24} height={24} className="w-6 h-6" />
              保険診療予約
            </Link>
            <Link
              href="/coming-soon"
              className="bg-[#73c6be] text-white text-lg font-bold rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity w-[220px]"
            >
              <Image src="/common/navi-icon02.svg" alt="" width={20} height={20} className="w-5 h-5 scale-y-[-1]" />
              低身長治療予約
            </Link>
            <Link
              href="tel:0362819234"
              className="bg-accentColor text-white text-lg font-bold rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity w-[220px]"
            >
              <Image src="/common/sidebar-icon03.svg" alt="" width={20} height={20} className="w-5 h-5" />
              03-6281-9234
            </Link>
          </div>

          {/* メニュー */}
          <nav>
            <ul className="flex items-center gap-10">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-black font-semibold hover:text-accentColor transition-colors tracking-[0.03em]"
                  >
                    {item.nameJa}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ハンバーガーメニューボタン（SP） */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <div className="w-10 h-10 bg-accentColor rounded flex flex-col justify-center items-center gap-1.5">
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* ハンバーガーメニュー（SP） */}
      <div
        className={`fixed z-50 top-0 right-0 h-screen w-full bg-white shadow-lg transform transition-transform duration-300 ${
          MenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            aria-label="メニューを閉じる"
            onClick={toggleMenu}
            className="w-10 h-10 bg-accentColor rounded flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* メニューアイテム */}
        <ul className="flex flex-col items-center gap-6">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-lg font-semibold text-black"
                onClick={toggleMenu}
              >
                {item.nameJa}
              </Link>
            </li>
          ))}
        </ul>

        {/* ボタン */}
        <div className="w-[80%] lg:w-full mx-auto flex flex-col items-center gap-3 mt-8">
          <Link
            href="/coming-soon"
            className="w-full bg-[#ffd89b] text-white text-base font-bold rounded-full py-4 flex items-center justify-center gap-2"
            onClick={toggleMenu}
          >
            <Image src="/common/navi-icon01.svg" alt="" width={24} height={24} className="w-6 h-6" />
            保険診療予約
          </Link>
          <Link
            href="/coming-soon"
            className="w-full bg-[#73c6be] text-white text-base font-bold rounded-full py-4 flex items-center justify-center gap-2"
            onClick={toggleMenu}
          >
            <Image src="/common/navi-icon02.svg" alt="" width={20} height={20} className="w-5 h-5 scale-y-[-1]" />
            低身長治療予約
          </Link>
          <Link
            href="tel:0362819234"
            className="w-full bg-accentColor text-white text-base font-bold rounded-full py-4 flex items-center justify-center gap-2"
            onClick={toggleMenu}
          >
            <Image src="/common/sidebar-icon03.svg" alt="" width={20} height={20} className="w-5 h-5" />
            03-6281-9234
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header_04
