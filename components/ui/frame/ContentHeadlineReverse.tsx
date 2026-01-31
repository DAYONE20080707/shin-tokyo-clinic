// components/ui/frame/ContentHeadlineReverse.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadlineReverse: React.FC<ContentHeadlineProps> = ({
  mainTitle,
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
        "w-full lg:max-w-[1200px] mb-16 tracking-wide text-accentColor",
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

      <h1
        className={classNames(
          "text-2xl lg:text-[40px] leading-[140%]",
          titleClassName
        )}
      >
        {typeof mainTitle === "string"
          ? mainTitle.split("\\n").map((text, i) => (
              <span key={i}>
                {text}
                {i !== mainTitle.split("\\n").length - 1 && <br />}
              </span>
            ))
          : mainTitle}
      </h1>
      <h3
        className={classNames(
          "text-lg font-en tracking-[0.03em] mb-1",
          subTitleClassName
        )}
      >
        {subTitle}
      </h3>
    </section>
  )
}

export default ContentHeadlineReverse
