"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

// 一般小児外来
const GeneralPage = () => {
  // 主な症状リスト
  const symptoms = [
    "発熱",
    "咳・鼻水・のどの痛み",
    "下痢・嘔吐・腹痛",
    "発疹・湿疹・皮膚のトラブル",
    "ゼーゼーする・息が苦しそう",
    "耳の痛み・耳だれ",
    "目の充血・目やに",
    "元気がない・食欲がない",
  ]

  // 症状詳細
  const symptomDetails = [
    {
      title: "発熱",
      description:
        "かぜなどのウイルス感染症をはじめ、さまざまな原因で起こります。",
      diseases:
        "かぜ、インフルエンザ、RSウイルス感染症、突発性発疹、尿路感染症 など\n※年齢や全身状態に応じて診察します。",
    },
    {
      title: "咳・鼻水・のどの痛み",
      description: "呼吸器の感染症やアレルギーが原因となることがあります。",
      diseases: "かぜ、気管支炎、咽頭炎、扁桃炎、喘息、アレルギー性鼻炎 など",
    },
    {
      title: "下痢・嘔吐・腹痛",
      description: "小児に多い胃腸のトラブルです。",
      diseases:
        "ウイルス性胃腸炎、細菌性腸炎、便秘症、食事による影響 など\n※脱水に注意が必要です。",
    },
    {
      title: "発疹・湿疹・皮膚のトラブル",
      description: "年齢や経過により原因が異なります。",
      diseases: "乳児湿疹、アトピー性皮膚炎、とびひ、手足口病、水ぼうそう など",
    },
    {
      title: "ゼーゼーする・息が苦しそう",
      description: "気道が狭くなっている可能性があります。",
      diseases:
        "気管支喘息、細気管支炎、気管支炎 など\n※呼吸が苦しそうな場合は早めに受診してください。",
    },
    {
      title: "耳の痛み・耳だれ",
      description: "かぜに続いて起こることがあります。",
      diseases: "急性中耳炎、滲出性中耳炎、外耳炎 など",
    },
    {
      title: "目の充血・目やに",
      description: "感染やアレルギーが原因となることがあります。",
      diseases: "結膜炎（ウイルス性・細菌性・アレルギー性） など",
    },
    {
      title: "元気がない・食欲がない",
      description:
        "はっきりした症状がなくても、体調不良のサインの場合があります。",
      diseases: "感染症の初期、脱水、貧血 など",
    },
  ]

  // 検査リスト
  const inspections = [
    {
      title: "検査名が入ります",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      title: "検査名が入ります",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      title: "検査名が入ります",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      title: "検査名が入ります",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
  ]

  // 早めに受診すべき症状
  const urgentSymptoms = [
    "発熱が続いている、または生後3か月未満で発熱がある",
    "ぐったりして元気がない、反応がいつもと違う",
    "水分がほとんど取れず、尿の量が少ない",
    "咳が強く、呼吸が苦しそう・ゼーゼーしている",
    "嘔吐や下痢が続き、回数が多い",
    "発疹が急に広がる、発疹とともに発熱がある",
    "耳の痛みが強い、耳だれが出ている",
    "目の充血や目やにが強く、痛みを訴える",
    "痛み（腹痛・頭痛など）が強く、長引いている",
    "保護者の方が「いつもと違う」「何かおかしい」と感じたとき",
  ]

  return (
    <div className="relative">
      {/* 下層KVエリア */}
      <div className="relative overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/bg-img.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* 装飾図形 */}
        <div className="absolute top-10 left-0 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-[#73c6be]/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-accentColor/30 rounded-full translate-x-1/3 translate-y-1/3" />

        {/* コンテンツ */}
        <div className="relative z-10 pt-24 lg:pt-32 pb-6 lg:pb-10">
          {/* パンくずリスト */}
          <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px]">
            <nav className="flex items-center gap-2 text-xs text-[#393939]">
              <Link href="/" className="hover:underline">
                トップページ
              </Link>
              <span>&gt;</span>
              <span>一般小児外来</span>
            </nav>
          </div>

          {/* タイトル */}
          <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px] mt-10 lg:mt-20 pb-16 lg:pb-24">
            <h1>
              <span className="block text-primaryColor  text-base lg:text-lg font-bold tracking-wide mb-2 font-en">
                Pediatric
              </span>
              <span className="block text-[#393939] text-3xl lg:text-[64px] font-medium leading-tight">
                一般小児外来
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* 一般小児外来について */}
      <section className="py-16 lg:py-[120px] px-5">
        <div className="lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[120px] items-start">
          {/* テキスト */}
          <div className="flex-1">
            <h2 className="text-primaryColor  text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-wide mb-10">
              一般小児外来について
            </h2>
            <div className="text-[#393939] text-base lg:text-lg leading-[2.5] space-y-6">
              <p>
                一般小児外来では、発熱、咳、鼻水、のどの痛み、腹痛、下痢・嘔吐、発疹など、日常的によくみられるお子さまの体調不良を幅広く診療しています。
                <br />
                「いつもと様子が違う」「受診したほうがいいか迷う」といった場合も、お気軽にご相談ください。
              </p>
              <p>
                お子さま一人ひとりの年齢や成長に合わせて、症状だけでなく全身の状態やご家庭での様子も大切にしながら診察を行います。
                <br />
                必要に応じて検査や治療を行い、わかりやすい説明を心がけています。
              </p>
              <p>
                また、症状が軽い場合にはご家庭でのケア方法や受診の目安についても丁寧にお伝えします。
                <br />
                保護者の方が安心して子育てができるよう、身近な「かかりつけ医」としてお手伝いします。
              </p>
            </div>
          </div>
          {/* 画像 */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[500/700] rounded-[40px] overflow-hidden">
              <Image
                src="/common/lower-kv-02.jpg"
                alt="小児外来イメージ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 当院で行える検査 */}
      <section className="bg-[#f3fbfa] py-16 lg:py-[120px] px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          {/* 見出し */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-[#347694] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🔬</span>
            </div>
            <h2 className="text-primaryColor  text-2xl lg:text-[32px] font-bold tracking-wide">
              当院で行える検査
            </h2>
          </div>
          {/* グラデーションライン */}
          <div className="h-[3px] bg-gradient-to-r from-[#73c6be] to-[#347694] mb-10" />

          {/* 検査カード */}
          <div className="space-y-6">
            {inspections.map((item, index) => (
              <div key={index} className="bg-white rounded-[10px] p-6">
                <h3 className="text-primaryColor  text-lg lg:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#393939] text-sm lg:text-base leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 主な症状や病気 */}
      <section className="bg-white py-16 lg:py-[120px] px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          {/* 見出し */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-[#347694] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">😷</span>
            </div>
            <h2 className="text-primaryColor  text-2xl lg:text-[32px] font-bold tracking-wide">
              主な症状や病気
            </h2>
          </div>
          {/* グラデーションライン */}
          <div className="h-[3px] bg-gradient-to-r from-[#73c6be] to-[#347694] mb-10" />

          {/* 症状タグ */}
          <div className="bg-[#f3fbfa] rounded-[10px] p-6 lg:p-10 mb-16">
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#73c6be]" />
                  <span className="text-[#393939] text-base lg:text-xl font-bold">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 症状詳細 */}
          <div className="space-y-16">
            {symptomDetails.map((item, index) => (
              <div key={index} className="space-y-6">
                {/* タイトルバー */}
                <div className="bg-[#73c6be] rounded-[5px] px-4 py-2">
                  <h3 className="text-white text-lg lg:text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
                {/* 説明文 */}
                <p className="text-[#393939] text-base lg:text-lg leading-[1.7]">
                  {item.description}
                </p>
                {/* 疾患テーブル */}
                <div className="border border-[#347694] rounded-[10px] overflow-hidden flex flex-col lg:flex-row">
                  <div className="bg-[#f3fbfa] border-b lg:border-b-0 lg:border-r border-[#347694] p-4 lg:w-[180px] flex-shrink-0">
                    <p className="text-[#393939] text-sm lg:text-base leading-[1.7]">
                      考えられる主な疾患
                    </p>
                  </div>
                  <div className="bg-white p-4 flex-1">
                    <p className="text-[#393939] text-sm lg:text-base leading-[1.7] whitespace-pre-line">
                      {item.diseases}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* このような場合は早めに受診を */}
      <section className="bg-[#f3fbfa] py-16 lg:py-[120px] px-5">
        <div className="lg:max-w-[1200px] mx-auto">
          {/* 見出し */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-[#347694] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🩺</span>
            </div>
            <h2 className="text-primaryColor  text-2xl lg:text-[32px] font-bold">
              「このような場合は早めに受診を」
            </h2>
          </div>
          {/* グラデーションライン */}
          <div className="h-[3px] bg-gradient-to-r from-[#73c6be] to-[#347694] mb-10" />

          {/* 警告ボックス */}
          <div className="bg-white rounded-[20px] p-6 lg:p-10">
            <p className="text-[#d96c6c] text-base lg:text-xl font-bold mb-4">
              次のような様子がみられる場合は、早めの受診をおすすめします。
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#393939] text-sm lg:text-base leading-[2.5]">
              {urgentSymptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
            <p className="text-[#393939] text-sm lg:text-base leading-[1.7] mt-4">
              症状が軽く見えても、気になることがあれば遠慮なくご相談ください。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GeneralPage
