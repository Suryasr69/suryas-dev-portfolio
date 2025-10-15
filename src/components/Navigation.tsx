import { Home, FileText, Briefcase, Mail, Code, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/skills", label: "Skills", icon: Code },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ff6b35",
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none" as const,
        random: true,
        straight: false,
        outModes: {
          default: "out" as const,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ff6b35",
        opacity: 0.2,
        width: 1,
      },
    },
    detectRetina: true,
  };

  return (
    <nav className="mb-8 lg:mb-12 animate-fade-in relative">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center">
        <div className="inline-flex bg-card/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg gap-2 relative z-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 animate-pulse opacity-20" />
                )}
                <Icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg relative z-10">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-card/95 backdrop-blur-sm rounded-2xl p-2 shadow-lg animate-fade-in relative z-10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden mb-2",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 animate-pulse opacity-20" />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
