import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const education = [
    {
      year: "2020-2021",
      degree: "Software Development",
      institution: "Tech University",
    },
    {
      year: "2016-2020",
      degree: "Bachelor of Technology",
      institution: "Engineering College",
    },
  ];

  const experience = [
    {
      year: "2022 - Present",
      position: "Full Stack Developer",
      company: "Tech Solutions Inc",
    },
    {
      year: "2021-2022",
      position: "Frontend Developer",
      company: "Digital Agency",
    },
  ];

  const workSkills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  const softSkills = [
    "Time Management",
    "Mentorship",
    "Impeccable Communication",
    "Flexibility",
    "Research",
    "Writing",
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-bold mb-12">
        Resume
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-600 mt-4 rounded-full"></div>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-orange-600/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-muted-foreground">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-orange-600/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                <p className="text-muted-foreground">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Work Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Work Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            {workSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex flex-col items-center gap-3 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary px-6 py-3 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
