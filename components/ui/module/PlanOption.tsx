"use client";
import Image from "next/image";
import { planOptionData } from "@/data/planOptionData";

const PlanOption = () => {
  return (
    <section className="lg:max-w-[1200px] mx-auto pt-24">
      <h3 className="text-center text-[20px] lg:text-[28px] font-bold">
        オプション
      </h3>
      <p className="text-center mt-4">様々な料金プランをご用意しております。</p>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 lg:mt-16 gap-x-2 gap-y-10 lg:gap-y-0">
        {planOptionData.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-center bg-white py-4 px-6"
          >
            <Image
              src={option.image}
              alt="オプションイメージ"
              width={120}
              height={120}
              className=""
            />
            <h4 className="mt-2">{option.title}</h4>
            <p className="text-lg font-extrabold mt-2 text-accentColor">
              <span>￥</span>{option.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanOption;
