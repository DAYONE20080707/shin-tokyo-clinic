// components/ui/itemCard/PlanCard_01.tsx
import Image from "next/image"
import Link from "next/link"

interface PlanCardProps {
  planName: string
  description: string
  price: string
  bgColor: string
  features: string[]
  link: string
  textColor?: string
}

const PlanCard = ({
  planName,
  description,
  price,
  bgColor,
  features,
  link,
  textColor = "text-white",
}: PlanCardProps) => {
  return (
    <div>
      <div className={`${bgColor} ${textColor} p-6 rounded-t-2xl flex flex-col items-center text-center`}>
        <h3 className="text-lg lg:text-2xl font-bold leading-relaxed lg:leading-[38.40px] mb-1">{planName}</h3>
        <p className="font-light">{description}</p>
        <p className="my-4 text-[30px] lg:text-[40px] font-bold ">
          <span className="text-lg font-extrabold">￥</span>{price}
        </p>
        <Link href={link} className="w-full h-12 lg:h-[58px] text-accentColor py-4 bg-white rounded-[30px] justify-center items-start font-semibold">申し込む</Link>
      </div>
      <ul className="mt-[2px] bg-white border border-[#EFEFEF] p-6 font-light text-[#393939] space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex item-center">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 2.86421L10.0927 16L0 6.46719L3.19315 3.60298L10.0927 10.1198L20.8069 0L24 2.86421Z"
                fill="#4270ED"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlanCard
