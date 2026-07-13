import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Let's Talk</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:frankmutethia81@gmail.com"
                className="flex items-center gap-3 sm:gap-4 rounded-lg p-2 -ml-2 hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Email Frank Mutethia at frankmutethia81@gmail.com"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="text-sm sm:text-base text-foreground break-all">
                    frankmutethia81@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+254725652507"
                className="flex items-center gap-3 sm:gap-4 rounded-lg p-2 -ml-2 hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Call Frank Mutethia at +254 725 652 507"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm sm:text-base text-foreground">+254 725 652 507</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-2 -ml-2">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                  <p className="text-sm sm:text-base text-foreground">Nairobi, Kenya</p>
                </div>
              </div>

              <a
                href="https://github.com/frankmutethia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 rounded-lg p-2 -ml-2 hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Visit Frank Mutethia's GitHub profile"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">GitHub</p>
                  <p className="text-sm sm:text-base text-foreground break-all">
                    github.com/frankmutethia
                  </p>
                </div>
              </a>
            </div>
          </div>

          <Card className="p-4 sm:p-6 md:p-8 bg-card border-card-border animate-slide-in-right w-full">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-input min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-input min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-input"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 min-h-[44px]">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border px-2">
          <p className="text-sm sm:text-base text-muted-foreground">
            © {currentYear}{" "}
            <span className="font-semibold text-foreground">Frank Mutethia Muriithi</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
