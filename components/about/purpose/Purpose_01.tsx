// components/message/Purpose_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import PurposeCard from "@/components/ui/ItemCard/PurposeCard"
import { purposeData } from "@/data/purposeData"

const Purpose_01 = () => {
  return (
    <SectionContent>
      <section className="lg:max-w-[1200px] mx-auto">
        <ContentHeadline
          subTitle="Purpose"
          mainTitle="私たちの想い"
          subTitleClassName="text-center"
          titleClassName="text-center"
        />
        <ul className="space-y-16">
          <PurposeCard {...purposeData.mission} />
          <PurposeCard {...purposeData.vision} />
          <PurposeCard {...purposeData.values} />
        </ul>
        <div className="w-full h-[300px] lg:h-[523px] relative rounded overflow-hidden">
          <Image
            src="/images/about-purpose.jpg"
            alt="message"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </SectionContent>
  )
}

export default Purpose_01
