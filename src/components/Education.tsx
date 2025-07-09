import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Vellore Institute of Technology",
      location: "Vellore, TN",
      year: "2026",
      grade: "8.86 CGPA",
      emoji: "🎓",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      degree: "CBSE 12th",
      institution: "National Public School",
      location: "Bangalore, KA",
      year: "2022",
      grade: "92.6%",
      emoji: "📚",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      degree: "CBSE 10th",
      institution: "National Public School",
      location: "Bangalore, KA",
      year: "2020",
      grade: "95.8%",
      emoji: "🏆",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary animate-float" />
              <Trophy className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Education Journey 🎓
            </h2>
            <p className="text-xl text-muted-foreground">
              Learning and growing every step of the way! 📚
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="card-gradient p-8 rounded-2xl border-2 border-primary/20 animate-slide-in-right relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {edu.emoji}
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-full ${edu.bgColor} group-hover:animate-bounce`}>
                        <BookOpen className={`w-6 h-6 ${edu.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gradient group-hover:scale-105 transition-transform">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground ml-16">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">📍 {edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">📅 {edu.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <div className="bg-gradient-primary text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement callout */}
          <div className="mt-12 text-center">
            <div className="card-gradient p-8 rounded-2xl border-2 border-accent/30 max-w-2xl mx-auto animate-bounce-in">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-accent animate-pulse-glow" />
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-3">
                Consistent Academic Excellence! 🌟
              </h3>
              <p className="text-muted-foreground">
                Maintaining strong academic performance throughout my educational journey, 
                with a focus on practical learning and real-world applications! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;