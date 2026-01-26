"use client";

import { useRef, useLayoutEffect } from "react";
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

const BackgroundText = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
            className="text-[7vw] md:text-[9vw] leading-none font-black text-[#FFFFFF] whitespace-nowrap select-none drop-shadow-2xl"
        >
            منظومة شركات عزم
        </h1>
    </div>
);

const CornerButton = () => (
    <button className="group flex items-center gap-3 relative cursor-pointer">
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-bl-lg" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-tr-lg" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-br-lg" />
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/100 rounded-tl-lg" />

        <ArrowUpLeft className="text-white w-5 h-5 transition-transform group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] rotate-[5deg]" />
        <span className="text-white text-lg font-bold" style={{ fontFamily: fonts.tajawal }}>المزيد</span>
    </button>
);

const LogosBar = ({ className = "", icons }: { className?: string, icons?: { title: string, icon: string[] } }) => {
    if (!icons) return null;
    return (
        <div className={`bg-[#e2e8f0]/90 backdrop-blur-md shadow-lg rounded-lg py-4 px-8 flex items-center gap-6 md:gap-10 justify-between min-w-[340px] ${className}`}>
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
            <span className="text-gray-500 text-sm font-medium mr-auto" style={{ fontFamily: fonts.tajawal }}>
                {icons.title}
            </span>
        </div>
    );
};

