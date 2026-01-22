import { Button } from './ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import myRealProfilePic from '../assets/profile_photo.jpg'; // Ensure the correct file extension and path
import backgroundImage from '../assets/background_image.png';

// The original project referenced images exported from Figma via a custom
// `figma:asset/...` import scheme. Those assets are not present in this
// clone, so provide small inline SVG data-URI placeholders so the dev server
// can run. Replace these with real image files in `src/assets/` if available.
const profileImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480"><rect fill="%23e2e8f0" width="100%" height="100%" rx="40"/><circle cx="240" cy="180" r="90" fill="%23c7d2fe"/><rect x="120" y="300" width="240" height="90" rx="20" fill="%23cbd5e1"/></svg>';

const backgroundPattern =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="100%" height="100%" fill="%23f8fafc"/><circle cx="200" cy="200" r="120" fill="%23eef2ff" opacity="0.8"/><circle cx="1000" cy="600" r="160" fill="%23f3e8ff" opacity="0.7"/></svg>';

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <ImageWithFallback
          src={backgroundPattern}
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 animate-pulse">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-background" />
              </div>
              <ImageWithFallback
                src={myRealProfilePic}
                alt="Nirajan Chaudhary"
                className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Lingaraja Mandli
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4">
              Java | Backend Developer | Python
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Blending Java expertise, Python scripting, and rigorous testing to deliver high-performance applications.
          </p>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Wrap the button in an anchor tag to enable download */}
            <a 
              href="/Lingaraja__mandli.pdf" 
              download="Lingaraja_Mandli_Resume.pdf"
              className="no-underline"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[160px]"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>

            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-2 hover:bg-accent hover:border-accent-foreground transition-all duration-300 transform hover:scale-105 min-w-[160px]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}