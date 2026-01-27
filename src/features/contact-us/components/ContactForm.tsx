"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    isTextArea?: boolean;
    shadow?: string;
}

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    isTextArea = false,
    shadow,
}: InputFieldProps) => {
    return (
        <div className="flex flex-col items-end gap-2 w-full">
            <label htmlFor={name} className="text-[#5C6674] font-rubik text-sm font-bold text-right w-full">
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(
                        "w-full h-32 p-4 rounded bg-[#F9FAFB] border border-[#D1D5DC] text-right text-[#5C6674] outline-none transition-all duration-300",
                        "focus:border-azm-purple focus:ring-4 focus:ring-azm-purple/10 hover:border-azm-purple/50 flex flex-row-reverse",
                        shadow
                    )}
                    dir="rtl"
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(
                        "w-full p-4 rounded bg-[#F9FAFB] border border-[#D1D5DC] text-right text-[#5C6674] outline-none transition-all duration-300",
                        "focus:border-azm-purple focus:ring-4 focus:ring-azm-purple/10 hover:border-azm-purple/50 flex flex-row-reverse",
                        shadow
                    )}
                    dir="rtl"
                />
            )}
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add logic here
    };

    return (
        <div className="relative p-2 rounded-2xl border border-[#EDB4FF] overflow-hidden backdrop-blur-sm self-center lg:self-start w-full max-w-[592px]"
            style={{
                background: "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(115, 48, 136, 0.20) 0%, rgba(115, 48, 136, 0.04) 77.08%, rgba(115, 48, 136, 0.00) 100%), rgba(0, 8, 20, 0.16)"
            }}>
            <div className="bg-white p-8 rounded-lg flex flex-col gap-8">
                <h3 className="text-[#000F26] font-rubik text-xl lg:text-2xl font-medium text-right leading-relaxed">
                    يرجى تقديم المعلومات التالية، وسنقوم بتوصيلك بالشخص المناسب.
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <InputField
                        label="الاسم"
                        name="name"
                        placeholder="يرجي ادخال الاسم بالكامل هنا..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        label="البريد الإلكتروني"
                        name="email"
                        type="email"
                        placeholder="يرجي ادخال بريدك الإلكتروني هنا..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        label="الهاتف"
                        name="phone"
                        type="tel"
                        placeholder="+000 00 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        label="الرسالة"
                        name="message"
                        isTextArea
                        placeholder="يرجي ادخال محتوي رسالتك هنا..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        shadow="shadow-[0_1px_2px_rgba(10,13,18,0.05)]"
                    />

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 w-full py-5 bg-[#000F26] rounded text-white font-rubik font-medium text-lg hover:bg-[#000F26]/90 transition-all duration-300 active:scale-[0.98]"
                    >
                        <Send className="w-5 h-5 -rotate-90 pointer-events-none" />
                        <span>ارسال</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
