"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/ui/navigation/Menu";
import Sns from "@/components/ui/button/SnsButton";
import TelButton from "@/components/ui/button/TelButton";
import ContactButton from "@/components/ui/button/ContactButtonHeader";
import CompanyInfo from "@/components/ui/navigation/CompanyInfo";

// ヘッダー
const Header_04 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false);

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  const { companyName } = CompanyInfo[0];
  return (
    <div className="h-[98px]">
      <header className="w-full h-20 lg:h-[98px] text-[#393939] tracking-wide px-4 lg:px-0 fixed top-0 left-0 z-10 bg-white">
        <div className="lg:max-w-screen-xl h-full mx-auto flex items-center justify-between ">
          <div className="flex items-center space-x-10 ">
            <Link href="/">{CompanyInfo[0].companyName("primary")}</Link>
          </div>
          <div className="hidden lg:flex flex-col justify-between items-end h-full">
            <div className="flex items-center justify-center w-full">
              <TelButton />
              <ContactButton className="h-10" />
            </div>
            <ul className="hidden lg:flex items-center space-x-10 font-semibold  ">
              {Menu.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.href}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ハンバーガーメニューボタン */}
          <div
            className="lg:hidden w-10 lg:w-20 h-20 flex items-center ustify-end lg:justify-center cursor-pointer"
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
          <div className="flex justify-center items-center w-[260px] mx-auto ">
            <TelButton className="h-[72px]" />
          </div>
          <div className="flex justify-center items-center w-[260px] mx-auto mt-2">
            <ContactButton className="h-[72px]" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header_04;
