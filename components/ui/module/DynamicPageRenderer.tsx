"use client"

import { useEffect, useState } from "react"
import { useStore } from "@/store/useStore"
import { componentsConfig } from "@/lib/componentsConfig"

interface DynamicPageRendererProps {
  pageName: keyof typeof componentsConfig
}

const DynamicPageRenderer = ({ pageName }: DynamicPageRendererProps) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const selectedSections = useStore((state) => state.selectedSections)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  const pageConfig = componentsConfig[pageName]

  if (!pageConfig) {
    return null
  }

  return (
    <>
      {Object.entries(pageConfig.sections).map(([sectionKey, sectionData]) => {
        const selectedComponent = selectedSections[sectionKey]

        // 選択されたコンポーネントがある場合はそれを表示、ない場合はデフォルト（最初のオプション）を表示
        const componentToRender = selectedComponent
          ? sectionData.components[selectedComponent]
          : sectionData.components[Object.keys(sectionData.components)[0]]

        if (!componentToRender) {
          return null
        }

        return <section key={sectionKey}>{componentToRender}</section>
      })}
    </>
  )
}

export default DynamicPageRenderer
