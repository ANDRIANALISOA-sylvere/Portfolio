"use client";
import React, { useState } from "react";
import { Title } from "../ui/Title";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="sm:w-6" />,
      label: "Email",
      value: "josephinsylvere@gmail.com",
      link: "mailto:josephinsylvere@gmail.com",
    },
    {
      icon: <Phone size={20} className="sm:w-6" />,
      label: "Phone",
      value: "+261 34 39 478 44",
      link: "tel:+261343947844",
    },
    {
      icon: <MapPin size={20} className="sm:w-6" />,
      label: "Location",
      value: "Fianarantsoa, Madagascar",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      url: "https://github.com/ANDRIANALISOA-sylvere",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/josephin-sylvere",
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      url: "https://x.com/sylverejosephin",
    },
  ];

  return (
    <div className="px-4 sm:px-6 mt-20 mb-16 relative" id="contact">
      {/* Background decorative elements - reduced size */}
      <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-5 dark:opacity-10 blur-xl sm:blur-2xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#FAEB92] rounded-full opacity-10 dark:opacity-20 blur-lg sm:blur-xl"></div>

      <Title title="GET IN TOUCH" />

      {/* Responsive two column layout */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Left column - Contact Info */}
        <div className="space-y-8 sm:space-y-10">
          {/* Intro text */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Let&apos;s work together
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m always open to discussing new opportunities, creative
              projects, or just having a chat about technology and innovation.
            </p>
          </div>

          {/* Contact information */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-center gap-3 sm:gap-4">
                  <div className="text-[#CC66DA] dark:text-[#FAEB92] group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-[#CC66DA] dark:hover:text-[#FAEB92] transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Follow Me
            </h3>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-600 dark:text-gray-400 hover:text-[#CC66DA] dark:hover:text-[#FAEB92] hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Send me a message
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Success message */}
          {isSubmitted && (
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 text-sm sm:text-base bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 text-green-700 dark:text-green-300">
              <CheckCircle size={18} className="flex-shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 text-sm sm:text-base bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 text-red-700 dark:text-red-300">
              <AlertCircle size={18} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#CC66DA] dark:focus:border-[#FAEB92] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#CC66DA] dark:focus:border-[#FAEB92] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#CC66DA] dark:focus:border-[#FAEB92] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                placeholder="Project Collaboration"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#CC66DA] dark:focus:border-[#FAEB92] focus:outline-none resize-none transition-colors duration-300 text-sm sm:text-base"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className="cursor-pointer group flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-black font-medium rounded-full hover:shadow-lg hover:shadow-[#CC66DA]/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom decoration - simplified */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#CC66DA]/50 to-transparent"></div>
      </div>
    </div>
  );
};