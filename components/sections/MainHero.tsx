"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";


const StatItem = ({ number, unit, label, decimals = false }: { number: number; unit: string; label: string; decimals?: boolean }) => {
    return (
        <div className="relative group w-full max-w-[488px] mx-auto stat-item-container">
            <div className="relative flex flex-col items-end justify-center h-[168px] px-12 py-9">


                <div className="flex flex-row-reverse items-baseline gap-1 z-10">
                    <div className="flex flex-row-reverse items-baseline">
                        <span className="text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-plus">+</span>
                        <span
                            className="text-[48px] leading-[60px] font-normal text-white tracking-tighter stat-value"
                            data-target={number}
                            data-decimals={decimals ? 1 : 0}
                        >
                            0
                        </span>
                    </div>
                    <span className="text-[48px] leading-[60px] font-normal text-white mr-2 stat-unit">{unit}</span>
                </div>

                <p className="mt-3 text-sm leading-5 text-white/50 text-right font-normal z-10 max-w-full stat-label">
                    {label}
                </p>

                <div className="absolute inset-y-0 left-0 w-[1.9px] bg-[#7278B84A] side-line-left"></div>
                <div className="absolute inset-y-0 right-0 w-[1.5px] bg-[#7278B84A] side-line-right"></div>
            </div>

            <div className="relative w-full">
                <div className="h-[1.9px] bg-[#7278B84A] bottom-line" style={{ transformOrigin: "right" }}></div>
            </div>
        </div>
    );
};
const CertificationLogo = ({ src, title, subtitle }: { src: string; title: string; subtitle: string }) => (
    <div className="flex items-center gap-4 group logo-item" dir="rtl">
        <div className="w-16 h-12 flex items-center justify-center flex-shrink-0">
            <img
                src={src}
                alt={title}
                className="max-w-full max-h-full object-contain"
            />
        </div>
        <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                {title}
            </span>
            <span className="text-xs text-white/50 leading-relaxed">
                {subtitle}
            </span>
        </div>
    </div>
);

