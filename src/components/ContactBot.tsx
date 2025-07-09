import React, { useState } from 'react';
import { Bot, MessageCircle, RefreshCw, Mail, Github, ExternalLink } from 'lucide-react';

const ContactBot = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [response, setResponse] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  const prompts = [
    {
      id: 'github',
      question: "What's your GitHub account?",
      response: "You can find all my projects and code on GitHub! Check out my repositories at github.com/shreyask750 🐙✨ I love sharing my work and contributing to open source!"
    },
    {
      id: 'email',
      question: "What's your email?",
      response: "You can reach me at shreyask750@gmail.com! 📧 I'd love to hear from you - whether it's about opportunities, collaborations, or just tech chat! ✨"
    },
    {
      id: 'languages',
      question: "What programming languages do you know?",
      response: "I work with C, Java, C++, Python for programming! 💻 For web development, I use HTML, CSS, JavaScript, and Node.js. Plus I work with MySQL, OracleSQL, and MongoDB for databases! 🚀"
    }
  ];

  const handlePromptClick = (prompt: typeof prompts[0]) => {
    setSelectedPrompt(prompt.question);
    setIsTyping(true);
    setResponse('');

    // Simulate typing effect
    setTimeout(() => {
      setIsTyping(false);
      setResponse(prompt.response);
    }, 1500);
  };

  const resetChat = () => {
    setSelectedPrompt(null);
    setResponse('');
    setIsTyping(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <Bot className="w-8 h-8 text-primary animate-float" />
              <MessageCircle className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Chat with ShreyasBot 🤖
            </h2>
            <p className="text-xl text-muted-foreground">
              Ask me anything! I'm here to help you learn more about Shreyas! ✨
            </p>
          </div>

          <div className="card-gradient p-8 rounded-2xl border-2 border-primary/20 shadow-xl">
            {!selectedPrompt ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4 animate-float">🤖</div>
                  <p className="text-lg text-muted-foreground">
                    Hi there! I'm ShreyasBot! Click on any question below to get started! 👋
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => handlePromptClick(prompt)}
                      className="p-4 bg-gradient-secondary rounded-xl border-2 border-primary/20 hover:border-accent/50 
                               transition-all duration-300 hover:scale-105 hover:shadow-lg text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-accent rounded-full group-hover:animate-bounce"></div>
                        <span className="font-semibold text-foreground">{prompt.question}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* User Question */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl rounded-tr-none max-w-xs">
                    <p className="font-medium">{selectedPrompt}</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl rounded-tl-none max-w-lg">
                      {isTyping ? (
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      ) : (
                        <p className="leading-relaxed animate-bounce-in">{response}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {response && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
                    <button
                      onClick={resetChat}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Ask Another Question</span>
                    </button>
                    
                    <div className="flex gap-3 justify-center">
                      <a 
                        href="mailto:shreyask750@gmail.com"
                        className="bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:scale-105 
                                 transition-all duration-300 inline-flex items-center space-x-2 font-semibold"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Me</span>
                      </a>
                      
                      <a 
                        href="https://github.com/shreyask750"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-foreground text-background px-4 py-2 rounded-lg hover:scale-105 
                                 transition-all duration-300 inline-flex items-center space-x-2 font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBot;