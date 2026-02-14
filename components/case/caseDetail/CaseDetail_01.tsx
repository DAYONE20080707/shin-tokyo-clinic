// components/case/caseDetail/CaseDetail_01.tsx

import Link from "next/link"
import Image from "next/image"
import { casesFetch } from "@/lib/api/casesFetch"

interface CasePost {
  id: string
  title: string
  image?: { url: string; height: number; width: number }
  subTitle1?: string
  content1?: string
  subTitle2?: string
  content2?: string
  list?: string
  category?: string[]
}

interface CaseDetailProps {
  params: {
    id: string
  }
  draftKey?: string
}

// 診療メニューデータ
const treatments = [
  { title: "一般小児外来", icon: "/images/treatment-icon01.svg", bgColor: "#e6eef8", href: "/pediatric" },
  { title: "低身長外来", icon: "/images/treatment-icon02.svg", bgColor: "#edebfa", href: "/pediatric/short-stature" },
  { title: "あたまのかたち外来", icon: "/images/treatment-icon03.svg", bgColor: "#f7efe8", href: "/pediatric/head-shape" },
  { title: "乳幼児健診", icon: "/images/treatment-icon04.svg", bgColor: "#fdeef8", href: "/pediatric/infant-checkup" },
  { title: "予防接種", icon: "/images/treatment-icon05.svg", bgColor: "#fff6c9", href: "/pediatric/vaccination" },
  { title: "でべそ外来", icon: "/images/treatment-icon06.svg", bgColor: "#fff0e1", href: "/pediatric/umbilical-hernia" },
  { title: "夜尿症外来", icon: "/images/treatment-icon07.svg", bgColor: "#eaf5f3", href: "/pediatric/bedwetting" },
]

const CaseDetail_01 = async ({ params, draftKey }: CaseDetailProps) => {
  const { id } = params

  const post = await casesFetch.get(id, draftKey) as unknown as CasePost

  if (!post) {
    return (
      <div className="max-w-[1200px] mx-auto py-16 px-4">
        <div className="text-center">
          <p>ページが見つかりませんでした</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 下層KVエリア */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/bg-img.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute top-10 left-0 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-[#73c6be]/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-accentColor/30 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 pt-28 lg:pt-40 pb-6 lg:pb-10">
          <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px]">
            <nav className="flex items-center gap-2 text-xs text-[#393939]">
              <Link href="/" className="hover:underline">
                トップページ
              </Link>
              <span>&gt;</span>
              <span>{post.title}</span>
            </nav>
          </div>

          <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px] mt-10 lg:mt-20 pb-8 lg:pb-12">
            <h1>
              {Array.isArray(post.category) && post.category.length > 0 && (
                <span className="block text-primaryColor text-base lg:text-lg font-bold tracking-wide mb-2 font-en">
                  {post.category[0]}
                </span>
              )}
              <span className="block text-[#393939] text-3xl lg:text-[64px] font-medium leading-tight">
                {post.title}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* コンテンツエリア */}
      <section className="py-16 lg:py-[120px] px-5">
        <div className="lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[120px] items-start">
          <div className="flex-1 space-y-12">
            {post.subTitle1 && (
              <div>
                <h2 className="text-primaryColor text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-wide mb-6">
                  {post.subTitle1}
                </h2>
                {post.content1 && (
                  <p className="text-[#393939] text-base lg:text-lg leading-[2.5] whitespace-pre-line">
                    {post.content1}
                  </p>
                )}
              </div>
            )}
            {post.subTitle2 && (
              <div>
                <h2 className="text-primaryColor text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-wide mb-6">
                  {post.subTitle2}
                </h2>
                {post.content2 && (
                  <p className="text-[#393939] text-base lg:text-lg leading-[2.5] whitespace-pre-line">
                    {post.content2}
                  </p>
                )}
              </div>
            )}
            {post.list && (
              <ul className="list-disc list-inside space-y-2 text-[#393939] text-base lg:text-lg leading-[2.5]">
                {post.list.split("\n").filter(Boolean).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          {post.image && (
            <div className="flex-1 w-full">
              <div className="relative aspect-[500/700] rounded-[40px] overflow-hidden">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 診療案内ナビ */}
      <section className="py-16 lg:py-[80px] px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          {/* 1段目: 4個 */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-6 lg:mb-10">
            {treatments.slice(0, 4).map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="w-[140px] lg:w-[150px] rounded-[20px] p-4 flex flex-col items-center gap-3 transition-transform hover:scale-105"
                style={{ backgroundColor: treatment.bgColor }}
              >
                <div className="relative w-[80px] h-[60px] flex items-center justify-center">
                  <Image
                    src={treatment.icon}
                    alt={treatment.title}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm lg:text-base font-bold text-baseColor text-center">
                  {treatment.title}
                </p>
              </Link>
            ))}
          </div>
          {/* 2段目: 3個 */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {treatments.slice(4).map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="w-[140px] lg:w-[150px] rounded-[20px] p-4 flex flex-col items-center gap-3 transition-transform hover:scale-105"
                style={{ backgroundColor: treatment.bgColor }}
              >
                <div className="relative w-[80px] h-[60px] flex items-center justify-center">
                  <Image
                    src={treatment.icon}
                    alt={treatment.title}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm lg:text-base font-bold text-baseColor text-center">
                  {treatment.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseDetail_01
