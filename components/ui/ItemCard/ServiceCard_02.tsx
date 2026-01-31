// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import MoreButton from "@/components/ui/button/MoreButton"


interface ServiceCardProps {
  id: number
  title: string
  description: string
  image: string // 画像パスを受け取る
  href: string // リンク先のURLを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "", // デフォルトの画像コンテナのクラス
}) => {
  return (
    <div
      className={classNames("relative overflow-hidden", className)}
    >

      <div
        className={classNames("mt-5 lg:mt-0 space-y-1 lg:w-[560px] border-b border-borderGray pb-6" , {
          "lg:w-[560px] h-[480px] rounded-2xl absolute inset-0 flex flex-col  bg-black/50 text-white":
            className.includes("overlay"),
          "relative text-black": !className.includes("overlay"),
        })}
      >
        <div
          className={classNames("font-medium font-en", {
            "text-white": className.includes("overlay"),
            "text-accentColor": !className.includes("overlay"),
          })}
        >
          Service 0{id}
        </div>
        <div
          className={classNames("font-medium text-xl lg:text-[22px] tracking-[0.03em] leading-[160%]", {
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          {title}
        </div>
        <div
          className={classNames("leading-[160%]",{
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          {description}
        </div>
        {/* <MoreButton href={href} className="text-accentColor border-accentColor" /> */}
      </div>
    </div>
  )
}

export default ServiceCard
