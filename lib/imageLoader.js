module.exports = function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const isExport = process.env.EXPORT === "true"

  // 外部URL（http://, https://）の場合はそのまま返す
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `${src}${!isExport && width ? `?w=${width}&q=${quality || 75}` : ""}`
  }

  // basePathが存在する場合のみ追加（先頭に/がなければ追加）
  const pathWithBase =
    basePath && !src.startsWith(basePath) ? `${basePath}${src}` : src

  // 静的エクスポート時はクエリパラメータを付けない
  if (isExport) {
    return pathWithBase
  }

  // 通常ビルド時はクエリパラメータを追加
  return `${pathWithBase}${width ? `?w=${width}&q=${quality || 75}` : ""}`
}
