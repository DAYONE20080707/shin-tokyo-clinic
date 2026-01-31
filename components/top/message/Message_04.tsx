// components/message/Message_04.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_04 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" lg:max-w-[1200px] mx-auto ">
          <div className=" flex justify-start">
            <ContentHeadline subTitle="Who we are" mainTitle="私たちについて" />
            <div>
              <h3 className=" w-[500px] text-5xl mt-4 ">見出しテキスト</h3>
              <p className=" w-[660px]">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" />
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Message_04;
