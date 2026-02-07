import { useState } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

interface UseHoverEffectReturn {
    mousePosition: MousePosition;
    isHovered: boolean;
    handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    hoverStyle: React.CSSProperties;
}

export const useHoverEffect = (gradientSize: number = 200, gradientColor: string = 'rgba(208, 38, 238, 0.12)'): UseHoverEffectReturn => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverStyle: React.CSSProperties = {
        opacity: isHovered ? 1 : 0,
        background: `radial-gradient(${gradientSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
    };

    return {
        mousePosition,
        isHovered,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        hoverStyle,
    };
};