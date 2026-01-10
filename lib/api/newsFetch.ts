// lib/newsFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const newsFetch = {
  list: (limit = 100, draftKey?: string) =>
    apiClient.fetchList<Cms>("news", {
      limit,
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),

  get: (id: string, draftKey?: string) =>
    apiClient.fetchById<Cms>("news", id, {
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),
}
