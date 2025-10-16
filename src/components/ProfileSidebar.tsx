import { Mail, MapPin, Phone, Download, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const ProfileSidebar = () => {
  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV
    const link = document.createElement('a');
    link.href = "suryaresume.pdf";
    link.download = "suryaresume.pdf";
    link.click();
  };

  return (
    <aside className="w-full lg:w-[380px] bg-card rounded-3xl p-8 shadow-lg animate-fade-in">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-orange-600 p-1">
          <img
            src={profileImage}
            alt="Surya Prakash"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Surya <span className="text-primary">Prakash</span>
        </h1>
        <p className="text-muted-foreground">Mern Full Stack Developer</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://www.linkedin.com/in/surya6922/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/surya6922/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Suryasr69"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-8 bg-secondary rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <p className="font-medium">+91 6385808234</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-medium text-sm break-all">srsurya778@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-medium">coimbatore, India</p>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <Button
        onClick={handleDownloadCV}
        className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white rounded-xl h-12 font-medium shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </Button>
    </aside>
  );
};

export default ProfileSidebar;
