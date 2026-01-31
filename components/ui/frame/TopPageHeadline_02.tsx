// components/ui/frame/TopPageHeadline_02.tsx
import classNames from "classnames"

interface TopPageHeadline_02Props {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: React.ReactNode
  description?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  descriptionClassName?: string // p用のclassName
}

const TopPageHeadline_02: React.FC<TopPageHeadline_02Props> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section
      className={classNames("lg:max-w-[600px] w-full", className)}
    >
      <h1
        className={classNames(
          "font-en text-[50px] font-extrabold lg:text-[80px] !leading-[110%] tracking-[0.05em]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <p
        className={classNames(
          "mt-4 text-lg lg:text-xl !leading-[160%] tracking-[0.05em] font-normal",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </section>
  )
}

export default TopPageHeadline_02
