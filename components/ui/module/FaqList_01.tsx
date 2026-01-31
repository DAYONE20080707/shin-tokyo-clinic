"use client"

import { useState } from "react"
import { CircleHelp, MessageCircle, Plus, Minus } from "lucide-react"
import { faqData } from "@/data/faqData"

const FaqList_01 = ({ hideTab = false }: { hideTab?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("category1")

  return (
    <>
      {/* タブナビゲーション */}
      {!hideTab && (
        <div className="flex justify-center gap-10 mb-8 border-t border-b border-[#EFEFEF]">
          {Object.entries(faqData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key as keyof typeof faqData)
                setOpenIndex(null)
              }}
              className={`px-1 py-4 text-sm font-bold ${
                activeCategory === key
                  ? "bg-white text-accentColor border-b-4 border-accentColor"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQリスト */}
      <div className="mt-16">
        {faqData[activeCategory].items.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div
              className="flex justify-between py-6 px-10 bg-bgLight cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex font-semibold text-lg">
                <CircleHelp className="w-6 h-6 mr-2 text-accentColor flex-shrink-0" />
                {item.question}
              </div>
              {openIndex === index ? (
                <Minus className="w-7 h-7 text-accentColor flex-shrink-0" strokeWidth={3} />
              ) : (
                <Plus className="w-7 h-7 text-accentColor flex-shrink-0" strokeWidth={3} />
              )}
            </div>
            {openIndex === index && (
              <div className="py-6 px-10 bg-white border flex">
                <MessageCircle className="w-6 h-6 mr-2 text-[#d93d69] flex-shrink-0" />
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default FaqList_01
