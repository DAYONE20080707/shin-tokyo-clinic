// components/message/Message_03.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_03";

// メッセージ
const Message_03 = () => {
  return (
    <>
      <SectionContent className="![padding-bottom:0]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" lg:max-w-[1200px] mx-auto ">
          {/* <ContentHeadline
            subTitle="Who we are"
            maintitle="私たちについて"
            subTitleClassName="text-center"
            titleClassName="text-center"
          /> */}
                <AboutSection
        title="無数の選択肢の中から\nベストな選択を"
        description={`経営者は日々悩んでいます。そして、日々決断しています。

一番成果が上がる選択はどれか。一番効率のいい選択はどれか。無数の選択肢の中からベストな選択ができるよう、
常に試行錯誤し決断しています。

私たちはその決断が本当にベストなのか、検討しています。
そして、その決断が本当のベストになるためのサポートを常に用意しています。`}
        position="役職役職"
        name="氏名　氏名"
        // 以下は任意
        // buttonHref="/about"
        // imageUrl="/path/to/image.jpg"
      />
        </section>
      </SectionContent>
    </>
  );
};

export default Message_03;
