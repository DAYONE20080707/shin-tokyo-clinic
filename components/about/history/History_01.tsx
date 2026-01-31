// components/message/History_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import HistoryCard from "@/components/ui/ItemCard/HistoryCard";

// メッセージ
const History_01 = () => {
  return (
    <>
      <SectionContent className="">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" lg:max-w-[1200px] mx-auto ">
          <ContentHeadline
            subTitle="History"
            mainTitle="企業沿革"
            subTitleClassName=""
            titleClassName=""
          />

          <ul className="">
            <HistoryCard
              date="0000年00月"
              description="沿革情報はいります沿革情報はいります沿革情報はいります沿革情報はいります"
            />
            <HistoryCard
              date="0000年00月"
              description="沿革情報はいります沿革情報はいります沿革情報はいります沿革情報はいります"
            />
            <HistoryCard
              date="0000年00月"
              description="沿革情報はいります沿革情報はいります沿革情報はいります沿革情報はいります"
            />
            <HistoryCard
              date="0000年00月"
              description="沿革情報はいります沿革情報はいります沿革情報はいります沿革情報はいります"
            />
            <HistoryCard
              date="0000年00月"
              description="沿革情報はいります沿革情報はいります沿革情報はいります沿革情報はいります"
            />
          </ul>
        </section>
      </SectionContent>
    </>
  )
}

export default History_01
