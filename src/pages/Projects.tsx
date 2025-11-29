import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import todoApp from "@/assets/todo-app.jpg";
import stopwatchApp from "@/assets/stopwatch-app.jpg";
import calculatorApp from "@/assets/calculator-app.jpg";
import iplClone from "@/assets/ipl-clone.jpg";
// import web from "@/assets/web.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Todo List App",
      category: "App Development",
      description: "A modern task management application with intuitive UI and smooth animations.",
      image: todoApp,
      github: "https://github.com/Suryasr69/todo",
    },
    {
      title: "Stopwatch",
      category: "Web Development",
      description: "Digital stopwatch with precise timing and clean interface design.",
      image: stopwatchApp,
      github: "https://github.com/Suryasr69/stopwatch",
    },
    {
      title: "Calculator",
      category: "App Development",
      description: "Professional calculator application with modern design and smooth interactions.",
      image: calculatorApp,
      github: "https://github.com/Suryasr69/calculator",
    },
  
    
    {
      title: " E COMMERCE WEBSITE",
      category: "Web Development",
      description: "A fully functional e-commerce website with product browsing, cart system, and secure checkout.",
      image: iplClone,
      github: "https://github.com/yourusername/ipl-clone",
    },
  ]

  const categories = [""];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-bold mb-8">
        Projects
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-600 mt-4 rounded-full"></div>
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
              index === 0
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <Button
                onClick={() => window.open(project.github, '_blank')}
                className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white rounded-xl font-medium shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
