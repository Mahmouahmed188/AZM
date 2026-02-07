"use client";

import React from "react";
import Image from "next/image";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

type BoardMember = {
  id: string;
  img: string;
  name: string;
  role: string;
  bio: string;
};

const MEMBERS: BoardMember[] = [
  {
    id: "ahmed-alhayal",
    img: "/about/image1.png",
    name: "أحمد الحقباني",
    role: "نائب رئيس مجلس الإدارة",
    bio: "يتمتع بخبرة قيادية واسعة في تطوير الأعمال والتحول الرقمي وإدارة المبادرات الاستراتيجية.",
  },
  {
    id: "ali-albadr",
    img: "/about/image2.png",
    name: "علي البلاع",
    role: "الرئيس التنفيذي و عضو مجلس الإدارة المنتدب",
    bio: "خبرة تنفيذية في العديد من الشركات الاستشارية والتقنية متعددة الجنسيات.",
  },
  {
    id: "saad-aljassmi",
    img: "/about/image3.png",
    name: "ماجد العصيمي",
    role: "عضو مجلس الإدارة",
    bio: "شخص قيادي ذو خبرة في العمل كمسؤول تنفيذي في مجموعة من القطاعات الحكومية والخاصة، عضو مجلس إدارة في العديد من الشركات السعودية.",
  },
  {
    id: "omar-alsunaydi",
    img: "/about/image5.png",
    name: "عمر الجريسي",
    role: "عضو مجلس الإدارة",
    bio: "مستثمر ويعد أحد الشخصيات العامة، يعمل كعضو مجلس إدارة في العديد من الشركات التي تتبنى رؤية 2030 في كل برامجها ومبادراتها.",
  },
  {
    id: "omar-aldarsi",
    img: "/about/image4.png",
    name: "عمر السنيدي",
    role: "عضو مجلس الإدارة",
    bio: "خبير في الحوكمة والقطاع المالي. شغل منصب مدير حوكمة الشركات بهيئة السوق المالية. يشغل حاليًا منصب مدير الحوكمة في شركة سعودية بارزة مدرجة في القطاع المصرفي.",
  },
];

function BoardCard({ member }: { member: BoardMember }) {
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } =
    useHoverEffect();

  return (
    <article
      className={[
        "relative",
        "rounded-[18px]",
        "border border-white/10",
        "bg-[#040A16]",
        "pr-6 pt-4 pb-6",
        "lg:max-w-[384px]",
      ].join(" ")}
      style={{ backgroundImage: "url('/about/bgPatternB.png')" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={hoverStyle}
      />
      {/* <PortraitPlaceholder /> */}
      <div className="flex items-end justify-between">
        <div>
          <h3 className="mt-5 font-bold text-[24px] leading-none">
            {member.name}
          </h3>
          <p className="mt-2 font-medium text-[14px] leading-[1.6]">
            {member.role}
          </p>
        </div>
        <Image src={member.img} alt={member.id} width={176} height={176} />
      </div>
      <p className="mt-4 text-white/45 text-[12px] leading-[1.75] pl-6">
        {member.bio}
      </p>
    </article>
  );
}

export default function BoardMembersSection() {
  const topRow = MEMBERS.slice(0, 3);
  const bottomRow = MEMBERS.slice(3);

  return (
    <section className="w-full" aria-label="مجلس إدارة شركة عزم" dir="rtl">
      <div className="mx-auto w-full px-6 lg:px-28">
        <h2 className="mt-20 text-center text-white font-bold text-[34px] leading-none tracking-tight">
          مجلس إدارة شركة عزم
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
          {topRow.map((m) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-7 md:max-w-[800px] md:mx-auto">
          {bottomRow.map((m) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
