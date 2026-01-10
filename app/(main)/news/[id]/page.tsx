import { componentsConfig } from "@/lib/componentsConfig"
import React from "react"

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    draftKey?: string
  }>
}

const NewsDetailPage = async ({
  params,
  searchParams,
}: NewsDetailPageProps) => {
  const { id } = await params
  const { draftKey } = await searchParams

  const sections = componentsConfig.NewsDetail.sections
  const defaultTemplate = sections.newsDetail.options[1].id
  const Component = sections.newsDetail.components[defaultTemplate]

  return Component
    ? React.cloneElement(Component as React.ReactElement, {
        params: { id },
        draftKey,
      })
    : null
}

export default NewsDetailPage
