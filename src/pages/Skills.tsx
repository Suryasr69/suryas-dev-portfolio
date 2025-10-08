import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          level: 95,
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          level: 90,
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 92,
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 88,
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          level: 85,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: 87,
        },
        {
          name: "SQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 82,
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: 80,
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          level: 90,
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: 88,
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          level: 95,
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-index]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-bold mb-12">
        Technical Skills
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-600 mt-4 rounded-full"></div>
      </h1>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            data-index={categoryIndex}
            className={`transition-all duration-700 ${
              visibleSections.has(categoryIndex)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-primary to-orange-600 rounded-full" />
              {category.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`bg-card p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group ${
                    visibleSections.has(categoryIndex)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: visibleSections.has(categoryIndex)
                      ? `${skillIndex * 100}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleSections.has(categoryIndex) ? `${skill.level}%` : "0%",
                        transitionDelay: visibleSections.has(categoryIndex)
                          ? `${skillIndex * 100 + 200}ms`
                          : "0ms",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
