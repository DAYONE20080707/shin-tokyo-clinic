// components/message/Purpose_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import PurposeCard from "@/components/ui/ItemCard/PurposeCard"

const Purpose_01 = () => {
  const purposeData = {
    mission: {
      title: "Mission",
      headline: "見出しテキスト\nはいります見出し",
      description:
        "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
    },
    vision: {
      title: "Vision",
      headline: "見出しテキスト\nはいります見出し",
      description:
        "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
    },
    values: {
      title: "Value",
      values: [
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
      ],
    },
  }

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto">
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
        <div className="w-full h-[300px] md:h-[523px] relative rounded overflow-hidden">
          <Image
            src="/about/about-purpose.jpg"
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
