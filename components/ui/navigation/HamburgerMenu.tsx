//components/ui/navigation/HamburgerMenu.tsx

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import ContactButton from "@/components/ui/button/ContactButton"

interface HamburgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <div
      className={`fixed z-10 top-0 right-0 h-screen w-full lg:w-[500px] bg-bgBlack text-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* 閉じるボタン */}
      <div className="flex justify-end p-4">
        <button
          aria-label="メニューを閉じる"
          onClick={toggleMenu}
          className="w-10 h-10"
        >
          <div className="w-[38px] h-[38px] relative">
            <div className="w-[53.74px] bg-white h-[1px] left-0 top-0 absolute origin-top-left rotate-45 border border-white"></div>
            <div className="w-[53.74px] h-[1px] left-[38px] top-0 absolute bg-white origin-top-left rotate-[135deg] border border-white"></div>
          </div>
        </button>
      </div>

      {/* メニューアイテム */}
      <ul className="flex flex-col items-center space-y-6 mb-16">
        {Menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-lg font-semibold">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center w-[260px] mx-auto">
        <ContactButton className="h-[72px]" />
      </div>
    </div>
  )
}

export default HamburgerMenu
