// components/kv/KeyVisual_06.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"

// キービジュアル
const KeyVisual_06 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[120px] w-full lg:max-w-[1240px] px-5 flex justify-end">
          <TopPageHeadline
            mainTitle={<>Lorem Ipsum Lorem Ipsum</>}
            description="日本語見出し文日本語見出し文はいります"
            className="text-white text-right"
          />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_06
