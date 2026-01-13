"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-16 bg-black text-white border-t border-azm-dark/50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-3xl font-bold mb-6">AZM</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering the future through digital trust, innovation, and strategic partnerships.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-azm-blue-600">Company</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Vision & Mission</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Our Team</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-azm-blue-600">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">Fintech</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Software Dev</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Consulting</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-azm-blue-600">Contact</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Riyadh, Saudi Arabia</li>
                        <li>info@azm.sa</li>
                        <li>+966 11 000 0000</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© {new Date().getFullYear()} AZM Saudi Company. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                    <span className="cursor-pointer hover:text-white">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
