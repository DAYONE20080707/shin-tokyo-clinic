// components/flow/Flow_01.tsx
"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import FlowCard from "@/components/ui/ItemCard/FlowCard_01";
import SectionContent from "@/components/ui/frame/SectionContent";
import { flowData } from "@/data/flowData";

const Flow_01 = ({ className = "" }) => {
  return (
    <>
      <SectionContent className={className}>
        <section className="lg:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="Flow"
            mainTitle="ご利用の流れ"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6">
            {flowData.map((flow) => (
              <FlowCard
                key={flow.index}
                step={flow.step}
                number={flow.number}
                title={flow.title}
                description={flow.description}
                index={flow.index}
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Flow_01;
