"use client";
import Link from "next/link";
import Image from "next/image";

const PlanOption = () => {
  return (
    <section className="md:max-w-[1200px] mx-auto pt-24">
      <h3 className="text-center text-[20px] md:text-[28px] font-bold">
        オプション
      </h3>
      <p className="text-center mt-4">様々な料金プランをご用意しております。</p>
      <div className="grid grid-cols-1 md:grid-cols-5 mt-10 md:mt-16 gap-x-2 gap-y-10 md:gap-y-0">
        <div className="flex flex-col items-center bg-white py-4 px-6">
          <Image
            src="/price/price-option-01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className=""
          />
          <h4 className="mt-2">オプション1</h4>
          <p className="text-lg font-extrabold mt-2 text-accentColor">
            <span>￥</span>0,000
          </p>
        </div>
        <div className="flex flex-col items-center bg-white py-4 px-6">
          <Image
            src="/price/price-option-01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className=""
          />
          <h4 className="mt-2">オプション1</h4>
          <p className="text-lg font-extrabold mt-2 text-accentColor">
            <span>￥</span>0,000
          </p>
        </div>
        <div className="flex flex-col items-center bg-white py-4 px-6">
          <Image
            src="/price/price-option-01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className=""
          />
          <h4 className="mt-2">オプション1</h4>
          <p className="text-lg font-extrabold mt-2 text-accentColor">
            <span>￥</span>0,000
          </p>
        </div>
        <div className="flex flex-col items-center bg-white py-4 px-6">
          <Image
            src="/price/price-option-01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className=""
          />
          <h4 className="mt-2">オプション1</h4>
          <p className="text-lg font-extrabold mt-2 text-accentColor">
            <span>￥</span>0,000
          </p>
        </div>
        <div className="flex flex-col items-center bg-white py-4 px-6">
          <Image
            src="/price/price-option-01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className=""
          />
          <h4 className="mt-2">オプション1</h4>
          <p className="text-lg font-extrabold mt-2 text-accentColor">
            <span>￥</span>0,000
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanOption;
