import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, text }: { icon: any, text: string }) => {
    return (
        <div className="flex items-start justify-end gap-3 w-full group">
            <p className="text-white font-rubik text-lg lg:text-2xl font-normal text-right leading-relaxed group-hover:text-azm-purple transition-colors duration-300">
                {text}
            </p>
            <div className="flex items-center justify-center p-0.5 mt-1">
                <Icon className="w-6 h-6 text-[#E38CFF] group-hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    );
};

const ContactInfo = () => {
    return (
        <div className="flex flex-col items-end gap-6 lg:gap-14 w-full max-w-[592px]">
            <h1 className="flex flex-col items-end text-white font-rubik text-[32px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2] text-right">
                <span>نسعد بتواصلك والرد</span>
                <span>على كافة استفساراتك.</span>
            </h1>

            <div className="flex flex-col items-end gap-6 w-full">
                <ContactInfoItem
                    icon={MapPin}
                    text="مبنى رقم 23 ليسن فالي، طريق الملك خالد - الرياض - المملكة العربية السعودية"
                />
                <ContactInfoItem
                    icon={Mail}
                    text="info@azm.sa"
                />
                <ContactInfoItem
                    icon={Phone}
                    text="966-112884141"
                />
            </div>
        </div>
    );
};

export default ContactInfo;
