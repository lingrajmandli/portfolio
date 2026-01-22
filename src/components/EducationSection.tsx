import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

export function EducationSection() {
  // 1. Define your education data here
  const educationList = [
    {
      degree: "Master Of Computer Application",
      school: "Harsha Institute Of Management Studies",
      location: "Bangalore",
      year: "2023 - 2024",
      status: "Completed",
      description: "Specialized in advanced software development and system architecture. Final project focused on a comprehensive Telemedical Platform.",
      borderColor: "border-l-green-500", // Green for Masters
      iconColor: "text-green-500",
      coursework: ["Software Engineering", "Web Development", "Database Management"]
    },
    {
      degree: "Bachelor Of Computer Applications",
      school: "Your University Name", // Replace with actual school
      location: "City, State",      // Replace with actual location
      year: "2020 - 2023",
      status: "Completed",
      description: "Foundation in computer science principles, programming languages, and algorithm design.",
      borderColor: "border-l-blue-500", // Blue for Bachelors
      iconColor: "text-blue-500",
      coursework: ["Data Structures", "C++ / Java", "Operating Systems"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col gap-8">
            
            {educationList.map((edu, index) => (
              // The Card is now INSIDE the map loop, creating one card per item
              <Card 
                key={index} 
                className={`shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 ${edu.borderColor}`}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    
                    {/* Left Side */}
                    <div>
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <GraduationCap className={`h-6 w-6 ${edu.iconColor}`} />
                        {edu.degree}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side */}
                    <div className="flex flex-col sm:text-right">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                        {edu.status}
                      </div>
                    </div>

                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <Badge key={i} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
    </section>
  );
}


// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

// export function EducationSection() {
//   return (
//     <section id="education" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Education
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
//           </div>

//           <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
//             <CardHeader>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                 <div>
//                   <CardTitle className="text-xl mb-2 flex items-center gap-2">
//                     <GraduationCap className="h-5 w-5 text-green-500" />
//                     Master Of Computer Application
//                   </CardTitle>
//                   <div className="space-y-1">
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Building2 className="h-4 w-4" />
//                       <span>Harsha Institute Of Management Studies</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <MapPin className="h-4 w-4" />
//                       <span>Bangalore</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:text-right">
//                   <div className="flex items-center gap-1 text-muted-foreground">
//                     <Calendar className="h-4 w-4" />
//                     <span>2023 - 2024</span>
//                   </div>
//                   <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
//                     Completed 
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {/* <p className="text-muted-foreground leading-relaxed">
//                   Currently pursuing a comprehensive degree in Computing with focus on software development, 
//                   artificial intelligence, and backend systems. The program combines theoretical knowledge 
//                   with practical application through hands-on projects and industry-relevant coursework.
//                 </p> */}
                
//                 {/* <div>
//                   <h4 className="font-semibold mb-3">Key Areas of Study:</h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Software Engineering</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Database Systems</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Web Development</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Artificial Intelligence</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Computer Networks</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Project Management</span>
//                     </div>
//                   </div>
//                 </div> */}

//                 {/* <div className="bg-muted/50 rounded-lg p-4 mt-6"> */}
//                   <p className="text-sm text-muted-foreground">
//                     <span className="font-semibold text-foreground">Final Year Project:</span> Developing a comprehensive 
//                     Telemedical Platform that demonstrates the practical application of learned concepts in 
//                     web development, database management, and user experience design.
//                   </p>
//                 {/* </div> */}
//               </div>

              


//             </CardContent>
//           </Card>
//         </div>

//         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
//             <CardHeader>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                 <div>
//                   <CardTitle className="text-xl mb-2 flex items-center gap-2">
//                     <GraduationCap className="h-5 w-5 text-green-500" />
//                     Master Of Computer Application
//                   </CardTitle>
//                   <div className="space-y-1">
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Building2 className="h-4 w-4" />
//                       <span>Harsha Institute Of Management Studies</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <MapPin className="h-4 w-4" />
//                       <span>Bangalore</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:text-right">
//                   <div className="flex items-center gap-1 text-muted-foreground">
//                     <Calendar className="h-4 w-4" />
//                     <span>2023 - 2024</span>
//                   </div>
//                   <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
//                     Completed 
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {/* <p className="text-muted-foreground leading-relaxed">
//                   Currently pursuing a comprehensive degree in Computing with focus on software development, 
//                   artificial intelligence, and backend systems. The program combines theoretical knowledge 
//                   with practical application through hands-on projects and industry-relevant coursework.
//                 </p> */}
                
//                 {/* <div>
//                   <h4 className="font-semibold mb-3">Key Areas of Study:</h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Software Engineering</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Database Systems</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Web Development</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Artificial Intelligence</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Computer Networks</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full" />
//                       <span>Project Management</span>
//                     </div>
//                   </div>
//                 </div> */}

//                 {/* <div className="bg-muted/50 rounded-lg p-4 mt-6"> */}
//                   <p className="text-sm text-muted-foreground">
//                     <span className="font-semibold text-foreground">Final Year Project:</span> Developing a comprehensive 
//                     Telemedical Platform that demonstrates the practical application of learned concepts in 
//                     web development, database management, and user experience design.
//                   </p>
//                 {/* </div> */}
//               </div>

              


//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// }