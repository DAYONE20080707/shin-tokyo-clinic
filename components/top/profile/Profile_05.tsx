// components/profile/Profile_05.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_02"
import SectionContent from "@/components/ui/frame/SectionContent"

const Profile_05 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="lg:max-w-[1200px] mx-auto">
          {/* <ContentHeadline
            enTitle="Profile"
            mainTitle="会社概要"
            enTitleClassName=""
            titleClassName=""
          /> */}
          <div className="lg:flex lg:justify-center gap-20 w-full">
            <div className="lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.468972251154!2d135.61516947575188!3d34.86956817286014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010292f1a39a65%3A0xa218c5af318d3042!2z44CSNTY5LTEwMjIg5aSn6Ziq5bqc6auY5qe75biC5pel5ZCJ5Y-w5LiA55Wq55S677yR77yW4oiS77yR!5e0!3m2!1sja!2sjp!4v1757988988636!5m2!1sja!2sjp"
                width="100%"
                height="546"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] lg:h-[546px]"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="space-y-4">
                <h3 className="text-accentColor text-xl font-bold ![line-height:160%]">
                  医療法人 愛基会　黒川医院
                </h3>
                <ProfileCard
                  label=""
                  value="〒569-1022　大阪府高槻市日吉台一番町16-1"
                />
                <ProfileCard label="tel" value="072-687-0373" />
                <ProfileCard label="FAX" value="072-687-0373" />
              </div>

              {/* 診療時間表 */}
              <div className="mt-10 ">
                <h4 className="text-accentColor text-lg font-bold italic font-en mb-4">
                  Schedule
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-base ![line-height:160%]">
                    <thead>
                      <tr className="border-b border-[#d9d9d9]">
                        <th className="text-left py-2 font-medium w-[120px]">
                          診療時間
                        </th>
                        <th className="text-center py-2 font-medium">月</th>
                        <th className="text-center py-2 font-medium">火</th>
                        <th className="text-center py-2 font-medium">水</th>
                        <th className="text-center py-2 font-medium">木</th>
                        <th className="text-center py-2 font-medium">金</th>
                        <th className="text-center py-2 font-medium">土</th>
                        <th className="text-center py-2 font-medium">日</th>
                        <th className="text-center py-2 font-medium">祝</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#d9d9d9]">
                        <td className="py-2 text-left w-[120px]">
                          <div>
                            <div className="font-medium">午前</div>
                            <div className="">9:00~12:30</div>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#d9d9d9]">
                        <td className="py-2 text-left w-[120px]">
                          <div>
                            <div className="font-medium">午後</div>
                            <div className="">6:00~8:15</div>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-base space-y-1">
                  <p>休診日：日曜・祝日、水曜・土曜午後</p>
                  <p className="text-xs">
                    ※午後6時以降の夜診と土曜日の正午以降の受け付けに、夜間・早朝等加算が適用されます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Profile_05
