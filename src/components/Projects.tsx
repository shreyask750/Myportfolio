import React, { useState } from 'react';
import { Rocket, ExternalLink, Github, BookOpen, Leaf, BarChart3, Star } from 'lucide-react';

const Projects = () => {
  const [hoveredPaper, setHoveredPaper] = useState(false);

  const projects = [
    {
      title: "Research Paper",
      description: "Published research in Elsevier journal on a novel routing algorithm for Wireless Sensor Networks (WSN)",
      emoji: "📚",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      points: [
        "Developed an energy-efficient algorithm capable of operating effectively in large-scale deployment areas",
        "Simulated and validated the algorithm across various topologies and node densities",
        "Demonstrated scalability and energy efficiency in diverse real-world scenarios"
      ],
      link: "https://www.sciencedirect.com/science/article/pii/S1877050925000596",
      isResearch: true
    },
    {
      title: "LeafGuard AI",
      description: "Built an AI-powered plant health diagnosis tool using computer vision to identify leaf diseases",
      emoji: "🌱",
      icon: Leaf,
      color: "text-green-500",
      bgColor: "bg-green-50",
      points: [
        "Integrated Google Maps API to provide users with real-time locations of nearby nurseries and gardening services",
        "Developed a responsive frontend with React and Tailwind, showcasing full-stack skills",
        "Enhanced agricultural awareness and early detection of plant issues using AI"
      ]
    },
    {
      title: "YouTube Predictive Analysis",
      description: "Built a Neural network model to predict subscriber count based on video metadata and performance metrics",
      emoji: "📊",
      icon: BarChart3,
      color: "text-red-500",
      bgColor: "bg-red-50",
      points: [
        "Applied a Random Forest Regressor on a second dataset to perform predictive analysis",
        "Identified key features influencing view count using advanced ML techniques",
        "Preprocessed large datasets, tuned hyperparameters, and evaluated models using metrics like RMSE and R²"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <Rocket className="w-8 h-8 text-primary animate-float" />
              <Star className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Cool Projects 🎯
            </h2>
            <p className="text-xl text-muted-foreground">
              Some awesome stuff I've built recently! ✨
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card-gradient p-6 rounded-2xl border-2 border-primary/20 animate-slide-in-right relative overflow-hidden group hover:border-accent/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => project.isResearch && setHoveredPaper(true)}
                onMouseLeave={() => project.isResearch && setHoveredPaper(false)}
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {project.emoji}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-full ${project.bgColor} group-hover:animate-bounce`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gradient">{project.title}</h3>
                  </div>

                  <p className="text-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.points.map((point, pointIndex) => (
                      <div 
                        key={pointIndex}
                        className="flex items-start space-x-2 group/point hover:bg-primary/5 p-2 rounded-lg transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 group-hover/point:animate-bounce"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  {project.isResearch && (
                    <div className="mt-4">
                      {hoveredPaper && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center space-x-2 text-sm animate-bounce-in"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>📖 Read Paper</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mt-4 flex space-x-3">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;