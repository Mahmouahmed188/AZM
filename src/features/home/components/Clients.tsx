"use client";

import React from "react";

const Clients = () => {
    return (
        <section className="w-full py-20 bg-azm-offwhite text-azm-blue-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">
                    Our Trusted Clients
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Add client logos here */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-24 bg-white/50 rounded-xl border border-azm-blue-900/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-gray-400 font-bold opacity-50">Client {i}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <p className="text-xl font-medium text-azm-blue-900/60">
                        +230 Success Partners
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Clients;