"use client";
import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

export const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CC66DA]/10 to-[#FAEB92]/10 dark:from-[#CC66DA]/5 dark:to-[#FAEB92]/5 -z-10"></div>

      {/* Floating elements - reduced size for mobile */}
      <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#CC66DA] rounded-full opacity-10 blur-xl sm:blur-2xl -z-10"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-[#FAEB92] rounded-full opacity-10 blur-xl sm:blur-2xl -z-10"></div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl monument font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Ready to bring your project to life?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            Whether you have a question or a project in mind, I&apos;d love to
            hear from you and discuss how we can work together.
          </p>

          <div className="mb-8 sm:mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer group bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Let&apos;s discuss your project
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <a
              href="mailto:josephinsylvere@gmail.com"
              className="flex items-center justify-center gap-1 sm:gap-2 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              josephinsylvere@gmail.com
            </a>

            <a
              href="tel:+261343947844"
              className="flex items-center justify-center gap-1 sm:gap-2 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              +261 34 39 478 44
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};