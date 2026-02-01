"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
    labelKey: string;
    label: string;
    name: string;
    type?: string;
    placeholderKey: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    isTextArea?: boolean;
    shadow?: string;
}

const InputField = ({
    labelKey,
    label,
    name,
    type = "text",
    placeholderKey,
    placeholder,
    value,
    onChange,
    required = false,
    isTextArea = false,
    shadow,
}: InputFieldProps) => {
    const { t } = useTranslation();
    const { dir, mounted } = useDirection();

    return (
        <div className="flex flex-col items-end gap-2 w-full">
            <label htmlFor={name} className="text-[#5C6674] font-rubik text-sm font-bold w-full">
                {mounted ? t(labelKey, label) : label}
            </label>
            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={mounted ? t(placeholderKey, placeholder) : placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(
                        "w-full h-32 p-4 rounded bg-[#F9FAFB] border border-[#D1D5DC] text-[#5C6674] outline-none transition-all duration-300",
                        "focus:border-azm-purple focus:ring-4 focus:ring-azm-purple/10 hover:border-azm-purple/50 flex flex-row",
                        shadow
                    )}
                    dir={mounted ? dir : undefined}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={mounted ? t(placeholderKey, placeholder) : placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(
                        "w-full p-4 rounded bg-[#F9FAFB] border border-[#D1D5DC] text-[#5C6674] outline-none transition-all duration-300",
                        "focus:border-azm-purple focus:ring-4 focus:ring-azm-purple/10 hover:border-azm-purple/50 flex flex-row",
                        shadow
                    )}
                    dir={mounted ? dir : undefined}
                />
            )}
        </div>
    );
};

const ContactForm = () => {
    const { t } = useTranslation();
    const { dir, mounted } = useDirection();
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

    if (!mounted) {
        return null;
    }

    return (
        <div className="relative p-2 rounded-2xl border border-[#EDB4FF] overflow-hidden backdrop-blur-sm self-center lg:self-start w-full max-w-[592px]" dir={dir}
            style={{
                background: "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(115, 48, 136, 0.20) 0%, rgba(115, 48, 136, 0.04) 77.08%, rgba(115, 48, 136, 0.00) 100%), rgba(0, 8, 20, 0.16)"
            }}>
            <div className="bg-white p-8 rounded-lg flex flex-col gap-8">
                <h3 className="text-[#000F26] font-rubik text-xl lg:text-2xl font-medium leading-relaxed">
                    {t('contactForm.subtitle', 'يرجى تقديم المعلومات التالية، وسنقوم بتوصيلك بالشخص المناسب.')}
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <InputField
                        labelKey="contactForm.nameLabel"
                        label="الاسم"
                        name="name"
                        placeholderKey="contactForm.namePlaceholder"
                        placeholder="يرجي ادخال الاسم بالكامل هنا..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        labelKey="contactForm.emailLabel"
                        label="البريد الإلكتروني"
                        name="email"
                        type="email"
                        placeholderKey="contactForm.emailPlaceholder"
                        placeholder="يرجي ادخال بريدك الإلكتروني هنا..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        labelKey="contactForm.phoneLabel"
                        label="الهاتف"
                        name="phone"
                        type="tel"
                        placeholderKey="contactForm.phonePlaceholder"
                        placeholder="+000 00 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        shadow="shadow-[0_1px_2px_rgba(3,7,18,0.05)]"
                    />

                    <InputField
                        labelKey="contactForm.messageLabel"
                        label="الرسالة"
                        name="message"
                        isTextArea
                        placeholderKey="contactForm.messagePlaceholder"
                        placeholder="يرجي ادخال محتوى رسالتك هنا..."
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
                        <span>{t('contactForm.submitButton', 'ارسال')}</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
