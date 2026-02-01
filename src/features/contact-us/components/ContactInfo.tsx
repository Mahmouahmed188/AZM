"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import type { LucideIcon } from "lucide-react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, text }: { icon: LucideIcon; text: string }) => {
    return (
        <div className="flex gap-3 w-full group">
            <div className="p-0.5 mt-1">
                <Icon className="w-6 h-6 text-[#E38CFF] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-white font-rubik text-lg lg:text-2xl font-normal  leading-relaxed group-hover:text-azm-purple transition-colors duration-300">
                {text}
            </p>
        </div>
    );
};

const ContactInfo = () => {
    const { t } = useTranslation();
    const { dir, mounted } = useDirection();

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col items-end gap-6 lg:gap-14 w-full max-w-148" dir={dir}>
            <h1 className="flex flex-col text-white font-rubik text-[32px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2]">
                <span>{t('contactInfo.headline', 'نسعد بتواصلك والرد')}</span>
                <span>{t('contactInfo.subline', 'على كافة استفساراتك.')}</span>
            </h1>

            <div className="flex flex-col items-end gap-6 w-full">
                <ContactInfoItem
                    icon={MapPin}
                    text={t('contactInfo.address', 'مبنى رقم 23 ليسن فالي، طريق الملك خالد - الرياض - المملكة العربية السعودية')}
                />
                <ContactInfoItem
                    icon={Mail}
                    text={t('contactInfo.email', 'info@azm.sa')}
                />
                <ContactInfoItem
                    icon={Phone}
                    text={t('contactInfo.phone', '966-112884141')}
                />
            </div>
        </div>
    );
};

export default ContactInfo;
