import React from "react";
import { useDirection } from "@/shared/hooks/useDirection";

interface CertificationLogoProps {
    src: string;
    title: string;
    subtitle: string;
}

const CertificationLogo = ({ src, title, subtitle }: CertificationLogoProps) => {
    const { dir } = useDirection();

    return (
        <div className="flex items-center gap-4 group logo-item" dir={dir}>
            <div className="w-16 h-12 flex items-center justify-center flex-shrink-0">
                <img
                    src={src}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                    {title}
                </span>
                <span className="text-xs text-white/50 leading-relaxed">
                    {subtitle}
                </span>
            </div>
        </div>
    );
};

export default CertificationLogo;
