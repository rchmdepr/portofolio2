import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">rachmadekaputraramadhan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">0857------</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;