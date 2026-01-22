import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>©2026 Lingaraja Mandli</span>
            {/* <Heart className="h-4 w-4 text-red-500 fill-current" /> */}
            {/* <span>and React</span> */}
          </div>
          {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button className="hover:text-foreground transition-colors">
              Terms of Service
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}