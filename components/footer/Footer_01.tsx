"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Ruler, Phone } from "lucide-react";

// フッターメニュー
const footerMenu = [
  { name: "お知らせ", href: "/coming-soon" },
  { name: "診療案内", href: "/coming-soon" },
  { name: "医師紹介", href: "/coming-soon" },
  { name: "当院の特徴", href: "/coming-soon" },
  { name: "医院の様子", href: "/coming-soon" },
  { name: "よくあるご質問", href: "/coming-soon" },
  { name: "アクセス", href: "/coming-soon" },
];

// フッター
const Footer_01 = () => {
  return (
    <footer className="bg-white py-10 lg:py-[120px] px-4 lg:px-0">
      <div className="lg:max-w-[1200px] mx-auto">
        {/* 上部 */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* 左側: ロゴ・企業情報 */}
          <div className="flex flex-col gap-3">
            <div className="w-[200px] lg:w-[240px]">
              <Image
                src="/images/logo01.png"
                alt="東京駅こどもの成長クリニック"
                width={240}
                height={70}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-base font-medium text-[#393939] leading-[1.6]">
              シン・東京駅こどもの成長クリニック
            </p>
            <div className="text-base font-normal text-[#393939] leading-[1.6]">
              <p>〒103-0028 東京都中央区八重洲1-6-17</p>
              <p>大久保ビルディング9階</p>
            </div>
          </div>

          {/* 右側: メニュー・ボタン */}
          <div className="flex flex-col items-start lg:items-end gap-6 lg:gap-7">
            {/* メニュー */}
            <nav>
              <ul className="flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-10 text-base font-medium text-[#393939] leading-[1.6]">
                {footerMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-primaryColor transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ボタン */}
            <div className="flex flex-col lg:flex-row gap-2 w-[80%] mx-auto lg:w-auto lg:mx-0">
              <Link
                href="/coming-soon"
                className="flex items-center justify-center gap-1 px-6 lg:px-10 py-4 bg-[#ffd89b] rounded-[30px] w-full lg:w-[250px] hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span className="text-base font-bold text-white tracking-[0.05em]">
                  保険診療予約
                </span>
              </Link>
              <Link
                href="/coming-soon"
                className="flex items-center justify-center gap-1 px-6 lg:px-10 py-4 bg-[#73c6be] rounded-[30px] w-full lg:w-[250px] hover:opacity-90 transition-opacity"
              >
                <Ruler className="w-5 h-5 text-white" />
                <span className="text-base font-bold text-white tracking-[0.05em]">
                  低身長治療予約
                </span>
              </Link>
              <Link
                href="tel:03-6281-9234"
                className="flex items-center justify-center gap-2 px-6 lg:px-10 py-4 bg-accentColor rounded-[30px] w-full lg:w-[250px] hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 text-white" />
                <span className="text-base font-bold text-white tracking-[0.03em]">
                  03-6281-9234
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="w-full h-px bg-[#d9d9d9] my-4" />

        {/* コピーライト */}
        <p className="text-xs lg:text-base font-medium text-[#393939] text-center leading-[1.6]">
          Copyright&copy;2026シン・東京駅こどもの成長クリニック
        </p>
      </div>
    </footer>
  );
};

export default Footer_01;
