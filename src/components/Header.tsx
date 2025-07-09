import React from 'react';
import { Code, Terminal, Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* VSCode-style background */}
      <div className="absolute inset-0 vscode-bg">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-16 bg-vscode-sidebar border-r border-vscode-text/20">
            <div className="p-3 space-y-3">
              <div className="w-6 h-6 bg-vscode-keyword/30 rounded"></div>
              <div className="w-6 h-6 bg-vscode-string/30 rounded"></div>
              <div className="w-6 h-6 bg-accent/30 rounded"></div>
            </div>
          </div>
          
          {/* Code editor area */}
          <div className="flex-1 p-6">
            <div className="text-vscode-text font-mono text-sm space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-vscode-comment">portfolio.js</span>
              </div>
              
              <div className="space-y-1 text-xs md:text-sm">
                <div><span className="text-vscode-keyword">const</span> <span className="text-vscode-text">developer</span> = {"{"}</div>
                <div className="ml-4"><span className="text-vscode-string">"name"</span>: <span className="text-vscode-string">"Shreyas Karthigeyan"</span>,</div>
                <div className="ml-4"><span className="text-vscode-string">"role"</span>: <span className="text-vscode-string">"junior dev"</span>,</div>
                <div className="ml-4"><span className="text-vscode-string">"location"</span>: <span className="text-vscode-string">"Bangalore, India"</span>,</div>
                <div className="ml-4"><span className="text-vscode-string">"passion"</span>: <span className="text-vscode-string">"Building cool stuff!"</span>,</div>
                <div className="ml-4"><span className="text-vscode-string">"experience"</span>: [<span className="text-vscode-string">"SAP"</span>, <span className="text-vscode-string">"DevOps"</span>, <span className="text-vscode-string">"AI"</span>]</div>
                <div>{"}"} ;</div>
                <div className="mt-4"><span className="text-vscode-comment">// Ready to create amazing things! 🚀</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-hero/90">
        <div className="text-center space-y-8 p-8 animate-bounce-in">
          <div className="space-y-4">
            <div className="flex justify-center space-x-4 mb-6">
              <Code className="w-8 h-8 text-primary-glow animate-float" />
              <Terminal className="w-8 h-8 text-secondary animate-float" style={{ animationDelay: '0.5s' }} />
              <Coffee className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-pulse-glow">
              Shreyas Karthigeyan
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">
              Enthusiastic Software Developer 🚀
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30 max-w-md mx-auto">
              <p className="text-foreground font-medium">
                📍 Bangalore, Karnataka, India
              </p>
              <p className="text-muted-foreground mt-2">
                Building the future, one line of code at a time ✨
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:shreyask750@gmail.com" 
              className="btn-primary inline-flex items-center space-x-2 animate-pulse-glow"
            >
              <span>💌 Get in Touch</span>
            </a>
            
            <a 
              href="https://github.com/shreyask750" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-white/30 
                         hover:bg-white/30 transition-all duration-300 hover:scale-105 font-semibold"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements for extra beginner flair */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">⭐</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>🎯</div>
      <div className="absolute top-1/3 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💫</div>
    </header>
  );
};

export default Header;