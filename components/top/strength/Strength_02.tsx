// components/strength/Strength_02.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import StrengthCard from "@/components/ui/ItemCard/StrengthCard_02";
import { strengthData } from "@/data/strengthData";
import MoreLinkButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";

// 強み
const Strength_02 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className="lg:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Strength"
            mainTitle="私たちの強み"
            className="text-center"
          />

          {/* gridレイアウトを使用して3列にカードを配置 */}
          <div className="grid grid-cols-1 gap-10">
            {/* strengthDataをループしてStrengthCardを生成 */}
            {strengthData.map((strength) => (
              <StrengthCard
                key={strength.number}
                number={strength.number}
                title={strength.title}
                description={strength.description}
                image={strength.image}
              />
            ))}
          </div>
        </section>
        <MoreLinkButton
          href="/"
          className="mt-16 text-accentColor border-accentColor mx-auto"
        />
      </SectionContent>
    </>
  );
};

export default Strength_02;
