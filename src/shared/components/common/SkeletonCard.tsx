import React from "react";
import Skeleton from "./Skeleton";

interface SkeletonCardProps {
    className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl ${className}`}>
            {/* Image/Icon Placeholder */}
            <Skeleton height="180px" borderRadius="1rem" className="w-full" />

            <div className="flex flex-col gap-2">
                {/* Date/Category Placeholder */}
                <Skeleton width="40%" height="1.2rem" />

                {/* Title Placeholder */}
                <Skeleton width="90%" height="2rem" />
                <Skeleton width="70%" height="2rem" />
            </div>

            <div className="mt-auto flex justify-between items-center">
                {/* Action Button Placeholder */}
                <Skeleton width="100px" height="2.5rem" borderRadius="2rem" />
                {/* Secondary Info Placeholder */}
                <Skeleton width="40px" height="40px" borderRadius="50%" />
            </div>
        </div>
    );
};

export default SkeletonCard;
