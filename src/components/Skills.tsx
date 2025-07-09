import React from 'react';
import { Code, Database, Cloud, Laptop } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      skills: ["C", "Java", "C++", "Python"],
      emoji: "💻"
    },
    {
      title: "Front End",
      icon: Laptop,
      color: "text-purple-500",
      bgColor: "bg-purple-500",
      skills: ["HTML", "CSS", "JavaScript"],
      emoji: "🎨"
    },
    {
      title: "Back End",
      icon: Cloud,
      color: "text-green-500",
      bgColor: "bg-green-500",
      skills: ["Node.js"],
      emoji: "⚙️"
    },
    {
      title: "Database",
      icon: Database,
      color: "text-orange-500",
      bgColor: "bg-orange-500",
      skills: ["MySQL", "OracleSQL", "MongoDB"],
      emoji: "🗄️"
    }
  ];

  const certification = {
    title: "AWS Certified Cloud Practitioner",
    emoji: "☁️",
    color: "text-yellow-500"
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <Code className="w-8 h-8 text-primary animate-float" />
              <Database className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              My Tech Stack 🛠️
            </h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I love working with! ⚡
            </p>
          </div>

          {/* Beautiful Skills Table */}
          <div className="space-y-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="card-gradient rounded-2xl border-2 border-primary/20 overflow-hidden animate-slide-in-right"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Table Header */}
                <div className={`${category.bgColor} p-6 flex items-center space-x-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.emoji} {category.title}
                    </h3>
                    <p className="text-white/80">Technologies I work with</p>
                  </div>
                </div>
                
                {/* Table Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gradient-card p-4 rounded-xl border border-primary/10 hover:border-accent/30 
                                   transition-all duration-300 hover:scale-105 hover:shadow-lg group text-center"
                        style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        <div className="font-semibold text-foreground group-hover:text-gradient transition-all">
                          {skill}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {category.title.toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <div className="text-center">
            <div className="card-gradient p-8 rounded-2xl border-2 border-primary/20 max-w-2xl mx-auto animate-bounce-in">
              <div className="mb-6">
                <div className="text-6xl mb-4 animate-float">{certification.emoji}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
                  Certification Achieved! 🎉
                </h3>
                <div className="bg-gradient-primary text-white px-8 py-4 rounded-full inline-block font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow">
                  {certification.title}
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                Ready to leverage cloud technologies to build scalable solutions! ☁️✨
              </p>
            </div>
          </div>

          {/* Fun Skills Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center card-gradient p-6 rounded-xl">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-gradient">8+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="text-center card-gradient p-6 rounded-xl">
              <div className="text-3xl mb-2">💡</div>
              <div className="text-2xl font-bold text-gradient">3+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center card-gradient p-6 rounded-xl">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-gradient">2+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center card-gradient p-6 rounded-xl">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gradient">1</div>
              <div className="text-sm text-muted-foreground">Research Publication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;