// lib/apiClient.ts
import { microcms } from "@/lib/microcms"

export type ListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

async function fetchList<T>(
  endpoint: string,
  queries: Record<string, unknown> = {}
): Promise<T[]> {
  const res: ListResponse<T> = await microcms.get({
    endpoint,
    queries,
  })

  return Array.isArray(res?.contents) ? res.contents : []
}

async function fetchById<T>(
  endpoint: string,
  contentId: string,
  queries: Record<string, unknown> = {}
): Promise<T> {
  const res = await microcms.get({
    endpoint,
    contentId,
    queries,
  })

  return res as T
}

export const apiClient = {
  fetchList,
  fetchById,
}
