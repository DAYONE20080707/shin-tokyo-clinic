// components/message/History_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import HistoryCard from "@/components/ui/ItemCard/HistoryCard";
import { historyData } from "@/data/historyData";

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
            {historyData.map((history, index) => (
              <HistoryCard
                key={index}
                date={history.date}
                description={history.description}
              />
            ))}
          </ul>
        </section>
      </SectionContent>
    </>
  )
}

export default History_01
