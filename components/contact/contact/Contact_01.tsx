"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/ui/button/SubmitButton"

interface FormField {
  label: string
  name: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  required: boolean
  options?: { value: string; label: string }[]
}

const formFields: FormField[] = [
  // {
  //   label: "お問い合わせ内容",
  //   name: "inquiryType",
  //   type: "select",
  //   options: [
  //     { value: "", label: "以下から選択してください" },
  //     { value: "inquiry1", label: "お問い合わせ内容1" },
  //     { value: "inquiry2", label: "お問い合わせ内容2" },
  //     { value: "inquiry3", label: "お問い合わせ内容3" },
  //   ],
  //   required: true,
  // },
  {
    label: "会社名",
    name: "company",
    type: "text",
    placeholder: "株式会社〇〇〇〇〇〇",
    required: false,
  },
  {
    label: "氏名",
    name: "lastName",
    type: "text",
    placeholder: "田中",
    required: true,
  },
  {
    label: "",
    name: "firstName",
    type: "text",
    placeholder: "太郎",
    required: false,
  },
  {
    label: "所属部署名",
    name: "department",
    type: "text",
    placeholder: "営業部",
    required: false,
  },
  // {
  //   label: "役職",
  //   name: "position",
  //   type: "text",
  //   placeholder: "役職名をご入力ください",
  //   required: false,
  // },
  {
    label: "メールアドレス",
    name: "email",
    type: "email",
    placeholder: "example@abc.co.jp",
    required: true,
  },
  {
    label: "お電話番号",
    name: "phone",
    type: "tel",
    placeholder: "00-0000-0000",
    required: true,
  },
  // {
  //   label: "ご検討中のサービス",
  //   name: "serviceType",
  //   type: "select",
  //   options: [
  //     { value: "", label: "以下から選択してください" },
  //     { value: "service1", label: "ご検討中のサービス1" },
  //     { value: "service2", label: "ご検討中のサービス2" },
  //     { value: "service3", label: "ご検討中のサービス3" },
  //   ],
  //   required: true,
  // },
  {
    label: "お問い合わせ内容",
    name: "message",
    type: "textarea",
    placeholder: "お問い合わせ内容を入力してください",
    required: true,
  },
]

const initialFormData: Record<string, string> = {}
formFields.forEach((field) => {
  initialFormData[field.name] = ""
})

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push("/contact/thanks")
      } else {
        const data = await res.json()
        setResponseMessage(data.error || "送信に失敗しました。")
      }
    } catch (error) {
      setResponseMessage("エラーが発生しました。")
    } finally {
      setLoading(false)
    }
  }

  return (
    <article className="w-full lg:max-w-[1240px] h-auto mx-auto px-5 lg:px-5 pt-16 pb-20 lg:pt-[120px] lg:pb-[134px]">
      <div className="w-full">
        <section>
          <p className="text-lg font-semibold ![line-height:160%] tracking-[0.03em] whitespace-pre-line">
            必須項目を全てご入力の上「送信ボタン」を押して、フォームを送信してください。
            <br />
            ※フォームマーケティング・セールスはお断りしております。
          </p>
        </section>

        <section className="text-sm lg:text-lg mt-10 lg:mt-20 mx-auto">
          {responseMessage && <p className="text-red-500">{responseMessage}</p>}
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div
                key={field.name}
                className={`mb-6 lg:mb-10 ${
                  field.name === "lastName" || field.name === "firstName"
                    ? "lg:w-1/2 lg:inline-block"
                    : "w-full"
                } ${
                  field.name === "firstName"
                    ? "lg:pl-3"
                    : field.name === "lastName"
                    ? "lg:pr-3"
                    : ""
                }`}
              >
                <label className="text-sm lg:text-base block font-extrabold mb-1 lg:mb-2 ![line-height:200%]">
                  {field.label}{" "}
                  {field.required && (
                    <span className="text-red-500">(必須)</span>
                  )}
                </label>

                {field.type === "select" && field.options && (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-bgLight [&>*]:bg-bgLight appearance-none bg-[length:16px_10px] lg:bg-[length:22px_10px] bg-[right_1.5rem_center] bg-no-repeat text-base lg:text-lg"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L8 9L15 1' stroke='%23A38758' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    }}
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {field.type !== "select" && (
                  <>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={1}
                        className="w-full px-6 py-4 bg-bgLight placeholder:text-[#EFEFEF] placeholder:text-base lg:placeholder:text-lg"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-6 py-4 bg-bgLight placeholder:text-[#EFEFEF] placeholder:text-base lg:placeholder:text-lg ![line-height:170%]"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-10 lg:mt-20">
              <SubmitButton loading={loading} />
            </div>
            <p className="text-center ![line-height:160%] text-xs lg:text-sm mt-6 lg:mt-16 tracking-[0.05em] whitespace-pre-line">
              上記ボタンを押すことで、利用規約および、当社のサービス等に関する情報を提供する目的で、
              <br />
              〇〇〇〇〇〇〇が送信された個人情報を保管・処理することに同意したものとみなされます。
              <br />
              お客様はこれらの情報提供をいつでも停止できます。
              <br />
              個人情報の開示や削除依頼等のお問い合わせ先、およびお客様の個人情報を尊重して保護するための弊社取り組みについては、プライバシーポリシーをご覧ください。
            </p>
          </form>
        </section>
      </div>
    </article>
  )
}

export default ContactForm
