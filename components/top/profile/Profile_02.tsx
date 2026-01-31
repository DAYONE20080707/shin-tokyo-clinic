// components/profile/Profile_02.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_01"
import SectionContent from "@/components/ui/frame/SectionContent"

const Profile_02 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="lg:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="Profile"
            mainTitle="会社概要"
            subTitleClassName=""
            titleClassName=""
          />
          <div className="mt-16 bg-white p-10 lg:flex lg:justify-between">
            <div>
              <ProfileCard label="社名" value="企業名" />
              <ProfileCard label="設立" value="0000年00月00日" />
              <ProfileCard label="資本金" value="000円" />
              <ProfileCard
                label="所在地"
                value={`000-000\n○○県○○市○○町00-00\n○○○○○ビル00F`}
              />
              <ProfileCard label="電話番号" value="000-000-0000" />
              <ProfileCard label="FAX" value="000-000-0000" />
              <ProfileCard label="代表者" value="氏名　氏名" />
              <ProfileCard label="URL" value="example@aa.aaaa" />
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707453!2d139.76454987585436!3d35.68124052997326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sfr!4v1728031590235!5m2!1sja!2sfr"
                width="420"
                height="523"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <p className="mt-4 font-light">
                000-000
                <br />
                ○○県○○市○○町00-00○○○○○ビル00F
              </p>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Profile_02
