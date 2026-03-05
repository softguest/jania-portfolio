import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import portraitImg from "@/assets/portrait.jpg";
import speakingHeroImg from "@/assets/speaking-hero.jpg";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@janiayosimbom.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <main className="pt-20">

      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6 text-white">Get In Touch, | <span className="italic text-primary">Say Hello</span></h1>
            <p className="body-text max-w-2xl mx-auto text-white">
              If you want to reach out to say hi or discuss a project, Jania is building a legacy of youth-led transformation across climate action, leadership, and gender equity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding floating-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-28">
              <img src={portraitImg} alt="Jania Ney Yosimbom" className="w-full h-[500px] object-cover" />
              <div className="p-8 bg-card">
                <h3 className="font-heading text-xl font-semibold text-deep-blue mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:hello@janiayosimbom.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary" /> hello@janiayosimbom.com
                  </a>
                  <a href="https://wa.me/1234567890" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={18} className="text-primary" /> WhatsApp
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary" /> Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <div className="gold-divider mb-6" />
              <h1 className="editorial-heading mb-6">Let's <span className="italic text-primary">Connect</span></h1>
              <p className="body-text mb-10">
                Whether you're looking to book Jania for a speaking engagement, explore a partnership, or discuss collaboration opportunities — reach out below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Your Name", key: "name" as const, type: "text" },
                  { label: "Email Address", key: "email" as const, type: "email" },
                  { label: "Subject", key: "subject" as const, type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-body text-sm font-medium text-deep-blue block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-body text-sm font-medium text-deep-blue block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>
                <button type="submit" className="gold-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
