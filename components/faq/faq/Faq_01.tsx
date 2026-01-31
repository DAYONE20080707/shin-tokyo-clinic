// components/faq/faq_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import FaqList from "@/components/ui/module/FaqList_01";
import MoreButton from "@/components/ui/button/MoreButton";

const Faq_01 = () => {
  return (
    <PageContent className="bg-white">
      <section className="lg:max-w-[1200px] mx-auto">
        {/* <ContentHeadline
          subTitle="FAQ"
          mainTitle="よくある質問"
          subTitleClassName="text-center"
          titleClassName="text-center"
        /> */}
        <FaqList />
        {/* <div className="mt-16 flex justify-center">
          <MoreButton className="text-accentColor border-accentColor" />
        </div> */}
      </section>
    </PageContent>
  );
};

export default Faq_01;
