// components/ui/frame/ContentHeadline.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  description,
  subTitle,
  className = "",
  titleClassName = "",
  subTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full lg:max-w-[1200px] mb-12 lg:mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <p
        className={classNames(
          "text-sm lg:text-lg font-extrabold tracking-[0.03em] font-en text-accentColor",
          subTitleClassName
        )}
      >
       {subTitle}
      </p>
      <h1
        className={classNames(
          "text-4xl lg:text-[40px] leading-[120%] mt-1 tracking-[0.05em] font-semibold",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>

      {description && <h2>{description}</h2>}
    </section>
  )
}

export default ContentHeadline
