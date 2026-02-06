// components/top/access/Access_01.tsx

import Image from "next/image"
import SectionContent from "@/components/ui/frame/SectionContent"
import { MapPin } from "lucide-react"

// 診療スケジュールデータ
const scheduleData = [
  {
    label: "午前",
    time: "9:00 〜13:00",
    schedule: ["●", "●", "×", "●", "●", "●", "×", "×"],
    type: "normal",
  },

  {
    label: "午後",
    time: "14:00〜18:00",
    schedule: ["●", "●", "×", "●", "●", "●", "×", "×"],
    type: "normal",
  },
]

const days = ["月", "火", "水", "木", "金", "土", "日", "祝"]

const Access_01 = () => {
  return (
    <SectionContent className="bg-[#73c6be]">
      <section className="lg:max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[40px] p-6 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* 左側: 情報 */}
          <div className="flex flex-col gap-10 lg:w-[520px]">
            {/* ロゴ */}
            <div className="flex flex-col gap-4">
              <Image
                src="/common/logo01.png"
                alt="東京駅こどもの成長クリニック"
                width={240}
                height={70}
                className="w-[200px] lg:w-[240px] h-auto object-contain"
              />
            </div>

            {/* スケジュール */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold tracking-[0.03em] font-en text-primaryColor ">
                Schedule
              </p>

              {/* 診療時間表 */}
              <div className="w-full">
                {/* ヘッダー */}
                <div className="flex items-center justify-between py-2 border-b border-[#d9d9d9] text-base font-light">
                  <div className="w-[100px] lg:w-[120px] font-medium">診療時間</div>
                  <div className="flex-1 flex justify-between font-medium">
                    {days.map((day, idx) => (
                      <div
                        key={idx}
                        className="w-4 text-center text-sm lg:text-base"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* スケジュール行 */}
                {scheduleData.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="flex items-center justify-between py-2 border-b border-[#d9d9d9]"
                  >
                    <div className="w-[100px] lg:w-[120px] font-medium ">
                      <p className="text-sm lg:text-base  leading-[1.6]">
                        {row.label}
                      </p>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {row.time}
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between">
                      {row.schedule.map((status, idx) => (
                        <div
                          key={idx}
                          className="w-4 text-center text-sm lg:text-base text-[#73C6BE]"
                        >
                          {status}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* 休診日・注意事項 */}
                <div className="py-4 border-b border-[#666]">
                  <p className="text-base font-medium text-[#393939] leading-[1.6] font-zenKaku">
                    休診日：水曜・日曜・祝日
                  </p>
                  <div className="text-xs text-[#393939] leading-[1.4] mt-1 space-y-0.5 font-zenKaku">
                    <p>
                      ※最終受付は、午前・午後それぞれの診療時間終了30分前までとなります。
                    </p>

                  </div>
                </div>

                {/* 住所 */}
                <div className="pt-6 flex items-start gap-1">
                  <MapPin className="w-4 h-4 text-primaryColor  flex-shrink-0 mt-0.5" />
                  <div className="text-base text-[#393939] leading-[1.6] font-zenKaku">
                    <p>
                      〒103-0028 東京都中央区八重洲1-6-17　大久保ビルディング9階
                    </p>
                    <p>東京駅八重洲北口から徒歩1分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側: 地図 */}
          <div className="flex-1 min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.co.jp/maps?q=東京都中央区八重洲1-6-17+大久保ビルディング&output=embed&hl=ja&z=17"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="クリニックの場所"
            />
          </div>
        </div>
      </section>
    </SectionContent>
  )
}

export default Access_01
