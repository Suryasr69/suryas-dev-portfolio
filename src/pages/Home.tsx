import { Code, Smartphone, Palette, Users } from "lucide-react";
import SkillsSection from "@/components/SkillsSection";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together.",
    },
    {
      icon: Palette,
      title: "UI/UX Designing",
      description: "Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* About Me Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-8">
          ABOUT ME
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-600 mt-4 rounded-full"></div>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
          full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
          My journey in the world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in the industry.
        </p>
      </div>

      {/* What I Do Section */}
      <div>
        <h2 className="text-4xl font-bold mb-8">What I do!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-orange-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Section with Scroll Animation */}
      <SkillsSection />
    </div>
  );
};

export default Home;
