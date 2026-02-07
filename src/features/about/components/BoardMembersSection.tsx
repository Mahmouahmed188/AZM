"use client";

import React from "react";
import Image from "next/image";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";
import { useTranslation } from "react-i18next";

type BoardMember = {
  id: string;
  img: string;
  name: string;
  role: string;
  bio: string;
};

function getMembersData(t: (key: string) => string): BoardMember[] {
  return [
    {
      id: "ahmed-alhayal",
      img: "/about/image1.png",
      name: t("about.boardMembers.ahmed.name"),
      role: t("about.boardMembers.ahmed.role"),
      bio: t("about.boardMembers.ahmed.bio"),
    },
    {
      id: "ali-albadr",
      img: "/about/image2.png",
      name: t("about.boardMembers.ali.name"),
      role: t("about.boardMembers.ali.role"),
      bio: t("about.boardMembers.ali.bio"),
    },
    {
      id: "saad-aljassmi",
      img: "/about/image3.png",
      name: t("about.boardMembers.majed.name"),
      role: t("about.boardMembers.majed.role"),
      bio: t("about.boardMembers.majed.bio"),
    },
    {
      id: "omar-alsunaydi",
      img: "/about/image5.png",
      name: t("about.boardMembers.omar1.name"),
      role: t("about.boardMembers.omar1.role"),
      bio: t("about.boardMembers.omar1.bio"),
    },
    {
      id: "omar-aldarsi",
      img: "/about/image4.png",
      name: t("about.boardMembers.omar2.name"),
      role: t("about.boardMembers.omar2.role"),
      bio: t("about.boardMembers.omar2.bio"),
    },
  ];
}

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
  const { t } = useTranslation();
  const MEMBERS = getMembersData(t);
  const topRow = MEMBERS.slice(0, 3);
  const bottomRow = MEMBERS.slice(3);

  return (
    <section className="w-full" aria-label={t("about.boardTitle")} dir="rtl">
      <div className="mx-auto w-full px-6 lg:px-28">
        <h2 className="mt-30 text-center text-white font-bold text-[34px] leading-none tracking-tight">
          {t("about.boardTitle")}
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7">
          {topRow.map((m: BoardMember) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-7 md:max-w-[800px] md:mx-auto">
          {bottomRow.map((m: BoardMember) => (
            <BoardCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
