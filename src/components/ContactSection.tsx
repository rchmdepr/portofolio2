import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek-proyek menarik.
          Mari terhubung dan jelajahi bagaimana kita dapat bekerja sama. Seperti yang saya sebutkan sebelumnya,
          Anda dapat menghubungi saya langsung melalui Instagram, karena saya lebih aktif di Instagram
          daripada platform media sosial lainnya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">rachmadekaputraramadhan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">0857------</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location Domicile</h3>
                    <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <form 
                action="https://formsubmit.co/rachmadekaputraramadhan@gmail.com" 
                method="POST" 
                className="space-y-4 bg-card p-8 rounded-2xl border border-border/50 shadow-lg"
              >
                {/* Konfigurasi FormSubmit: Mematikan captcha dan mengatur subjek email */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Pesan Baru dari Portofolio!" />

                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;