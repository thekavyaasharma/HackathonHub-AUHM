import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">An Ultimate Hackathon Matrix</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="nav-home"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="nav-hackathons"
            >
              Hackathons
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="nav-about"
            >
              About
            </a>
          </nav>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg hover:bg-accent transition-colors"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
