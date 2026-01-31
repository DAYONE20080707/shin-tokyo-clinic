// components/kv/KeyVisual_01.tsx

"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_01"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"
import MoreLinkButton from "@/components/ui/button/MoreButton"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="relative h-screen">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-full" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-full lg:max-w-[1240px] px-5">
          <TopPageHeadline
            mainTitle={
              <>
                <span className="">
                  日本語見出し文日本語見出し文はいります
                </span>
              </>
            }
            subtitleTop={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            description={
              <>
                <span className="">
                  日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります
                </span>
              </>
            }
            className="  text-white "
          />
          <div className="mt-[58px]">
            <ScrollButton color="white" />
          </div>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_01
