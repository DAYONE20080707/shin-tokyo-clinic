// components/kv/KeyVisual_02.tsx

"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02"
import ScrollButton from "@/components/ui/button/ScrollButton"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_02 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <div className="max-w-[1240px] mx-auto pt-40 px-5">
          <div className=" lg:flex justify-between items-end">
            <TopPageHeadline
              mainTitle={
                <>
                  <span>Lorem Ipsum</span>
                  <br />
                  <span>Lorem Ipsum</span>
                </>
              }
              description="日本語のテキストが入ります。"
            />
            <div className="mt-10">
              <ScrollButton />
            </div>
          </div>

          {/* キービジュアルの画像 */}
          <section className="mx-auto mt-16">
            {/* KeyVisualContentに高さを指定 */}
            <KeyVisualContent className="h-[300px] lg:h-[600px]" />
          </section>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_02
