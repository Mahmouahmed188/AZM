import React from "react";
import { LucideIcon } from "lucide-react";
import { useHoverEffect } from "@/shared/hooks/useHoverEffect";

interface ServiceCardProps {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  t: (key: string, fallback?: string) => string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  titleKey,
  descriptionKey,
  t,
}) => {
  const { handleMouseMove, handleMouseEnter, handleMouseLeave, hoverStyle } =
    useHoverEffect();

  return (
    <div
      className="group relative h-[340px] w-full overflow-hidden rounded-xl border border-white/5 bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(248,224,255,0.0256)_0%,rgba(248,224,255,0.0064)_77.08%,rgba(255,255,255,0)_100%)] p-8 backdrop-blur-[40px] transition-all duration-300 hover:border-purple-500/30"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/services/Background.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={hoverStyle}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(167, 51, 204, 0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-20 flex h-full flex-col justify-between">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-[#E38CFF] shadow-[0_0_20px_rgba(227,140,255,0.2)]">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div>
          <h3 className="mb-4 text-[30px] font-medium leading-[36px] text-white">
            {t(titleKey)}
          </h3>
          <p className="text-[18px] font-normal leading-[24px] text-white/80 line-clamp-3">
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
};
