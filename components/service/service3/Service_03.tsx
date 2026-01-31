// components/message/Service_03.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import ServiceSection_03 from "@/components/ui/module/ServiceSection_03";

// メッセージ
const Service_03 = () => {
  return (
    <>
      <SectionContent className="![padding-top:0]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full lg:max-w-[1200px] mx-auto">
          {/* <ContentHeadline
            subTitle="Feature 01"
            mainTitle="サービスの特徴1"
            subTitleClassName="text-center"
            titleClassName="text-center"
          /> */}
          <ServiceSection_03
            enTitle="Feature 01"
            jaTitle="サービスの特徴1"
            headingText="見出しテキストはいります見出しテキストはいります見出しテキストはいります見出しテキストはいります見出しテキストはいります"
            description={`テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。す。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。`}
            buttonHref="/about"
            // imageUrl="/path/to/image.jpg"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default Service_03;
