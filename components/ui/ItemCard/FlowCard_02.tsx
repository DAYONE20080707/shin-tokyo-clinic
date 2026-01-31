// components/ui/itemCard/FlowCard_02.tsx
import Image from "next/image"
import Link from "next/link"

interface FlowCardProps {
  number: string
  title: string
  description: string
}

const FlowCard = ({ number, title, description }: FlowCardProps) => {
  return (
    <div className="relative rounded-xl p-6 border-2 border-[#4270ed] after:content[] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[43px] after:rotate-90 flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-10 last:after:content-none bg-white">
      <div className="min-w-[120px] h-[120px] flex flex-col items-center justify-center font-poppins bg-accentColor rounded-full text-white">
        <p className="text-lg font-extrabold -mt-1">Step</p>
        <p className=" text-5xl font-bold ">{number}</p>
      </div>
      <div className="max-w-[960px]">
        <h3 className="text-2xl font-bold text-accentColor">{title}</h3>
        <p className="font-light mt-2">{description}</p>
      </div>
    </div>
  )
}

export default FlowCard
