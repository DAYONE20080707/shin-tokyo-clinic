import { componentsConfig } from "@/lib/componentsConfig"
import React from "react"

interface PediatricDetailPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    draftKey?: string
  }>
}

const PediatricDetailPage = async ({
  params,
  searchParams,
}: PediatricDetailPageProps) => {
  const { id } = await params
  const { draftKey } = await searchParams

  const sections = componentsConfig.CaseDetail.sections
  const defaultTemplate = sections.caseDetail.options[0].id
  const Component = sections.caseDetail.components[defaultTemplate]

  return Component
    ? React.cloneElement(Component as React.ReactElement, {
        params: { id },
        draftKey,
      })
    : null
}

export default PediatricDetailPage
