import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Database, Wrench, Globe, Brain } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-blue-500",
      skills: ["java","python"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "text-green-500",
      skills: ["Spring Boot", "MVC Architecture", "REST APIs", "Jpa", "Hibernate"]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-purple-500",
      skills: ["Postgres"]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "text-orange-500",
      skills: ["GitLab", "GitHub", "Postman", "VS Code", "IntelliJ IDEA","Dbeaver"]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "text-red-500",
      skills: ["Object-Oriented Programming", "CRUD Operations", "Automation Scripts", "API Development"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="hover:bg-accent transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Professional Strengths</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Problem Solving</Badge>
                  <Badge className="bg-purple-600 hover:bg-purple-700 text-white">Research Skills</Badge>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Team Collaboration</Badge>
                  <Badge className="bg-orange-600 hover:bg-orange-700 text-white">Project Management</Badge>
                  <Badge className="bg-red-600 hover:bg-red-700 text-white">Fast Learning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}