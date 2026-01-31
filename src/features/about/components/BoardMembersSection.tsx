"use client";

import React from "react";

type BoardMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

const MEMBERS: BoardMember[] = [
  {
    id: "ahmed-alhayal",
    name: "أحمد الحيالي",
    role: "رئيس مجلس الإدارة",
    bio: "يتمتع بخبرة قيادية واسعة في تطوير الأعمال والتحول الرقمي وإدارة المبادرات الاستراتيجية.",
  },
  {
    id: "ali-albadr",
    name: "علي البدر",
    role: "عضو مجلس الإدارة",
    bio: "خبرة في إدارة المحافظ الاستثمارية وبناء الشراكات وتنفيذ المشاريع التقنية على نطاق واسع.",
  },
  {
    id: "saad-aljassmi",
    name: "سعد الجسمي",
    role: "عضو مجلس الإدارة",
    bio: "خبرة في قيادة الفرق وتطوير المنتجات الرقمية ورفع الكفاءة التشغيلية.",
  },
  {
    id: "omar-alsunaydi",
    name: "عمر السنيدي",
    role: "عضو مجلس الإدارة",
    bio: "خبرة في إدارة البرامج والمخاطر والحوكمة وبناء الأطر التنظيمية.",
  },
  {
    id: "omar-aldarsi",
    name: "عمر الدارسي",
    role: "عضو مجلس الإدارة",
    bio: "خبرة في التقنية والتشغيل وإدارة الجودة والتوسع المؤسسي.",
  },
];

function PortraitPlaceholder() {
  return (
    <div className="relative h-27.5 w-full overflow-hidden rounded-[14px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(167,51,204,0.18),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(107,44,255,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.20] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="board-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#board-noise)" />
        </svg>
      </div>
      {/* Silhouette-ish shape */}
      <div className="absolute bottom-0 left-1/2 h-21.25 w-32.5 -translate-x-1/2 rounded-t-[70px] bg-white/8 blur-[0.2px]" />
      <div className="absolute bottom-13.5 left-1/2 h-9.5 w-9.5 -translate-x-1/2 rounded-full bg-white/10" />
    </div>
  );
}

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <article
      className={[
        "relative",
        "rounded-[18px]",
        "border border-white/10",
        "bg-[rgba(0,8,20,0.55)]",
        "backdrop-blur-[18px]",
        "shadow-[0_30px_90px_rgba(0,0,0,0.5)]",
        "px-6 pt-6 pb-6",
      ].join(" ")}
    >
      <PortraitPlaceholder />

      <h3 className="mt-5 text-white font-bold text-[18px] leading-none">{member.name}</h3>
      <p className="mt-2 text-white/55 text-[13px] leading-[1.6]">{member.role}</p>
      <p className="mt-4 text-white/45 text-[12px] leading-[1.75]">{member.bio}</p>
    </article>
  );
}

export default function BoardMembersSection() {
  const topRow = MEMBERS.slice(0, 3);
  const bottomRow = MEMBERS.slice(3);

  return (
    <section className="w-full" aria-label="مجلس إدارة شركة عزم" dir="rtl">
      <div className="mx-auto w-full max-w-295 px-6 lg:px-28">
        <h2 className="mt-20 text-center text-white font-bold text-[34px] leading-none tracking-tight">
          مجلس إدارة شركة عزم
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
          {topRow.map((m) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-7 md:max-w-195 md:mx-auto">
          {bottomRow.map((m) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

