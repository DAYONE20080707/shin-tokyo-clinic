// components/kv/KeyVisual_05.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_01"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"
import MoreButton from "@/components/ui/button/MoreButton"
import MoreLinkButton from "@/components/ui/button/MoreButton"

// キービジュアル
const KeyVisual_05 = () => {
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
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full lg:max-w-[1240px] px-5">
          <TopPageHeadline
            mainTitle={
              <>
                <span className=" block text-[35px] lg:text-[50px] leading-normal w-full lg:w-[600px]">
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
            // description={
            //   <>
            //     <span className="block  lg:w-[600px]">
            //       日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります
            //     </span>
            //   </>
            // }
            className="  text-white "
          />
          <div className="mt-4">
            <MoreLinkButton className="text-white " />
          </div>
          <div className="mt-[107px]">
            <ScrollButton color="white" />
          </div>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_05
