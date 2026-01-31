// components/ui/ItemCard/PlanCard_02.tsx
import Link from "next/link"

interface PlanCardProps {
  title?: string
  description?: string
  price?: string
  colorClass?: string
  features: string[] // 機能項目の配列
  isLargePadding?: boolean // 新しいプロパティ
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  colorClass,
  features,
  isLargePadding = false, // デフォルトはfalse
}) => {
  return (
    <div>
      {/* プランの概要部分 */}
      <div className={`${colorClass} text-white p-6 rounded-t-2xl flex flex-col items-center text-center ${isLargePadding ? 'py-[110px] lg:py-[123px]' : ''}`}>
        <h3 className="text-lg lg:text-2xl font-bold leading-relaxed lg:leading-[38.40px] mb-1">{title}</h3>

        {/* descriptionがある場合のみ表示 */}
        {description && <p className="font-light">{description}</p>}

        {/* priceがある場合のみ表示 */}
        {price && (
          <p className="my-4 text-[30px] lg:text-[40px] font-bold">
            <span className="text-lg font-extrabold">￥</span>{price}
          </p>
        )}

        {/* priceがある場合のみ"申し込む"ボタンを表示 */}
        {price && (
          <Link href="/" className="w-full h-12 mdh-[58px] text-accentColor py-4 bg-white rounded-[30px] justify-center items-start font-semibold">
            申し込む
          </Link>
        )}
      </div>

      {/* 各機能項目を表示 */}
      {features.map((feature, index) => (
        <p key={index} className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
          {feature}
        </p>
      ))}
    </div>
  )
}

export default PlanCard