const CompanyCard = ({
    title,
    description,
    image,
    id,
    icons,
    logo,
    bg
}: {
    title: string;
    description: string;
    image: string;
    id: number;
    icons?: { title: string; icon: string[] };
    logo?: string;
    bg?: string;
}) => {
    return (
        <div className={`company-card relative w-full h-[100vh] flex items-center justify-center p-4`}>
            <div className="relative w-full max-w-[1400px] flex flex-col md:flex-row items-stretch justify-around gap-0 md:gap-10">
                {/* Left: Image Panel */}
                <div className="relative w-full md:w-[35%] h-[50vh] md:h-[80vh] flex-shrink-0 self-center">
                    <div className="w-full h-full relative overflow-hidden bg-gray-900 rounded-none md:rounded-[4px] shadow-2xl">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
                    </div>

                    {icons && (
                        <div className="absolute -bottom-1 -right-10 md:-right-19 z-30 w-auto">
                            <LogosBar icons={icons} />
                        </div>
                    )}
                </div>

                {/* Right: Content Panel */}
                <div className="relative w-full md:w-[40%] text-right self-center mt-[-50px] md:mt-0 z-20">
                    <div
                        className="w-full text-white p-10 md:p-14 shadow-2xl flex flex-col items-end gap-6 min-h-[400px] md:min-h-[500px] justify-center relative rounded-[4px]"
                        style={{
                            backgroundColor: bg,
                            backgroundImage: bg ? "url('/group/Background Pattern.png')" : "url('/group/Background Pattern.png'), linear-gradient(135deg, #9d4edd 0%, #7b2cbf 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {logo && (
                            <div className="md:top-8 md:right-8 opacity-90">
                                <div className="relative w-20 h-20">
                                    <Image
                                        src={logo}
                                        alt={`${title} Logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-2 leading-tight" >
                            {title}
                        </h2>
                        <p className="text-lg md:text-xl text-[#e9d5ff] leading-relaxed font-normal max-w-lg mb-12" >
                            {description}
                        </p>
                        <div className="mt-auto w-full flex justify-end md:justify-start" dir="ltr">
                            <CornerButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Container ---

const GroupCompanies = () => {
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

    const companies = [
        {
            id: 1,
            title: "عزم الرقمية",
            desc: "تُعد عزم الرقمية شركة مملوكة بالكامل لمجموعة عزم، وتختص بتصميم وبناء وتشغيل المنصات الرقمية القابلة للتوسع لدعم التحول الرقمي الوطني في المملكة العربية السعودية. وتعمل الشركة على تطوير حلول تقنية متوافقة مع الأنظمة في مجالات التقنية المالية، والهوية الرقمية، وخدمات الثقة، والمدفوعات، والامتثال، بما يدعم مستهدفات رؤية السعودية 2030.",
            image: "/assets/purple_tunnel.jpg",
            logo: "/group/card1/LogoAZM.png",
            bg: "#A733CC",
            icons: {
                title: "أمثلة لمنتجات عزم الرقمية",
                icon: ["/group/card1/Logo.png", "/group/card1/Logo2.png", "/group/card1/Logo3.png"]
            }
        },
        {
            id: 2,
            title: "عزم التقنية المالية",
            desc: "تُعد عزم للتقنية المالية الذراع المختصة بالتقنية المالية ضمن مجموعة عزم، وتركز على تصميم وتطوير وتشغيل منصات التمويل الرقمي المنظمة. وتقدم الشركة حلولًا تقنية متقدمة، خاصة في مجالات التمويل الجماعي والتمويل البديل، عبر منصات رقمية آمنة ومتوافقة تنظيميًا تربط بين المستثمرين والجهات الممولة وأصحاب المشاريع.",
            image: "/group/card2/Image 1.png",
            logo: "/group/card1/LogoAZM.png",
            bg: "#0177B7",
            icons: {
                title: "أمثلة لمنتجات عزم للتقنية المالية",
                icon: ["/group/card2/Logo.png", "/group/card2/Logo1.png", "/group/card2/Logo2.png"]
            }
        },
        {
            id: 3,
            title: "عزم لتطوير البرمجيات",
            desc: "تُعد شركة عزم لتطوير البرمجيات الذراع الهندسية وتنفيذ المنتجات ضمن مجموعة عزم، وقد تأسست في عام 2023 لتصميم وبناء وتشغيل منصات رقمية قابلة للتوسع وحلول تقنية مخصصة. وتختص الشركة بالتطوير البرمجي الشامل، مع التركيز على تشغيل وصيانة المنصات الحيوية التي تتطلب موثوقية عالية وأمانًا واستدامة تشغيلية على مستوى الجهات الحكومية وقطاع الأعمال.",
            image: "/group/card3/Image.png",
            logo: "/group/card1/LogoAZM.png",
            bg: "#032F70",
            icons: {
                title: "أمثلة لمنتجات عزم لتطوير البرمجيات",
                icon: ["/group/card3/Logos.png"]
            }
        },
        {
            id: 4,
            title: "عزم اكس",
            desc: "تُعد شركة عزم اكس الذراع المتخصصة في التجربة الرقمية والتصميم ضمن مجموعة عزم، وقد تأسست في عام 2021 لتقديم تجارب رقمية متمحورة حول المستخدم ومتوافقة مع السياسات للمنصات الحكومية وقطاع الأعمال. وتختص الشركة بتحويل الخدمات المعقدة إلى رحلات رقمية سهلة وواضحة من خلال التصميم القائم على البحث وتطوير الواجهات الأمامية، بما يضمن سهولة الاستخدام والامتثال والمعايير الوطنية.",
            image: "/group/card4/Image.png",
            logo: "/group/card4/Logo.png",
            bg: "#005CFF",
        },
        {
            id: 5,
            title: "Entropy",
            desc: "تُعد Entropy الذراع المتخصصة في الذكاء الاصطناعي وتحليلات البيانات ضمن مجموعة عزم، وتركّز على تصميم وتشغيل منصات رقمية متقدمة للجهات الحكومية وقطاع الأعمال. تقدم الشركة حلولًا متكاملة تشمل تعلم الآلة وهندسة البيانات والتحليلات المتقدمة والأتمتة الذكية، بما يمكّن من اتخاذ قرارات قائمة على البيانات وتحسين الكفاءة التشغيلية. وتسهم Entropy في تعزيز المنصات الرقمية بقدرات تنبؤية وذكاء قابل للتوسع.",
            image: "/group/card5/Image.png",
            logo: "/group/card5/Frame.png",
            bg: "#000000",
        }
    ];

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

            {/* 2. Scrolling Content - Pulled up to overlap the sticky background */}
            <div className="relative z-10 -mt-[100vh] flex flex-col pb-32">
                {/* Spacer to show text alone initially */}
                <div className="h-screen w-full pointer-events-none" />

                {companies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        id={company.id}
                        title={company.title}
                        description={company.desc}
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