const MainHero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const swirlRef = useRef<SVGSVGElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const descTextRef = useRef<HTMLDivElement>(null);
    const descLogosRef = useRef<HTMLDivElement>(null);
    const statsLeftRef = useRef<HTMLDivElement>(null);
    const loadingBarRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. الحالة الابتدائية لجميع العناصر (تصفير)
            gsap.set(titleRef.current, { y: 50, opacity: 0 });
            gsap.set(".title-line", { y: 30, opacity: 0 });
            gsap.set(swirlRef.current, { scale: 0.5, opacity: 0, rotation: -15 });

            // الجزء الأيمن
            gsap.set(descTextRef.current, { y: 45, opacity: 0 });
            // اللوجوهات تبدأ من اختفاء تام فقط (بدون تحريك X)
            gsap.set(descLogosRef.current, { opacity: 0 });

            // الجزء الأيسر (statsLeftRef)
            gsap.set(loadingBarRef.current, { width: 0 });
            gsap.set(".bottom-line", { scaleX: 0, transformOrigin: "right" });
            gsap.set([".side-line-left", ".side-line-right"], { scaleY: 0, transformOrigin: "top" });
            gsap.set(".stat-value", { opacity: 0 });
            gsap.set(".stat-plus", { opacity: 0 });
            gsap.set(".stat-unit", { y: 40, opacity: 0 });
            gsap.set(".stat-label", { y: 30, opacity: 0 });

            const tl = gsap.timeline({ delay: 0.5 });

            // --- المرحلة الأولى: العنوان ---
            tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power4.out" })
                .to(".title-line", { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6")
                .to(swirlRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)" }, "-=0.4");

            // --- المرحلة الثانية: الجزء الأيمن (ينتهي ليبدأ الأيسر) ---
            tl.to(descLogosRef.current, {
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.inOut"
            })
                .to(descTextRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out"
                }, "-=.5")
            // ثانياً: اللوجوهات تظهر من العدم بتتابع (Stagger) وبشكل أهدأ قليلاً

            // --- المرحلة الثالثة: الجزء الأيسر (يبدأ هنا فوراً) ---
            tl.addLabel("startLeftStats"); // علامة زمنية للبدء المتزامن

            // 1. الخط العلوي والخطوط السفلية والجانبية معاً
            tl.to(loadingBarRef.current, { width: "100%", duration: 1.2, ease: "expo.inOut" }, "startLeftStats")
                .to(".bottom-line", { scaleX: 1, duration: 1.2, ease: "expo.inOut", stagger: 0.1 }, "startLeftStats")
                .to([".side-line-left", ".side-line-right"], { scaleY: 1, duration: 1.2, ease: "expo.inOut", stagger: 0.1 }, "startLeftStats");

            // 2. ظهور الأرقام (من العدم) والوحدات (من أسفل)
            tl.to(".stat-value", { opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.in" }, "startLeftStats+=0.4")
                .to(".stat-unit", { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "startLeftStats+=0.4");
            tl.to(".stat-plus", { opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.in" }, "startLeftStats+=0.4");
            // 3. ظهور الوصف (Labels) في النهاية
            tl.to(".stat-label", { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "startLeftStats+=0.7");
            // داخل useLayoutEffect في المخطط الزمني (Timeline)
            // بعد أن ينتهي كل شيء (بعد أن تظهر النصوص والخطوط)

            tl.to(".stat-value", {
                opacity: 1,
                duration: 0.1 // نضمن ظهورها أولاً
            });

            // إضافة تأثير العداد لكل رقم
            tl.to(".stat-value", {
                duration: 2, // مدة زيادة الرقم (ثانيتين)
                ease: "power2.out",
                onStart: () => {
                    // نختار كل الأرقام ونحركها
                    const stats = document.querySelectorAll<HTMLElement>(".stat-value");
                    stats.forEach((el) => {
                        const target = parseFloat(el.getAttribute("data-target") || "0");
                        const hasDecimals = el.getAttribute("data-decimals") === "1";

                        gsap.to(el, {
                            innerText: target,
                            duration: 2,
                            snap: { innerText: hasDecimals ? 0.1 : 1 }, // إذا كان كسر عشري يقفز بـ 0.1، وإذا كان صحيح بـ 1
                            ease: "power2.out",
                            onUpdate: function () {
                                // تحديث النص وتنسيقه
                                if (hasDecimals) {
                                    el.innerHTML = parseFloat(el.innerText).toFixed(1);
                                } else {
                                    el.innerHTML = Math.floor(parseFloat(el.innerText)).toString();
                                }
                            }
                        });
                    });
                }
            }, "-=0.5");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-[#000814] overflow-hidden flex flex-col font-tajawal">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Background.png"
                    alt="Background"
                    fill
                    className="hero-bg-image object-cover opacity-60 pointer-events-none"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-transparent to-[#000814]" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex-grow flex flex-col items-center pb-32 pt-32 md:pt-48 px-6">
                <div ref={titleRef} className="max-w-[1200px] w-full text-right" dir="rtl">
                    <div className="title-line flex items-center justify-start gap-4 mb-4">
                        <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none"> حلول رقمية</span>
                    </div>
                    <div className="title-line flex items-center justify-start gap-4">
                        <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">—</span>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">لجودة حياة</span>
                        <div className="relative inline-block">
                            {/* النص مع z-index عالٍ ليكون فوق الصورة */}
                            <span className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight z-10">
                                أفضل
                            </span>
                            <svg
                                ref={swirlRef}
                                className="absolute -top-[30%] -left-[9%] w-[120%] h-auto pointer-events-none"
                                viewBox="0 0 277 132"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M130.026 36.8854C119.009 35.0976 107.779 33.9082 96.6042 34.3688C85.4001 34.8313 74.3077 36.8515 63.5575 40.0004C52.8549 43.1415 42.5144 47.4336 32.771 52.8677C23.2613 58.1677 13.9563 64.4059 7.51509 73.3684C1.602 81.597 -1.02981 92.4993 4.59703 101.612C9.42976 109.444 18.2913 113.36 26.9159 115.434C37.5494 117.99 48.7337 118.665 59.6115 119.409C71.8558 120.249 84.1347 120.565 96.4054 120.36C120.915 119.953 145.405 117.505 169.507 113.034C193.25 108.627 216.954 102.393 239.529 93.7512C256.504 87.253 276.852 74.6217 273.91 53.5148C272.418 42.7851 264.867 33.6836 255.949 28.0351C246.079 21.7796 234.434 18.7253 223.168 16.0934C200.231 10.7417 176.588 8.57159 153.062 9.71724C129.434 10.8677 105.976 15.3026 83.6835 23.2483C78.2813 25.1743 72.9972 27.3463 67.7065 29.5498C64.5579 30.8658 66.9786 35.5866 70.1174 34.2771C80.5024 29.9474 91.3556 26.789 102.232 23.9844C113.111 21.18 124.17 19.0918 135.324 17.7518C157.6 15.0722 180.234 15.3036 202.438 18.5507C213.487 20.1671 224.485 22.4997 235.175 25.7474C245.154 28.7766 255.24 33.1004 261.946 41.4242C267.674 48.5338 269.957 57.8773 266.215 66.4342C262.827 74.1755 255.259 79.5339 248.048 83.3895C238.974 88.2427 229.036 91.4084 219.267 94.5293C208.101 98.0967 196.79 101.202 185.371 103.85C162.51 109.145 139.212 112.658 115.796 114.195C92.3126 115.737 68.7027 115.38 45.2793 113.087C36.2094 112.199 26.7663 111.306 18.445 107.273C10.8077 103.574 5.32674 96.5594 6.46372 87.7154C7.72698 77.8919 16.071 69.7648 23.6442 64.2016C32.1218 57.9741 41.8184 53.0737 51.5317 49.1044C71.2945 41.0292 93.0194 36.8754 114.365 36.8143C119.605 36.7971 124.78 37.1157 129.972 37.8243C130.577 37.9069 130.615 36.979 130.026 36.8854Z" fill="#C954ED" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Statistics Section */}
            <div className="relative z-20 mt-auto overflow-hidden">
                <div className="absolute inset-0 bg-azm-dark/50 backdrop-blur-xl pointer-events-none" />

                {/* الخط العلوي (loadingBarRef) */}
                <div className="absolute top-0 right-0 h-[1.9px] bg-[#7278B84A] w-0 z-20" ref={loadingBarRef}></div>

                <div ref={statsRef}>
                    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse">

                        {/* Right Side */}
                        <div className="flex-1 p-8 lg:p-12" dir="rtl">
                            <div ref={descTextRef} className="mb-12">
                                <h3 className="text-2xl lg:text-3xl font-normal text-white leading-tight mb-4">
                                    شركة رائدة في مجال تقنية المعلومات،
                                    <br />
                                    نساهم في تحسين جودة الحياة من خلال
                                    <br />
                                    تقديم حلول نوعية في الاعمال والتقنية.
                                </h3>
                            </div>

                            <div ref={descLogosRef} className="absolute space-y-6 z-20">
                                <CertificationLogo
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/265afc705c0e1be0776998f4ded408f48ebc99aa?width=128"
                                    title="تداول – السوق المالية السعودية"
                                    subtitle="شركة مدرجة"
                                />
                                <CertificationLogo
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/d95a82daf2e7077172c7bb6eb88cfeec7afab48b?width=71"
                                    title="Great Place to Work®"
                                    subtitle="شهادة أفضل بيئة عمل"
                                />
                                <CertificationLogo
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/b3cb39ab82bc50198a4b9946ab25cbc0d1745de6?width=96"
                                    title="البلاتيني"
                                    subtitle="مزود خدمة معتمد من هيئة الحكومة الرقمية"
                                />
                            </div>
                        </div>

                        {/* Left Side */}
                        <div ref={statsLeftRef} className="lg:w-[600px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
                            {/* في قسم الأرقام (Left Side) */}
                            <StatItem
                                number={2.5} // الرقم الحقيقي
                                unit="مليار"
                                label="إجمالي قيمة المشاريع خلال الأربع سنوات الأخيرة"
                                decimals={true} // لإظهار الفاصلة العشرية
                            />
                            <StatItem
                                number={25}
                                unit="منتج"
                                label="منصات وحلول رقمية"
                            />
                            <StatItem
                                number={400}
                                unit="عميل"
                                label="من القطاعين الحكومي والخاص"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainHero;