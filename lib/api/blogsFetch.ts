// lib/blogsFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const blogsFetch = {
  list: (limit = 100, draftKey?: string) =>
    apiClient.fetchList<Cms>("blogs", {
      limit,
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),

  get: (id: string, draftKey?: string) =>
    apiClient.fetchById<Cms>("blogs", id, {
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),
}
