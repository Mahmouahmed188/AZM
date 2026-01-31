"use client";

import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LazyImage from "@/shared/components/common/LazyImage";

interface NewsItem {
    id: number;
    dateKey: string;
    titleKey: string;
    image: string;
}

const NewsCarousel: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    // News data with translation keys
    const newsData: NewsItem[] = useMemo(() => [
        {
            id: 1,
            dateKey: "news.items.item1.date",
            titleKey: "news.items.item1.title",
            image: "/azm_news_sample.png",
        },
        {
            id: 2,
            dateKey: "news.items.item2.date",
            titleKey: "news.items.item2.title",
            image: "/imageNews.png",
        },
        {
            id: 3,
            dateKey: "news.items.item3.date",
            titleKey: "news.items.item3.title",
            image: "/News2.jpg",
        },
    ], []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
    };

    const currentItem = newsData[currentIndex];
    return (
        <section className="w-full bg-[#D7E3F5] py-10 overflow-hidden relative min-h-[900px] lg:min-h-[1024px] font-rubik rtl" dir="rtl">
            <div className="max-w-[1440px] w-full mx-auto relative px-4 lg:px-0">

                {/* News Title & Navigation */}
                <div className="absolute lg:left-[944px] lg:top-[410px] lg:min-w-[385px] w-full z-20 flex items-end justify-between gap-6 lg:w-auto static lg:absolute mb-8 lg:mb-0">
                    <h2 className="text-[#000F26] text-4xl lg:text-5xl font-medium leading-tight text-right">
                        {t('news.title', 'أخبار عزم')}
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-[#A4B1C7] flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all text-[#A4B1C7]"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.293 4.29289C11.6835 3.90237 12.3165 3.90237 12.707 4.29289L19.707 11.2929C20.0976 11.6834 20.0976 12.3164 19.707 12.707L12.707 19.707C12.3165 20.0975 11.6835 20.0975 11.293 19.707C10.9024 19.3164 10.9024 18.6834 11.293 18.2929L16.5859 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H16.5859L11.293 5.70696C10.9024 5.31643 10.9024 4.68342 11.293 4.29289Z" fill="#A4B1C7"></path>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-[#646C79] flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all text-[#646C79]"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2929 4.29289C11.6834 3.90237 12.3164 3.90237 12.707 4.29289C13.0975 4.68342 13.0975 5.31643 12.707 5.70696L7.41399 10.9999H18.9999C19.5522 10.9999 19.9999 11.4476 19.9999 11.9999C19.9999 12.5522 19.5522 12.9999 18.9999 12.9999H7.41399L12.707 18.2929C13.0975 18.6834 13.0975 19.3164 12.707 19.707C12.3164 20.0975 11.6834 20.0975 11.2929 19.707L4.29289 12.707C3.90237 12.3164 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289Z" fill="#646C79"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative w-full h-[600px] lg:h-[832px] mt-12 lg:mt-0">

                    {/* Main Image Container */}
                    <div className="absolute left-0 top-[56px] w-full lg:w-[912px] h-[400px] lg:h-[832px] bg-[#000F26] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentItem.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src={currentItem.image}
                                    alt={t(currentItem.titleKey)}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Content Box */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute lg:left-[736px] lg:top-[502px] left-4 bottom-[-100px] lg:bottom-auto w-[calc(100%-32px)] lg:w-[592px] min-h-[356px] bg-[#012D74] p-8 lg:p-12 flex flex-col justify-center items-starttext-right z-10"
                    >
                        {/* Date */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-white text-lg lg:text-xl font-normal opacity-90">{t(currentItem.dateKey)}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11H4V20C4 20.5523 4.44771 21 5 21H19C19.5523 21 20 20.5523 20 20V11ZM8.00977 17C8.56205 17 9.00977 17.4477 9.00977 18C9.00977 18.5523 8.56205 19 8.00977 19H8C7.44772 19 7 18.5523 7 18C7 17.4477 7.44772 17 8 17H8.00977ZM12.0098 17C12.5621 17 13.0098 17.4477 13.0098 18C13.0098 18.5523 12.5621 19 12.0098 19H12C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17H12.0098ZM16.0098 17C16.5621 17 17.0098 17.4477 17.0098 18C17.0098 18.5523 16.5621 19 16.0098 19H16C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17H16.0098ZM8.00977 13C8.56205 13 9.00977 13.4477 9.00977 14C9.00977 14.5523 8.56205 15 8.00977 15H8C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13H8.00977ZM12.0098 13C12.5621 13 13.0098 13.4477 13.0098 14C13.0098 14.5523 12.5621 15 12.0098 15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H12.0098ZM16.0098 13C16.5621 13 17.0098 13.4477 17.0098 14C17.0098 14.5523 16.5621 15 16.0098 15H16C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13H16.0098ZM15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44771 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6ZM22 20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20Z" fill="white"></path>
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-white text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-[512px]">
                            {t(currentItem.titleKey)}
                        </h3>

                        {/* More Button */}
                        <div className="mt-auto group cursor-pointer relative inline-flex items-center gap-8 self-start px-6 py-4">
                            <span className="text-white text-lg font-medium relative z-10">{t('news.moreButton', 'المزيد')}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-[-2px] transition-transform">
                                <path d="M6 17V7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H9.41406L17.707 16.293C18.0976 16.6835 18.0976 17.3165 17.707 17.707C17.3165 18.0976 16.6835 18.0976 16.293 17.707L8 9.41406V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17Z" fill="white"></path>
                            </svg>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white rounded-tl-sm" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white rounded-tr-sm" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white rounded-bl-sm" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white rounded-br-sm" />

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NewsCarousel;
