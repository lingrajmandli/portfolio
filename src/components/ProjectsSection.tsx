import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Heart, Briefcase, User } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
    title: "Niketana Marketplace Platform",
    type: "Professional Experience",
    description: "Developed a scalable multi-role construction marketplace supporting users, sellers, and service providers. Features include quoting workflows for material requests, automated Python-based data scraping pipelines, and end-to-end system observability.",
    technologies: ["Spring Boot", "PostgreSQL", "Elasticsearch", "Python", "Prometheus", "Grafana", "pytest"],
    icon: User,
    color: "text-green-500"
  },
    {
    title: "Cloud Document Uploader",
    type: "Cloud Infrastructure Project",
    description: "Designed and deployed a Spring Boot backend on Google Cloud VM with integrated GCS document storage and Docker-based containerization.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Google Cloud (CDN, Storage)", "Docker"],
    icon: User,
    color: "text-green-500"
  },
  {
    title: "E-Commerce Data Extraction Pipeline",
    type: "Automation & Scripting",
    description: "Built robust Python-based scraping automations to extract structured data from e-commerce and manufacturer websites. Implemented comprehensive pytest integration tests to validate the scraping pipelines and ensure data processing accuracy.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "pytest", "Data Scraping"],
          icon: User,
    color: "text-green-500"
  }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-6 w-6 ${project.color}`} />
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}