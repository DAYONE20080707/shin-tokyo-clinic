// components/top/faq/Faq_01.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import SectionContent from "@/components/ui/frame/SectionContent";
import { Plus, Minus } from "lucide-react";

// FAQデータ
const faqItems = [
  {
    question: "最寄りの駅はどちらになりますか？",
    answer: "東京駅八重洲北口から徒歩1分、日本橋駅から徒歩7分になります。",
  },
  {
    question: "クレジットカードは使えますか？",
    answer:
      "ご利用可能です。支払い方法としては、現金、クレジットカード、交通系ICカードなどの電子マネー、PayPayなどのバーコード決済がございます。",
  },
  {
    question: "マイナ保険証もしくはマイナンバーカードがなくても受診できますか？",
    answer:
      "保険診療をご希望の方はマイナ保険証もしくはマイナンバーカード、医療証をお持ちください。マイナンバーカードもしくはマイナ保険証をお持ちでない方は資格確認証をお持ちください。",
  },
  {
    question: "質問内容入ります質問内容入ります質問内容入ります",
    answer:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    question: "質問内容入ります質問内容入ります質問内容入ります",
    answer:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
];

const Faq_01 = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <SectionContent className="bg-[#f3fbfa]">
      <section className="lg:max-w-[1200px] mx-auto">
        {/* 見出し */}
        <div className="mb-16">
          <p className="text-lg font-bold tracking-[0.03em] font-en text-[#38a1db]">
            FAQ
          </p>
          <h2 className="text-[32px] leading-[1.5] tracking-[0.05em] font-bold text-[#38a1db] font-zenKaku">
            よくある質問
          </h2>
        </div>

        {/* FAQ リスト */}
        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-[#f7fcff] rounded-[10px] overflow-hidden"
              >
                {/* 質問部分 */}
                <button
                  className="w-full px-6 lg:px-10 py-6 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <Image
                      src="/images/question-icon.svg"
                      alt="Q"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <p className="text-base lg:text-lg font-semibold text-[#393939] text-left tracking-[0.03em] line-clamp-2 lg:line-clamp-1">
                      {item.question}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus
                        className="w-6 h-6 text-[#38a1db]"
                        strokeWidth={2}
                      />
                    ) : (
                      <Plus
                        className="w-6 h-6 text-[#38a1db]"
                        strokeWidth={2}
                      />
                    )}
                  </div>
                </button>

                {/* 回答部分 */}
                {isOpen && (
                  <div className="px-6 lg:px-10 pb-6 flex items-start gap-2">
                    <Image
                      src="/images/answer-icon.svg"
                      alt="A"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <p className="text-base text-[#393939] leading-[1.6]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SectionContent>
  );
};

export default Faq_01;
