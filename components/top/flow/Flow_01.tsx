// components/top/flow/Flow_01.tsx
"use client"

import { ChevronDown } from "lucide-react"

interface FlowStep {
  step: string
  number: string
  title: string
  description: string | string[]
}

const flowSteps: FlowStep[] = [
  {
    step: "STEP",
    number: "01",
    title: "自宅からWeb予約を行う。（デジスマ登録必要）",
    description:
      "初診の方でもWeb予約可能です。診察希望時間までに予約を実施してください。",
  },
  {
    step: "STEP",
    number: "02",
    title: "自宅から事前にWeb問診に回答する",
    description: [
      "予約が完了するとWeb問診の入力へ進むことができます。院内滞在時間短縮のため、事前のWeb問診のご協力をお願いします。",
      "当院ではWeb問診を終えている方を優先してご案内するため、Web問診を行っていない場合は診察の順番が前後する可能性がございます。",
    ],
  },
  {
    step: "STEP",
    number: "03",
    title: "病院へ受診",
    description: [
      "予約の時間に到着できるようにお越しください。10分以上遅れる場合はお電話でご連絡ください。",
      "エレベーターで9階まで上がり、降りて右側に入口がございます。",
    ],
  },
  {
    step: "STEP",
    number: "04",
    title: "受付",
    description: [
      "受付にカードリーダーがあるので、マイナンバーカードを確認させていただきます。",
      "※４桁の暗証番号または顔認証による本人確認が必要です。",
    ],
  },
  {
    step: "STEP",
    number: "05",
    title: "診察",
    description:
      "問診表を参考に医師が診察を行います。必要時検査等を実施します。",
  },
  {
    step: "STEP",
    number: "06",
    title: "お会計",
    description: [
      "診察が終わったら、受付でお会計をし処方箋をお渡しします。",
      "デジスマでクレジットカードの登録を事前にしていただきますとクリニックでの会計は発生いたしません。",
    ],
  },
]

const Flow_01 = ({ className = "" }) => {
  return (
    <section className={`bg-white py-16 lg:py-[120px] ${className}`}>
      <div className="lg:max-w-[1200px] mx-auto px-5">
        {/* 見出し */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-lg font-bold tracking-[0.03em] font-en text-primaryColor">
            Step
          </p>
          <h2 className="text-[32px] leading-[1.5] mt-2 tracking-[0.05em] font-bold text-primaryColor">
            予約の流れ
          </h2>
        </div>

        {/* フローステップ */}
        <div className="flex flex-col gap-6">
          {flowSteps.map((step, index) => (
            <div key={index}>
              {/* ステップカード */}
              <div className="bg-[#f3fbfa] rounded-[10px] p-6 flex flex-col lg:flex-row gap-4 lg:gap-4 items-start lg:items-center">
                {/* ステップ番号 */}
                <div className="bg-[#73c6be] rounded-[5px] w-[88px] h-[88px] flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm tracking-[0.03em] font-en">
                    {step.step}
                  </span>
                  <span className="text-white font-bold text-2xl tracking-[0.03em] font-en">
                    {step.number}
                  </span>
                </div>

                {/* コンテンツ */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primaryColor  leading-[1.7] mb-2">
                    {step.title}
                  </h3>
                  {Array.isArray(step.description) ? (
                    <div className="text-base font-medium text-[#393939] leading-[1.7]">
                      {step.description.map((text, i) => (
                        <p key={i} className={i > 0 ? "mt-0" : ""}>
                          {text}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base font-medium text-[#393939] leading-[1.7]">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* 矢印（最後のステップ以外） */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ChevronDown className="w-6 h-6 text-[#73c6be]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Flow_01
