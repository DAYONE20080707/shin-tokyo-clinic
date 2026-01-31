// components/ui/itemCard/ProfileCard_01_01.tsx

import React from "react"

interface ProfileCard_01Props {
  label: string
  value: string
}

const ProfileCard_01 = ({ label, value }: ProfileCard_01Props) => {
  return (
    <dl className="grid lg:grid-cols-[150px_auto] gap-x-2 mb-4">
      <dt className="text-lg font-semibold flex items-baseline py-2 lg:py-4 lg:border-b lg:border-[#eee]">
        {label}
      </dt>
      <dd className="font-light flex items-center pb-4 lg:py-4 border-b border-[#eee]">
        {value}
      </dd>
    </dl>
  )
}

export default ProfileCard_01
