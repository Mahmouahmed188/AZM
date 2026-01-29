"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    startLoading: () => void;
    stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, startLoading, stopLoading }}>
            {children}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-azm-dark/60 backdrop-blur-sm"
                        role="status"
                        aria-busy="true"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-4 border-t-azm-gold border-r-transparent border-b-transparent border-l-transparent rounded-full"
                                />
                            </div>
                            <span className="text-white text-sm font-tajawal animate-pulse">جاري التحميل...</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
