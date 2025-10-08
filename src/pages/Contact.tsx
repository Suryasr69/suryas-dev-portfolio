import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-bold mb-12">
        Contact
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-600 mt-4 rounded-full"></div>
      </h1>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Phone:</h3>
            </div>
          </div>
          <p className="text-lg">+91 9876543210</p>
          <p className="text-lg">+91 9876543211</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Email:</h3>
            </div>
          </div>
          <p className="text-lg">suryaprakash@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-card p-8 rounded-2xl shadow-lg">
        <p className="text-lg mb-8 text-muted-foreground">
          I am always open to discussing <strong>new projects</strong>,{" "}
          <strong>opportunities in tech world</strong>, <strong>partnerships</strong> and more so{" "}
          <strong>mentorship</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name:
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-2 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-2 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message:
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="rounded-xl border-2 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white rounded-xl h-12 px-8 font-medium shadow-lg transition-all duration-300 hover:scale-105"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
