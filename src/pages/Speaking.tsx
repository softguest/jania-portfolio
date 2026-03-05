import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import speakingHeroImg from "@/assets/speaking-hero.jpg";
import heroSpeakingImg from "@/assets/hero-speaking.jpg";
import youthForumImg from "@/assets/youth-forum.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import policyImg from "@/assets/policy-panel.jpg";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const topics = [
  "Youth Empowerment & Leadership",
  "Climate Action & Sustainability",
  "Women in Leadership",
  "Faith-Driven Leadership",
  "Building Impact Platforms",
];

const eventTypes = [
  { title: "Conferences", desc: "International and regional conferences on youth, climate, and leadership." },
  { title: "Universities", desc: "Inspiring the next generation of leaders at academic institutions worldwide." },
  { title: "Policy Summits", desc: "High-level policy discussions on climate, youth, and sustainable development." },
  { title: "Corporate Events", desc: "Keynotes for organizations investing in leadership and social impact." },
  { title: "Faith-Based Events", desc: "Empowering faith communities with purpose-driven leadership." },
];

const galleryImages = [speakingHeroImg, heroSpeakingImg, youthForumImg, awardImg, policyImg];

const Speaking = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Inspiring Youth. Influencing Policy.<br /><span className="text-gold-light italic">Driving Impact.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">Speaking Topics</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-panel rounded-lg px-8 py-5 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-heading text-lg md:text-xl text-deep-blue">{topic}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding floating-gradient">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">On Stage</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="image-hover-zoom rounded-xl cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <img src={img} alt={`Speaking engagement ${i + 1}`} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-blue/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Speaking engagement"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Types */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">Event Types</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-panel rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="gold-divider mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-deep-blue mb-2">{type.title}</h3>
                  <p className="body-text text-sm">{type.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding floating-gradient text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="editorial-heading mb-6">Book Jania for Your Event</h2>
            <p className="body-text mb-10">Bring powerful, transformational keynotes to your audience.</p>
            <Link to="/contact" className="gold-button">Request Booking</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Speaking;
