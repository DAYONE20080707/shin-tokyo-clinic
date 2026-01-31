"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

// フッター
const Footer_02 = () => {
  const { companyName } = CompanyInfo[0]

  return (
    <footer className="py-10 lg:py-24 px-4 lg:px-0">
      <div className="lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h4>{CompanyInfo[0].companyName("primary")}</h4>

          <ul className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10 font-light">
            {Menu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-borderGray mt-6 pt-6">
          <ul className="flex items-center justify-center font-semibold  space-x-5 lg:space-x-0">
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
        </div>
        <small className="mt-6 flex justify-center items-center text-sm lg:text-base ">
          &copy;0000aaaaa.ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer_02
