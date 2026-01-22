import { Card, CardContent } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">

                I am a versatile Software Developer with a strong foundation in <span className="text-foreground font-medium">Java</span> and <span className="text-foreground font-medium">Spring Boot</span>, 
                currently building scalable solutions at <span className="text-foreground font-medium">Niketana</span>. My expertise lies in backend development,
                database management with <span className="text-foreground font-medium">PostgreSQL</span>, and ensuring system reliability through end-to-end observability using <span className="text-foreground font-medium">Prometheus</span> and <span className="text-foreground font-medium">Grafana</span>. 
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Graduation Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">1.1</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}