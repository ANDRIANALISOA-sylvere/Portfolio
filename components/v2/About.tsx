"use client";
import Image from "next/image";
import React from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Code, Coffee } from "lucide-react";
import { Title } from "../ui/Title";
import Avatar from "../../public/images/avatar.png";

export const About = () => {
  return (
    <div className="px-16 mt-28 relative">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#CC66DA] to-[#FAEB92] rounded-full opacity-10 dark:opacity-20 blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-[#FAEB92] rounded-full opacity-20 dark:opacity-30 blur-xl"></div>
      
      <Title title="About Me" />
      
      {/* Contenu principal à deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start">
        
        {/* Colonne gauche - Avatar et Réseaux sociaux */}
        <div className="relative">
          {/* Conteneur Avatar */}
          <div className="relative mb-8 group">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Bordure décorative animée */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Avatar */}
              <div className="relative z-10 w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-2xl border border-white/20 dark:border-gray-600/20">
                <Image
                  src={Avatar}
                  alt="Joséphin Sylvère - Backend Developer"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                Available for work
              </div>
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-600/20 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
              ANDRIANALISOA Joséphin Sylvère
            </h3>
            
            {/* Détails personnels */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#CC66DA]" />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-[#CC66DA]" />
                <span>3+ years experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Code size={16} className="text-[#CC66DA]" />
                <span>Backend Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee size={16} className="text-[#CC66DA]" />
                <span>Coffee enthusiast</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-600/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
              Connect with me
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {/* GitHub */}
              <a 
                href="#" 
                className="group flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-[#CC66DA] hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} className="group-hover:animate-pulse" />
                <span className="font-medium text-sm">GitHub</span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="group flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-[#0077B5] hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="group flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-[#1DA1F2] hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Twitter size={20} className="group-hover:animate-pulse" />
                <span className="font-medium text-sm">Twitter</span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:contact@example.com" 
                className="group flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-[#FAEB92] hover:to-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                <span className="font-medium text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite - Contenu textuel */}
        <div className="space-y-8">
          {/* Présentation principale */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-600/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#CC66DA] to-[#FAEB92] rounded-lg flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              Who am I?
            </h3>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I&apos;m a passionate <span className="text-[#CC66DA] font-semibold">Backend Developer</span> with over 3 years of experience in building robust and scalable web applications. I specialize in creating efficient server-side solutions that power modern digital experiences.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My journey in software development began with a curiosity for how things work behind the scenes. Today, I work with technologies like <span className="text-[#CC66DA] font-semibold">Node.js, TypeScript, PostgreSQL, and NestJS</span> to create solutions that make a real impact.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next project.
              </p>
            </div>
          </div>

          {/* Compétences/Intérêts */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-600/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FAEB92] to-[#CC66DA] rounded-lg flex items-center justify-center">
                <Coffee size={20} className="text-white" />
              </div>
              What drives me?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🚀", title: "Innovation", desc: "Always exploring new technologies and methodologies" },
                { icon: "🎯", title: "Quality", desc: "Writing clean, maintainable, and efficient code" },
                { icon: "🤝", title: "Collaboration", desc: "Working with amazing teams to build great products" },
                { icon: "📚", title: "Learning", desc: "Continuous improvement and staying up-to-date" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gradient-to-r hover:from-[#CC66DA]/10 hover:to-[#FAEB92]/10 transition-all duration-300">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-[#CC66DA]/20 to-[#FAEB92]/20 dark:from-[#CC66DA]/30 dark:to-[#FAEB92]/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[#CC66DA]/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Let&apos;s work together!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#CC66DA] to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-[#CC66DA] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};