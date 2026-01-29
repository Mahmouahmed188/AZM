"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "./Skeleton";

interface LazyImageProps extends ImageProps {
    containerClassName?: string;
    showSkeleton?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
    containerClassName = "",
    showSkeleton = true,
    alt,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            <AnimatePresence>
                {!isLoaded && showSkeleton && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-10"
                    >
                        <Skeleton height="100%" width="100%" borderRadius="inherit" />
                    </motion.div>
                )}
            </AnimatePresence>

            <Image
                {...props}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`${props.className || ""} transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
};

export default LazyImage;
