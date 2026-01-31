// components/faq/faq_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import FaqList from "@/components/ui/module/FaqList_01";
import MoreButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";

const Faq_01 = () => {
  return (
    <SectionContent className="bg-white">
      <section className="lg:max-w-[1200px] mx-auto">
        <ContentHeadline
          subTitle="FAQ"
          mainTitle="よくある質問"
          subTitleClassName="text-center"
          titleClassName="text-center"
        />
        <FaqList hideTab />
        <div className="mt-16 flex justify-center">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </SectionContent>
  );
};

export default Faq_01;
