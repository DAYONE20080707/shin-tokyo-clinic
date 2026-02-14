// components/ui/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: "default" | "dot" | "light" | "primary"
}

const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
  style,
  variant = "default",
}) => {
  // バリアントに基づく背景スタイルを決定
  const getVariantStyle = () => {
    if (variant === "dot") {
      return {
        backgroundColor: "#1b1b1b",
        backgroundImage:
          "radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px), radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px)",
        backgroundPosition: "0 0, 5px 10px",
        backgroundSize: "10px 20px",
        ...style,
      }
    }
    if (variant === "light") {
      return {
        backgroundColor: "#f7fcff",
        ...style,
      }
    }
    if (variant === "primary") {
      return {
        backgroundColor: "#347694",
        ...style,
      }
    }
    return style
  }

  return (
    <div
      className={classNames(" mx-auto pt-24 lg:pt-[140px]", className)}
      style={getVariantStyle()}
    >
      {children}
    </div>
  )
}

export default PageContent
