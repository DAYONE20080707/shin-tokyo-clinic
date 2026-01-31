// components/ui/main/module/CtaJoin.tsx

"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import FreeButtonBlue from "../button/FreeButtonBlue";

const CtaJoin = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div className="py-16 bg-mainBlue">
      <div className="lg:lg:max-w-[1200px] mx-auto text-white px-6 lg:px-0">
        <ContentHeadline
          ImageSrc="/common/join_cta.svg"
          ImageWidth={35}
          ImageHeight={35}
          mainTitle="入会のご案内"
        />
        <p className="text-center leading-8 -mt-8 text-lg">
          通信販売広告に協会の会員であることをあらわすJADMAマークを使用することができ、
          <br className="hidden lg:block" />
          企業に対する信頼感を消費者に対してアピールできます。
        </p>
        <ul className="mt-6 lg:flex items-center justify-center lg:gap-x-4 ">
          <li>
            <FreeButtonBlue
              text="入会資格について詳しくはこちら"
              href="/join"
            />
          </li>
          <li className="mt-1">
            <FreeButtonBlue text="JADMAについて詳しく知る" href="/abouts" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CtaJoin;
