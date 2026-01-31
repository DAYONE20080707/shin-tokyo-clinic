"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"

// フッター
const Footer_01 = () => {
  const { companyName, companyNameText, companyPostalCode, companyAddress } =
    CompanyInfo[0]
  return (
    <footer className="bg-white border-t py-10 lg:py-24 px-4 lg:px-0">
      <div className="lg:max-w-[1240px] mx-auto lg:px-5">
        <div className="lg:flex justify-between items-center">
          <div className="space-y-3">
            <h4 className="w-[100px]">
              {CompanyInfo[0].companyName("tertiary")}
            </h4>
            <p>{companyNameText}</p>
            <p>{companyPostalCode}{companyAddress}</p>
          </div>
          <div className="flex flex-col lg:items-end mt-5 lg:mt-0">
            <ul className="lg:flex items-center lg:space-x-10 font-light space-y-5 lg:space-y-0">
              <li>
                <Link href="/">
                  <div>トップページ</div>
                </Link>
              </li>
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.nameJa}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <ContactButton className="">お問い合わせ</ContactButton>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between items-center !border-t border-baseColor mt-4 pt-4 ">
          <ul className="flex items-center justify-start font-semibold  space-x-5 lg:space-x-0">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 lg:w-[60px] lg:h-[60px] flex items-center justify-center"
              >
                <Link href={item.href} className="">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="lg:flex items-center lg:space-x-10 font-light mt-5 lg:mt-0 space-y-5 lg:space-y-0">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="mt-4 flex justify-end items-center lg:text-base">
        &copy;0000aaaaa. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer_01
