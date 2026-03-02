import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern - Minimalist Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4620_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4620_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Me</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek-proyek menarik.
          Mari terhubung dan jelajahi bagaimana kita dapat bekerja sama. Seperti yang saya sebutkan sebelumnya,
          Anda dapat menghubungi saya langsung melalui Instagram, karena saya lebih aktif di Instagram
          daripada platform media sosial lainnya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-sm hover:border-zinc-600 transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-white text-sm md:text-base">Email</h3>
                    <p className="text-zinc-400 text-xs md:text-sm break-words">rachmadekaputraramadhan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-sm hover:border-zinc-600 transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm md:text-base">Phone</h3>
                    <p className="text-zinc-400 text-xs md:text-sm">0857------</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-sm hover:border-zinc-600 transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm md:text-base">Location Domicile</h3>
                    <p className="text-zinc-400 text-xs md:text-sm">Yogyakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <form 
                action="https://formsubmit.co/rachmadekaputraramadhan@gmail.com" 
                method="POST" 
                className="space-y-4 bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-lg"
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
                    className="w-full px-4 py-3 border border-zinc-800 rounded-lg bg-zinc-950/50 text-white focus:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-zinc-800 rounded-lg bg-zinc-950/50 text-white focus:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-zinc-800 rounded-lg bg-zinc-950/50 text-white focus:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-zinc-600"
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