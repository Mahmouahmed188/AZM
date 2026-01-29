"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
    className = "",
    width,
    height,
    borderRadius
}) => {
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={`bg-white/10 overflow-hidden relative ${className}`}
            style={{
                width: width ?? "100%",
                height: height ?? "1rem",
                borderRadius: borderRadius ?? "0.5rem"
            }}
            role="status"
            aria-busy="true"
        >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </motion.div>
    );
};

export default Skeleton;
