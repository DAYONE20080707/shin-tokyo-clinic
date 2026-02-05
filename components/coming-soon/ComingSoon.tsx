import FreeButtonBlue from "@/components/ui/button/FreeButtonBlue"
import { Clock } from "lucide-react"

const ComingSoon = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-10 py-16 lg:pb-[157px] lg:pt-[137px] px-5">
          <Clock
            className=" w-20 lg:w-[120px] h-auto text-white"
            strokeWidth={1}
          />

          <h2 className=" text-2xl lg:text-[40px] font-medium tracking-wider text-white leading-[160%]">
            Coming Soon
            <br className="lg:hidden" />
          </h2>
          <p className="text-base lg:text-lg lg:text-center leading-[160%] text-white">
            現在、このページは準備中です。
            <br />
            もうしばらくお待ちください。
          </p>
          <div className=" mt-10 lg:mt-0">
            <FreeButtonBlue href="/" text="トップページへ戻る" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon
