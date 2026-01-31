// components/kv/KeyVisual_03.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_01"
import ScrollButton from "@/components/ui/button/ScrollButton"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_03 = () => {

  return (
    <>
      <FirstViewContent className="relative h-screen ">
        {/* widthがフルサイズでない場合は指定する */}
        {/* キービジュアルの画像 */}
        <section className="w-[65%] h-full absolute right-0 ">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen lg:h-full" />
        </section>
        <div className="lg:max-w-[1240px] mx-auto flex flex-col justify-center gap-10 h-full relative px-5">
          <TopPageHeadline
            mainTitle={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            subtitleBottom="日本語のテキストが入ります。"
          />
          {/* スクロールボタン */}
          <ScrollButton />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_03
