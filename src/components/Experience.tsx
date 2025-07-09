import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SAP and ERP Functional Intern",
      company: "Hansai IT Solutions",
      period: "June 2025 - Present",
      location: "Remote",
      points: [
        "Acquired hands-on experience with the SAP MM module, focusing on end-to-end procurement processes",
        "Improved supply chain efficiency by streamlining purchase orders and inventory control workflows",
        "Managed and maintained master data to support accurate and timely purchasing operations"
      ],
      emoji: "💼"
    },
    {
      title: "DevOps and Automation Intern",
      company: "DigitalXC",
      period: "June 2024 - July 2024",
      location: "Remote",
      points: [
        "Worked on AWS and Ansible under the DevOps and Automation team during the summer of 2024",
        "Underwent training on AWS, Ansible and Terraform and performed tasks on various use-cases",
        "Automated infrastructure provisioning and configuration management tasks using Ansible playbooks and Terraform modules to enhance deployment efficiency"
      ],
      emoji: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-bounce-in">
            <div className="flex justify-center space-x-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary animate-float" />
              <Award className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Work Experience 💪
            </h2>
            <p className="text-xl text-muted-foreground">
              My journey in the tech world so far! 🚀
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-gradient p-8 rounded-2xl border-2 border-primary/20 animate-slide-in-right relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {exp.emoji}
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                        {exp.emoji} {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-primary mb-2">{exp.company}</p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <div 
                        key={pointIndex}
                        className="flex items-start space-x-3 group/point hover:bg-primary/5 p-3 rounded-lg transition-colors"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover/point:animate-bounce"></div>
                        <p className="text-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
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

export default Experience;