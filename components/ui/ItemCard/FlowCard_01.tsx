// components/ui/itemCard/FlowCard_01.tsx
import Image from "next/image";
import Link from "next/link";

interface FlowCardProps {
  step: string;
  number: string;
  title: string;
  description: string;
  index: number; // 新しく index プロパティを追加
}

const FlowCard = ({
  step,
  number,
  title,
  description,
  index,
}: FlowCardProps) => {
  return (
    <div
      className={`relative border-2 border-accentColor rounded-xl p-6 flex justify-center flex-col items-center bg-white ${
        index === 4 || index === 8
          ? `
              before:content-[''] before:bg-[url('/flow/arrow-right.svg')] before:bg-no-repeat before:inline-block before:w-[20px] before:h-[40px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[34px] before:rotate-90 lg:before:hidden
            `
          : `
              after:content-[''] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px] max-lg:after:hidden
              before:content-[''] before:bg-[url('/flow/arrow-right.svg')] before:bg-no-repeat before:inline-block before:w-[20px] before:h-[40px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[34px] before:rotate-90 lg:before:hidden
            `
      }
      ${
        index === 8 ? "max-lg:before:hidden" : "" // SP時は最後の要素のみ非表示
      }`}
    >
      <p className="text-lg font-extrabold font-poppins text-accentColor tracking-wide">
        {step}
      </p>
      <p className="text-5xl font-extrabold font-poppins text-accentColor tracking-wider pt-1">
        {number}
      </p>
      <h3 className="text-lg font-semibold font-poppins text-accentColor mt-4 tracking-wide">
        {title}
      </h3>
      <p className="font-light mt-2">{description}</p>
    </div>
  );
};

export default FlowCard;
