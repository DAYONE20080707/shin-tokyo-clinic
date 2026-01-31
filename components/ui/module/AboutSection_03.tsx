import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface AboutSection_03Props {
  title: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSection_03 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_03Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <div className="w-full  lg:flex justify-start lg:space-x-20 pb-24">
      <div className="w-full">
        <h3 className="text-3xl lg:text-[40px] font-light leading-[160%] tracking-[0.03em] mt-10 lg:mt-0">
          {convertNewLines(title)}
        </h3>
        <p className="mt-10 !leading-[250%] tracking-[0.03em] lg:text-lg whitespace-pre-line">
          {description}
        </p>
        {(position || name) && (
            <p className="mt-10 text-lg !leading-[250%] tracking-[0.03em]">
              {position}
              <br />
              {name}
            </p>
          )}
        {buttonHref && (
          <MoreButton
            href={buttonHref}
            className="mt-10"
            variant="accent"
          />
        )}
      </div>
    </div>
  );
};

export default AboutSection_03;
