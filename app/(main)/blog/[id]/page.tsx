import { componentsConfig } from "@/lib/componentsConfig"
import React from "react"

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    draftKey?: string
  }>
}

const BlogDetailPage = async ({
  params,
  searchParams,
}: BlogDetailPageProps) => {
  const { id } = await params
  const { draftKey } = await searchParams

  const sections = componentsConfig.BlogDetail.sections
  const defaultTemplate = sections.blogDetail.options[0].id
  const Component = sections.blogDetail.components[defaultTemplate]

  return Component
    ? React.cloneElement(Component as React.ReactElement, {
        params: { id },
        draftKey,
      })
    : null
}

export default BlogDetailPage
