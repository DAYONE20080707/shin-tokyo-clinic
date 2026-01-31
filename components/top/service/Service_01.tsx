// components/service/Service_01.tsx
"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01";
import { serviceData } from "@/data/serviceData";
import SectionContent from "@/components/ui/frame/SectionContent";

const Service_01 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5];

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  );

  return (
    <>
      <SectionContent>
        <section className="lg:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Service"
            mainTitle="事業内容"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                className=" space-y-4"
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Service_01;
