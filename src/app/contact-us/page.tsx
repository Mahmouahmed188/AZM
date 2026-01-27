import React from "react";
import Image from "next/image";
import ContactForm from "@/features/contact-us/components/ContactForm";
import ContactInfo from "@/features/contact-us/components/ContactInfo";

export const metadata = {
    title: "Contact Us | AZM Saudi",
    description: "Get in touch with AZM Saudi for any inquiries or support.",
};

const ContactUsPage = () => {
    return (
        <section className="relative min-h-[1024px] w-full overflow-hidden bg-azm-dark pt-32 pb-20 px-6 lg:px-28">
            {/* Background with Map and Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-[1025px] overflow-hidden">
                    {/* Map Image */}
                    <div className="absolute -left-[1317px] -top-[81px] w-[4074px] h-[1188px]">
                        <Image
                            src="https://api.builder.io/api/v1/image/assets/TEMP/17758b38ebe561d9af7c82d9ab2f6e1834e68da4?width=2880"
                            alt="Map Background"
                            fill
                            className="object-cover opacity-50"
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background: "linear-gradient(270deg, #000814 0%, rgba(0, 8, 20, 0.72) 15.85%, rgba(0, 8, 20, 0.00) 50.13%, rgba(0, 8, 20, 0.72) 83.76%, #000814 100%)"
                        }}
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col lg:flex-row-reverse justify-between items-center lg:items-start gap-12 lg:gap-0 mt-10 md:mt-20">
                {/* Right Section: Title and Info */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <ContactInfo />
                </div>

                {/* Left Section: Form */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;
