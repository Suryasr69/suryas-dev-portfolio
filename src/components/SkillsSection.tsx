import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Netlify",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      color: "#00C7B7",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mt-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-card p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center gap-4 group cursor-pointer ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
          >
            <div
              className="w-20 h-20 flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain"
                style={{
                  filter: isVisible ? "none" : "grayscale(100%)",
                  transition: "filter 0.5s ease-in-out",
                }}
              />
            </div>
            <span className="text-sm font-bold text-center group-hover:text-primary transition-colors duration-300">
              {skill.name}
            </span>
            
            {/* Animated border on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Animated underline */}
      <div
        className={`mt-8 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full transition-all duration-1000 ${
          isVisible ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          transitionDelay: isVisible ? "600ms" : "0ms",
        }}
      />
    </div>
  );
};

export default SkillsSection;
