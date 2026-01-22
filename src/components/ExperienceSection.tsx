import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-500" />
                    Software Developer
                  </CardTitle>
                  <p className="text-lg font-medium text-primary">Niketana</p>
                </div>
                <div className="flex flex-col sm:text-right gap-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Benagluru</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Gained valuable hands-on experience in backend development, working with modern technologies 
                  and contributing to real-world projects in a collaborative environment.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Developed robust backend solutions using Laravel framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Implemented CRUD operations and RESTful APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Collaborated effectively with frontend development teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Enhanced problem-solving skills and Git workflow proficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">CRUD Operations</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}