// components/kv/KeyVisual_04.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"

// キービジュアル
const KeyVisual_04 = () => {
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
          <KeyVisualContent className="h-screen lg:h-[810px]" />
        </section>
        <TopPageHeadline
          mainTitle={<>Lorem Ipsum
Lorem Ipsum</>}
          description="日本語見出し文日本語見出し文はいります"
          className="w-full text-white text-center absolute left-1/2  transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-5"
        />
        <div className="absolute left-1/2  transform -translate-x-1/2 bottom-4 lg:bottom-20">
          <ScrollButton onClick={scrollToNextSection} color="white" />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_04
