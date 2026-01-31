"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

const Header_03 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const { companyName } = CompanyInfo[0]

  return (
    <header className=" lg:border-r border-black w-full lg:w-32 h-20 lg:h-screen text-[#393939] tracking-wide py-6 bg-white fixed z-10 px-4 lg:px-0 ">
      <div className="h-full flex lg:flex-col items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="text-center w-[60px] lg:w-[100px]">
            {CompanyInfo[0].companyName("tertiary")}
          </Link>
        </div>

        {/* snsボタンSP */}
        <div className="lg:hidden lg:border-t  border-borderGray lg:w-3/4  lg:pt-5">
          <ul className="flex lg:flex-col items-center font-semibold space-x-2">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 lg:w-[60px] lg:h-[60px] flex items-center justify-center"
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
        </div>

        {/* ハンバーガーメニューボタン */}
        <div
          className="w-10 lg:w-20 h-20 flex items-center ustify-end lg:justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          <Image
            src="/common/Menu.png"
            alt="メニューボタン"
            width={38}
            height={38}
          />
        </div>

        {/* SNSボタン */}
        <div className="hidden lg:block  lg:border-t  border-borderGray lg:w-3/4 pl-2 lg:pl-0 lg:pt-5">
          <ul className="flex lg:flex-col items-center font-semibold space-x-1">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 lg:w-[60px] lg:h-[60px] flex items-center justify-center"
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
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      <div
        className={`fixed z-10 top-0 right-0 h-screen w-full lg:w-[500px] bg-bgBlack text-white shadow-lg transform transition-transform duration-300 ${
          MenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            aria-label="メニューを閉じる"
            onClick={toggleMenu}
            className="w-10 h-10"
          >
            <div className="w-[38px] h-[38px] relative">
              <div className="w-[53.74px] bg-white h-[1px] left-0 top-0 absolute origin-top-left rotate-45 border border-white"></div>
              <div className="w-[53.74px] bg-white h-[1px] left-[38px] top-0 absolute origin-top-left rotate-[135deg] border border-white"></div>
            </div>
          </button>
        </div>

        {/* メニューアイテム */}
        <ul className="flex flex-col items-center space-y-6 mb-16">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-lg font-semibold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center w-[260px] mx-auto">
          <ContactButton className="h-[72px]" />
        </div>
      </div>
    </header>
  )
}

export default Header_03
