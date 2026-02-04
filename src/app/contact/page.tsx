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
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-azm-dark pt-15 pb-20 px-6 lg:px-28">
      {/* Background with Map and Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[1025px] overflow-hidden">
          {/* Map Image */}
          <Image
            src="/Map Mask.png"
            alt="Map Background"
            fill
            className="object-cover opacity-50"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col lg:flex-row-reverse justify-between items-center gap-12 lg:gap-0 mt-10 md:mt-20">
        <div className="w-full lg:w-1/2 flex justify-start">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2 flex ">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
