// components/header/Header_02

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Sns from "@/components/ui/button/SnsButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "@/components/ui/frame/HeaderContent"
import HamburgerMenu from "@/components/ui/navigation/HamburgerMenu" // 新しいハンバーガーメニューコンポーネントをインポート

const Header_02 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const { companyName } = CompanyInfo[0]

  return (
    <HeaderContent className="border-b border-borderGray">
      <div className="w-full flex items-center space-x-5  lg:space-x-10 justify-between px-5 lg:pl-10 lg:pr-0 ">
        <Link href="/" className="w-[150px] lg:w-[200px]">
          <div className="block lg:hidden">
            {CompanyInfo[0].companyName("primary")} {/* SP用ロゴ */}
          </div>
          <div className="hidden lg:block">
            {CompanyInfo[0].companyName("primary")} {/* PC用ロゴ */}
          </div>
        </Link>
        <div className="flex items-center space-x-3 lg:space-x-10">
          <ul className="flex items-center justify-end font-semibold  space-x-2 lg:space-x-0">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-9 h-9 lg:w-[60px] lg:h-[60px] flex items-center justify-center"
              >
                <Link href={item.href}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ハンバーガーメニューボタン */}
          <div
            className="lg:border-l  border-borderGray w-10 lg:w-20 h-20 flex items-center justify-end lg:justify-center cursor-pointer"
            onClick={toggleMenu}
          >
            <Image
              src="/common/Menu.png"
              alt="メニューボタン"
              width={38}
              height={38}
            />
          </div>
        </div>
      </div>

      {/* ハンバーガーメニューの表示 */}
      <HamburgerMenu isOpen={MenuOpen} toggleMenu={toggleMenu} />
    </HeaderContent>
  )
}

export default Header_02
