import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center md:justify-start space-x-2">
                <div className="animate-float">📧</div>
                <span>Get in Touch!</span>
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:shreyask750@gmail.com"
                  className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>shreyask750@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+917676996734"
                  className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>+91 7676996734</span>
                </a>
                
                <div className="flex items-center space-x-3 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center space-x-2">
                <div className="animate-float" style={{ animationDelay: '0.5s' }}>🌐</div>
                <span>Connect with Me!</span>
              </h3>
              
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/shreyask750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 
                           transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-white group-hover:animate-bounce" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/shreyas-k-731022286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 
                           transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:animate-bounce" />
                </a>
              </div>
            </div>

            {/* Fun Quote */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center md:justify-end space-x-2">
                <div className="animate-float" style={{ animationDelay: '1s' }}>💫</div>
                <span>Let's Build!</span>
              </h3>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <p className="text-white/90 leading-relaxed">
                  "Ready to contribute to amazing projects and build the future together! 
                  Let's connect and create something awesome! 🚀✨"
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <div className="flex items-center space-x-1 mb-4 md:mb-0" style={{ fontSize: "11px" }}>
                <span className="text-white/90">Credits -</span>
                <a 
                  href="https://github.com/SamparkBhol/StarterSpark" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-glow transition-colors underline font-semibold"
                >
                  Sampark Bhol
                </a>
              </div>
              
              <div className="text-white/70 text-sm">
                <p>© 2025 - Portfolio v7.0.6 | Built with React & Tailwind CSS</p>
              </div>
            </div>
            
            {/* Portfolio Credit */}
            <div className="text-center mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                <p className="text-white/80 text-sm">
                  🎯 <strong>Portfolio v7.0.6</strong> - Built with passion and modern web technologies! 
                  React, TypeScript, and Tailwind CSS ⚡✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
