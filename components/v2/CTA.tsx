"use client";
import React, { useRef, useEffect } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import CircularText from "../ui/CircularText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const circularTextRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du container principal
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animation séquentielle des éléments
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.2)",
        })
        .from(textRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.2)",
        }, "-=0.4")
        .from(buttonContainerRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.2)",
        }, "-=0.4")
        .from(linksRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.2)",
        }, "-=0.4");

      // Animation pulsante du bouton après apparition
      gsap.to(buttonContainerRef.current, {
        scale: 1.02,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      });

      // Animation du CircularText (si visible)
      if (circularTextRef.current) {
        gsap.from(circularTextRef.current, {
          opacity: 0,
          rotation: -180,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animation des éléments flottants
      gsap.to(".floating-element", {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      id="cta"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CC66DA]/10 to-[#FAEB92]/10 dark:from-[#CC66DA]/5 dark:to-[#FAEB92]/5 -z-10"></div>

      {/* Floating elements */}
      <div className="floating-element absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#CC66DA] rounded-full opacity-10 blur-xl sm:blur-2xl -z-10"></div>
      <div className="floating-element absolute bottom-10 right-4 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-[#FAEB92] rounded-full opacity-10 blur-xl sm:blur-2xl -z-10"></div>

      {/* CircularText */}
      <div 
        ref={circularTextRef}
        className="hidden lg:block absolute left-10 top-1/2 transform -translate-y-1/2 w-16 h-16"
      >
        <CircularText
          text="SYLVERE*BACKEND*DEV*"
          onHover="pause"
          spinDuration={20}
          className="text-[#FAEB92] w-16 h-16 monument dark:text-[#CC66DA] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 
            ref={headingRef}
            className="text-xl sm:text-2xl md:text-3xl monument font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
          >
            Ready to bring your project to life?
          </h2>

          <p 
            ref={textRef}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            Whether you have a question or a project in mind, I&apos;d love to
            hear from you and discuss how we can work together.
          </p>

          <div 
            ref={buttonContainerRef}
            className="mb-8 sm:mb-10"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer group bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black shadow-lg hover:shadow-xl transition-all text-sm sm:text-base hover:scale-105"
            >
              Let&apos;s discuss your project
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div 
            ref={linksRef}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
          >
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