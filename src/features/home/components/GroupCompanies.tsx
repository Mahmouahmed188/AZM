"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpLeft, Icon, icons } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- Constants ---
const fonts = {
    tajawal: "'Tajawal', sans-serif",
};

// --- Sub-Components ---

const BackgroundText = () => {
    const { t } = useTranslation();

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1
                className="text-[7vw] md:text-[9vw] leading-none font-black text-[#FFFFFF] whitespace-nowrap select-none drop-shadow-2xl"
            >
                {t('groupCompanies.backgroundText', 'منظومة شركات عزم')}
            </h1>
        </div>
    );
};

const CornerButton = () => {
    const { t } = useTranslation();

    return (
        <button className="group flex items-center gap-3 relative cursor-pointer">
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-bl-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-tr-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-br-lg" />
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-tl-lg" />

            <ArrowUpLeft className="text-white w-5 h-5 transition-transform group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] rotate-[5deg]" />
            <span className="text-white text-lg font-bold" style={{ fontFamily: fonts.tajawal }}>{t('groupCompanies.moreButton', 'المزيد')}</span>
        </button>
    );
};

const LogosBar = ({ className = "", icons }: { className?: string, icons?: { titleKey: string, icon: string[] } }) => {
    const { t } = useTranslation();

    if (!icons) return null;
    return (
        <div className={`bg-[#FFFFFF]/90 backdrop-blur-md shadow-lg rounded-lg py-4 px-8 flex items-center gap-6 md:gap-10 justify-between min-w-[340px] max-w-[590px] ${className}`}>
            <span className="text-gray-900 text-sm font-medium mr-auto" style={{ fontFamily: fonts.tajawal }}>
                {t(icons.titleKey)}
            </span>
            <div className="flex items-center gap-6">
                {icons.icon.map((src, idx) => (

                    <div key={idx} className="flex items-center">
                        <div className="relative w-20 h-12">
                            <Image src={src} alt={`Logo ${idx}`} fill className="object-contain" />
                        </div>
                        {/* {idx < icons.icon.length - 1 && <div className="h-5 w-px bg-gray-400/50" />} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CompanyCard = ({
    titleKey,
    descriptionKey,
    image,
    id,
    icons,
    logo,
    bg
}: {
    titleKey: string;
    descriptionKey: string;
    image: string;
    id: number;
    icons?: { titleKey: string; icon: string[] };
    logo?: string;
    bg?: string;
}) => {
    const { t } = useTranslation();

    return (
        <div className={`company-card relative w-full h-[100vh] flex items-center justify-center p-4`}>
            <div className="relative w-full max-w-[1400px] flex flex-col md:flex-row items-stretch justify-around gap-0 md:gap-10">
                {/* Content Panel (Now First in Code -> Start/Right in RTL, Left in LTR) */}
                <div className="relative w-full md:w-[40%] text-start self-center mt-[-50px] md:mt-0 z-20">
                    <div
                        className="w-full text-white p-10 md:p-14 shadow-2xl flex flex-col items-start gap-6 min-h-[400px] md:min-h-[500px] justify-center relative rounded-[4px]"
                        style={{
                            backgroundColor: bg,
                            backgroundImage: bg ? "url('/group/Background Pattern.png')" : "url('/group/Background Pattern.png'), linear-gradient(135deg, #9d4edd 0%, #7b2cbf 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {logo && (
                            <div className="md:top-8 md:start-8 opacity-90 absolute top-8 start-8">
                                <div className="relative w-20 h-20">
                                    <Image
                                        src={logo}
                                        alt={`${t(titleKey)} Logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-2 leading-tight" >
                            {t(titleKey)}
                        </h2>
                        <p className="text-lg md:text-xl text-[#e9d5ff] leading-relaxed font-normal max-w-lg mb-12" >
                            {t(descriptionKey)}
                        </p>
                        <div className="mt-auto w-full flex justify-end md:justify-start" dir="ltr">
                            <CornerButton />
                        </div>
                    </div>
                </div>

                {/* Image Panel (Now Second in Code -> End/Left in RTL, Right in LTR) */}
                <div className="relative w-full md:w-[35%] h-[50vh] md:h-[80vh] flex-shrink-0 self-center">
                    <div className="w-full h-full relative overflow-hidden bg-gray-900 rounded-none md:rounded-[4px] shadow-2xl">
                        <Image
                            src={image}
                            alt={t(titleKey)}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
                    </div>

                    {icons && (
                        <div className="absolute -bottom-0 -start-20 md:-start-32 z-30 w-auto">
                            <LogosBar icons={icons} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Main Container ---

const GroupCompanies = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Text Exit Animation (Fades out when section ends)
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "bottom 100%",
                end: "bottom 0%",
                scrub: 1,
                onUpdate: (self) => {
                    if (textRef.current) {
                        gsap.set(textRef.current, {
                            y: -100 * self.progress
                        });
                    }
                }
            });

            // 2. Cards Animation (Fade in as they scroll up)
            const cards = gsap.utils.toArray<HTMLElement>(".company-card");
            cards.forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "top 40%",
                            toggleActions: "play none none reverse",
                            scrub: 0.5
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const companies = useMemo(() => [
        {
            id: 1,
            titleKey: "groupCompanies.companies.digital.title",
            descriptionKey: "groupCompanies.companies.digital.description",
            image: "/group/card1/purple_tunnel.jpg",
            logo: "/group/card1/LogoAZM.png",
            bg: "#A733CC",
            icons: {
                titleKey: "groupCompanies.companies.digital.productsTitle",
                icon: ["/group/card1/Logo.png", "/group/card1/Logo2.png", "/group/card1/Logo3.png"]
            }
        },
        {
            id: 2,
            titleKey: "groupCompanies.companies.fintech.title",
            descriptionKey: "groupCompanies.companies.fintech.description",
            image: "/group/card2/Image 1.png",
            logo: "/group/card1/LogoAZM.png",
            bg: "#0177B7",
            icons: {
                titleKey: "groupCompanies.companies.fintech.productsTitle",
                icon: ["/group/card2/Logo.png", "/group/card2/Logo1.png", "/group/card2/Logo2.png"]
            }
        },
        {
            id: 3,
            titleKey: "groupCompanies.companies.software.title",
            descriptionKey: "groupCompanies.companies.software.description",
            image: "/group/card3/Image.png",
            logo: "/group/card1/LogoAZM.png",
            bg: "#032F70",
            icons: {
                titleKey: "groupCompanies.companies.software.productsTitle",
                icon: ["/group/card3/Logos.png"]
            }
        },
        {
            id: 4,
            titleKey: "groupCompanies.companies.ax.title",
            descriptionKey: "groupCompanies.companies.ax.description",
            image: "/group/card4/Image.png",
            logo: "/group/card4/Logo.png",
            bg: "#005CFF",
        },
        {
            id: 5,
            titleKey: "groupCompanies.companies.entropy.title",
            descriptionKey: "groupCompanies.companies.entropy.description",
            image: "/group/card5/Image.png",
            logo: "/group/card5/Frame.png",
            bg: "#000000",
        }
    ], []);

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#020b1c] relative overflow-visible"
        >
            {/* 1. Sticky Background Container - Fixed while scrolling this section */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 pointer-events-none">
                <div ref={textRef} className="w-full h-full relative">
                    <BackgroundText />
                </div>
            </div>

            {/* 2. Scrolling Content - Pulled up to overlap sticky background */}
            <div className="relative z-10 -mt-[100vh] flex flex-col pb-32">
                {/* Spacer to show text alone initially */}
                <div className="h-screen w-full pointer-events-none" />

                {companies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        id={company.id}
                        titleKey={company.titleKey}
                        descriptionKey={company.descriptionKey}
                        image={company.image}
                        icons={company.icons}
                        logo={company.logo}
                        bg={company.bg}
                    />
                ))}
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020b1c] to-transparent pointer-events-none z-20" />
        </section>
    );
};



export default GroupCompanies;
