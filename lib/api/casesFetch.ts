// lib/casesFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const casesFetch = {
  list: (limit = 100, draftKey?: string) =>
    apiClient.fetchList<Cms>("cases", {
      limit,
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),

  get: (id: string, draftKey?: string) =>
    apiClient.fetchById<Cms>("cases", id, {
      richEditorFormat: "html",
      ...(draftKey ? { draftKey } : {}),
    }),
}
