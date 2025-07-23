"use client";
import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <section className="relative md:py-8 lg:py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CC66DA]/10 to-[#FAEB92]/10 dark:from-[#CC66DA]/5 dark:to-[#FAEB92]/5 -z-10"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#CC66DA] rounded-full opacity-10 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FAEB92] rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl monument font-bold text-gray-900 dark:text-white mb-4">
            Ready to bring your project to life?
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you have a question or a project in mind, I&apos;d love to
            hear from you and discuss how we can work together.
          </p>

          <div className="mb-10">
            <Button
              size="lg"
              className="cursor-pointer group bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black shadow-lg hover:shadow-xl transition-all"
            >
              Let&apos;s discuss your project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="mailto:josephinsylvere@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
            >
              <Mail className="h-4 w-4" />
              josephinsylvere@gmail.com
            </a>

            <a
              href="tel:+261343947844"
              className="flex items-center justify-center gap-2 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors"
            >
              <Phone className="h-4 w-4" />
              +261 34 39 478 44
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};