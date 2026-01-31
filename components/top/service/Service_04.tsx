// components/service/Service_04.tsx
"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01";
import { serviceData } from "@/components/data/top/ServiceData";
import MoreLinkButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";

const Service_04 = () => {
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
            subTitleClassName=""
            titleClassName=""
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                subTitle={service.subTitle}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                className=" lg:w-[282px] space-y-4"
                imageContainerClass="  lg:w-[282px] h-[280px]"
                showButton={true}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <MoreLinkButton
              href="/"
              className="lg:mt-10 text-accentColor border-accentColor   "
            />
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Service_04;
