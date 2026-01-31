//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo-header.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo-square.png" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "企業名企業名企業名企業名企業名",
    companyPostalCode: "000-000",
    companyAddress: "○○県○○市○○町00-00○○○○○ビル00F",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
