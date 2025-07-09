import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

const Summary = () => {
  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-float" />
              <Heart className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
              <Star className="w-8 h-8 text-secondary animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me ✨
            </h2>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-pulse-glow">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Enthusiastic and motivated Computer Engineering graduate with a 
                <span className="text-gradient font-semibold"> strong passion for coding</span>, 
                software development, and problem-solving. Eager to contribute to a forward-thinking 
                organization that values innovation and learning. 
                <span className="text-gradient font-semibold"> Seeking opportunities</span> that offer 
                hands-on experience, professional growth, and the chance to make meaningful 
                contributions to both the team and the industry.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-gradient p-6 rounded-xl text-center group">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🎯</div>
              <h3 className="text-xl font-bold text-gradient mb-2">Passionate</h3>
              <p className="text-muted-foreground">Love building cool stuff and solving problems!</p>
            </div>
            
            <div className="card-gradient p-6 rounded-xl text-center group">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🚀</div>
              <h3 className="text-xl font-bold text-gradient mb-2">Innovative</h3>
              <p className="text-muted-foreground">Always exploring new technologies and ideas!</p>
            </div>
            
            <div className="card-gradient p-6 rounded-xl text-center group">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🤝</div>
              <h3 className="text-xl font-bold text-gradient mb-2">Team Player</h3>
              <p className="text-muted-foreground">Ready to contribute and grow with amazing teams!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">💫</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🌟</div>
    </section>
  );
};

export default Summary;