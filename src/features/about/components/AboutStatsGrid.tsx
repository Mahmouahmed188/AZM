"use client";

import React from "react";

type StatCellProps = {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
};

function StatCell({ value, label, valueClassName = "", className = "" }: StatCellProps) {
  return (
    <div
      className={[
        "relative flex flex-col items-end justify-center",
        "px-10 py-10 md:px-[60px] md:py-[60px]",
        "min-h-30",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "text-white",
          "font-bold",
          "tracking-tight",
          "text-[32px] leading-[1.1] md:text-[48px]",
          valueClassName,
        ].join(" ")}
      >
        {value}
      </div>
      <div className="mt-4 text-white/70 text-[16px] leading-[1.6]">{label}</div>
    </div>
  );
}

export default function AboutStatsGrid() {
  return (
    <section className="w-full" aria-label="نبذة رقمية عن عزم" dir="rtl">
      <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-28">
        <header className="flex items-end justify-end">
          <h1 className="text-white font-bold text-[40px] leading-none tracking-tight">من نحن</h1>
        </header>

        <div className="mt-10 relative">
          {/* Outer glow like the screenshot (top-left purple, bottom-right purple) */}
          <div className="pointer-events-none absolute -inset-12 -z-10">
            <div className="absolute -top-10 -left-16 h-55 w-65 rounded-full bg-[#6B2CFF]/20 blur-[70px]" />
            <div className="absolute -bottom-10 -right-16 h-55 w-65 rounded-full bg-[#A733CC]/18 blur-[70px]" />
          </div>

          {/* Grid wrapper with 1px separators, like the Figma grid */}
          <div className="relative mt-6 rounded-[12px] bg-[#1a1f2e] p-[1px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#1a1f2e] rounded-[11px] overflow-hidden">
              {/* Cell 1 – Gradient purple with grid overlay */}
              <div className="relative bg-gradient-to-br from-[#6b46c1] to-[#1a1f2e]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="about-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid-1)" />
                </svg>
                <StatCell value="الدرجة الأولى" label="تصنيف المقاييس في نقية الاتصالات" />
              </div>

              {/* Cell 2 – Dark with dotted overlay */}
              <div className="relative bg-[#0f1420]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="about-grid-2" width="15" height="15" patternUnits="userSpaceOnUse">
                      <circle cx="7.5" cy="7.5" r="1" fill="rgba(255,255,255,0.1)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid-2)" />
                </svg>
                <StatCell value="2017" label="سنة التأسيس" valueClassName="text-[64px]" />
              </div>

              {/* Cell 3 – Curved highlight overlay */}
              <div className="relative bg-[#0a0e1a]">
                <svg
                  className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 150 Q 100 50 200 150 T 400 150 L 400 300 L 0 300 Z"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <path
                    d="M 0 180 Q 100 80 200 180 T 400 180 L 400 300 L 0 300 Z"
                    fill="rgba(255,255,255,0.03)"
                  />
                </svg>
                <StatCell value="400+" label="في أقسام ومشاريع المجموعة" valueClassName="text-[64px]" />
              </div>

              {/* Cell 4 – Gradient wash */}
              <div className="relative bg-[#0a0e1a]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="about-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grad-1)" />
                </svg>
                <StatCell value="4 مكاتب" label="تطوير برمجي خارج المملكة" valueClassName="text-[64px]" />
              </div>

              {/* Cell 5 – Diagonal grid */}
              <div className="relative bg-[#0f1420]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="about-grid-3" width="30" height="30" patternUnits="userSpaceOnUse">
                      <line
                        x1="0"
                        y1="0"
                        x2="30"
                        y2="30"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                      <line
                        x1="30"
                        y1="0"
                        x2="0"
                        y2="30"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid-3)" />
                </svg>
                <StatCell value="63%" label="نسبة المحتوى المحلي" valueClassName="text-[64px]" />
              </div>

              {/* Cell 6 – Concentric circles bottom-right */}
              <div className="relative bg-[#0a0e1a]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <circle cx="350" cy="250" r="100" fill="rgba(255,255,255,0.03)" />
                  <circle cx="350" cy="250" r="150" fill="rgba(255,255,255,0.02)" />
                  <circle cx="350" cy="250" r="200" fill="rgba(255,255,255,0.01)" />
                </svg>
                <StatCell value="66%" label="نسبة السعودة في النطاق البلاتيني" valueClassName="text-[64px]" />
              </div>

              {/* Cell 7 – Dotted pattern */}
              <div className="relative bg-[#0f1420]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="about-dots-1" width="25" height="25" patternUnits="userSpaceOnUse">
                      <circle cx="12.5" cy="12.5" r="2" fill="rgba(255,255,255,0.08)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-dots-1)" />
                </svg>
                <StatCell value="17 جنسية" label="تنوع الكفاءات البشرية" valueClassName="text-[64px]" />
              </div>

              {/* Cell 8 – Radial highlight top-right */}
              <div className="relative bg-[#0a0e1a]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <radialGradient id="about-radial-1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                  </defs>
                  <circle cx="350" cy="50" r="150" fill="url(#about-radial-1)" />
                </svg>
                <StatCell
                  value="15+"
                  label="قطاعاً رئيسياً تخدمها الشركة في المملكة"
                  valueClassName="text-[64px]"
                />
              </div>

              {/* Cell 9 – Cross grid */}
              <div className="relative bg-[#0f1420]">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="about-lines-1" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 0 20 L 40 20"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                      <path
                        d="M 20 0 L 20 40"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-lines-1)" />
                </svg>
                <StatCell value="48%" label="نسبة الموظفات في الشركة" valueClassName="text-[64px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

