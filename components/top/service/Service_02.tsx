// components/service/Service_02.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_02"
import { serviceData } from "@/components/data/top/ServiceData"
import Image from "next/image"
import MoreButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

const Service_02 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <SectionContent id="service">
        <section className="lg:max-w-[1200px] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/service/top.png"
                alt="Service Image"
                width={580}
                height={853}
                className="w-full h-full max-w-[580px] max-h-[853px] rounded-[10px]"
              />
            </div>
            <div className="flex-1 max-w-[540px]">
              <ContentHeadline
                subTitle="Service"
                mainTitle="事業内容"
                subTitleClassName=""
                titleClassName=""
              />
              <h3 className=" text-2xl lg:text-[40px] tracking-[0.05em] leading-[160%] pb-6 border-b border-borderGray">
                人と会社と社会をつなぐ。
                <br />
                関わる全てに成長を。
              </h3>
              <div className="mt-6 space-y-6">
                {servicesToDisplay.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image} // 画像パスを渡す
                    href={service.href} // リンク先を渡す
                    className=" lg:flex justify-between"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <MoreButton href="/service" variant="accent" />
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Service_02
