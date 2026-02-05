//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo-white.png" // 白色ロゴ
            : type === "secondary"
            ? "/common/logo-square-primary.png" // 正方形・基本カラー
            : "/common/logo-primary.png" // 基本カラー
        }
        alt="東京駅こどもの成長クリニック"
        width={240}
        height={70}
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "東京駅こどもの成長クリニック",
    companyPostalCode: "000-0000",
    companyAddress: "東京都中央区○○町00-00○○○○○ビル00F",
    companyTel: "00-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@clinic.co.jp",
  },
]

export default CompanyInfo
