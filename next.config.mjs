/** @type {import('next').NextConfig} */

const basePath = "/test20251026"
const isExport = process.env.EXPORT === "true"

const nextConfig = {
  // basePathとassetPrefixは静的エクスポート時のみ適用
  ...(isExport && {
    basePath: basePath,
    assetPrefix: basePath,
  }),
  trailingSlash: true,
  ...(isExport && {
    output: "export",
  }),
  images: {
    ...(isExport
      ? {
          unoptimized: false,
          loader: "custom",
          loaderFile: "./lib/imageLoader.js",
        }
      : {
          domains: ["images.microcms-assets.io"], // 外部の画像ドメインを追加
        }),
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isExport ? basePath : "",
    EXPORT: isExport ? "true" : "false",
  },
}

export default nextConfig
