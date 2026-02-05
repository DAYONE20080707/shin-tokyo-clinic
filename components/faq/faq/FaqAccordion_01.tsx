"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordion_01Props {
  items?: FaqItem[]
}

// FAQアコーディオン（クリニック向け）
const FaqAccordion_01 = ({ items }: FaqAccordion_01Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // デフォルトのFAQデータ
  const defaultItems: FaqItem[] = [
    {
      question: "熱が出たら、何度から受診したほうがよいですか？",
      answer:
        "発熱の高さだけでなく、元気があるか、水分が取れているかが大切です。生後3か月未満のお子さんの発熱や、ぐったりしている場合は早めにご相談ください。",
    },
    {
      question: "熱が出たら、何度から受診したほうがよいですか？",
      answer:
        "発熱の高さだけでなく、元気があるか、水分が取れているかが大切です。生後3か月未満のお子さんの発熱や、ぐったりしている場合は早めにご相談ください。",
    },
    {
      question: "解熱剤は使っても大丈夫ですか？",
      answer:
        "つらそうな時に使用して大丈夫です。高熱に熱を下げる必要はなく、元気な場合は使わなくても大丈夫です。",
    },
    {
      question: "咳や鼻水だけでも受診したほうがいいですか？",
      answer:
        "軽い症状で元気があれば様子を見ても構いません。ただし、咳が酷い・息が苦しそう・高熱れない場合は受診をおすすめします。",
    },
    {
      question: "予防接種の後に熱が出ました。大丈夫ですか？",
      answer:
        "多くの場合、1〜2日で治る一時的な反応です。高熱が続く、ぐったりしている場合は診療をおすすめします。",
    },
    {
      question: "下痢や嘔吐のとき、食事はどうすればいいですか？",
      answer:
        "無理に食べさせる必要はありません。少量ずつこまめに水分をとることが大切です。",
    },
    {
      question: "薬を嫌がって飲んでくれません。どうしたらいいですか？",
      answer:
        "少量の飲み物や食べ物に混ぜる方法があります。混ぜてよいもの・混ぜると苦くなるものがありますので、薬局にご相談ください。",
    },
    {
      question: "薬を飲ませた後に吐いてしまいました。どうしたらいいですか？",
      answer:
        "薬を飲ませてからおよそ30分以内であれば、もう一度飲ませてみてください。",
    },
    {
      question: "座薬を入れて便が出たときはどうしたらいいですか？",
      answer:
        "座薬を入れてすぐに便と一緒に出てしまったら、もう一度座薬を入れても構いません。しばらく経ってから出た場合は追加しないでください。",
    },
    {
      question: "保育園・幼稚園はいつから登園できますか？",
      answer:
        "病気の種類や症状によって異なります。解熱後や登園許可証が必要な場合もありますので、医師にご相談ください。",
    },
    {
      question: "診察や休日に症状が悪化したらどうすればいいですか？",
      answer:
        "呼吸が苦しい、意識がおかしい、水分や食事が取れない場合は救急受診をしてください。判断に迷うときは、各自治体の小児救急電話相談(#8000)の利用もおすすめです。",
    },
  ]

  const faqItems = items || defaultItems

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f3fbfa] py-16 lg:py-[120px]">
      <div className="lg:max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7fcff] rounded-[10px] overflow-hidden"
            >
              {/* 質問部分 */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 lg:px-10 py-6 flex items-start justify-between gap-4 text-left"
              >
                <div className="flex items-start gap-3 flex-1">
                  <Image
                    src="/images/question-icon.svg"
                    alt="Q"
                    width={24}
                    height={24}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="text-base lg:text-lg font-semibold text-[#393939] leading-relaxed">
                    {item.question}
                  </span>
                </div>
                <div className="flex-shrink-0 text-[#38a1db]">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-6 h-6" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {/* 回答部分 */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-10 pb-6 flex items-start gap-3">
                  <Image
                    src="/images/answer-icon.svg"
                    alt="A"
                    width={24}
                    height={24}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <p className="text-[#393939] text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqAccordion_01
