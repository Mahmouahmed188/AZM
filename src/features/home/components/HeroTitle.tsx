import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";

interface HeroTitleProps {
    swirlRef: React.RefObject<SVGSVGElement | null>;
}

const HeroTitle = forwardRef<HTMLDivElement, HeroTitleProps>(({ swirlRef }, ref) => {
    const { t } = useTranslation();
    const { dir } = useDirection();

    return (
        <div ref={ref} className="max-w-[1200px] w-full" dir={dir}>
            <div className="title-line flex items-center justify-start gap-4 mb-4">
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                    {t('hero.title', 'حلول رقمية')}
                </span>
            </div>
            <div className="title-line flex items-center justify-start gap-4">
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">—</span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                    {t('hero.subtitle', 'لجودة حياة')}
                </span>
                <div className="relative inline-block">
                    <span className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight z-10">
                        {t('hero.highlight', 'أفضل')}
                    </span>
                    <svg
                        ref={swirlRef}
                        className="absolute -top-[30%] -start-[9%] w-[120%] h-auto pointer-events-none"
                        viewBox="0 0 277 132"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M130.026 36.8854C119.009 35.0976 107.779 33.9082 96.6042 34.3688C85.4001 34.8313 74.3077 36.8515 63.5575 40.0004C52.8549 43.1415 42.5144 47.4336 32.771 52.8677C23.2613 58.1677 13.9563 64.4059 7.51509 73.3684C1.602 81.597 -1.02981 92.4993 4.59703 101.612C9.42976 109.444 18.2913 113.36 26.9159 115.434C37.5494 117.99 48.7337 118.665 59.6115 119.409C71.8558 120.249 84.1347 120.565 96.4054 120.36C120.915 119.953 145.405 117.505 169.507 113.034C193.25 108.627 216.954 102.393 239.529 93.7512C256.504 87.253 276.852 74.6217 273.91 53.5148C272.418 42.7851 264.867 33.6836 255.949 28.0351C246.079 21.7796 234.434 18.7253 223.168 16.0934C200.231 10.7417 176.588 8.57159 153.062 9.71724C129.434 10.8677 105.976 15.3026 83.6835 23.2483C78.2813 25.1743 72.9972 27.3463 67.7065 29.5498C64.5579 30.8658 66.9786 35.5866 70.1174 34.2771C80.5024 29.9474 91.3556 26.789 102.232 23.9844C113.111 21.18 124.17 19.0918 135.324 17.7518C157.6 15.0722 180.234 15.3036 202.438 18.5507C213.487 20.1671 224.485 22.4997 235.175 25.7474C245.154 28.7766 255.24 33.1004 261.946 41.4242C267.674 48.5338 269.957 57.8773 266.215 66.4342C262.827 74.1755 255.259 79.5339 248.048 83.3895C238.974 88.2427 229.036 91.4084 219.267 94.5293C208.101 98.0967 196.79 101.202 185.371 103.85C162.51 109.145 139.212 112.658 115.796 114.195C92.3126 115.737 68.7027 115.38 45.2793 113.087C36.2094 112.199 26.7663 111.306 18.445 107.273C10.8077 103.574 5.32674 96.5594 6.46372 87.7154C7.72698 77.8919 16.071 69.7648 23.6442 64.2016C32.1218 57.9741 41.8184 53.0737 51.5317 49.1044C71.2945 41.0292 93.0194 36.8754 114.365 36.8143C119.605 36.7971 124.78 37.1157 129.972 37.8243C130.577 37.9069 130.615 36.979 130.026 36.8854Z" fill="#C954ED" />
                    </svg>
                </div>
            </div>
        </div>
    );
});

HeroTitle.displayName = "HeroTitle";

export default HeroTitle;
