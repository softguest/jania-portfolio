import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroSpeakingImg from "@/assets/hero-speaking.jpg";
import speakingHeroImg from "@/assets/speaking-hero.jpg";
import youthForumImg from "@/assets/youth-forum.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import policyImg from "@/assets/policy-panel.jpg";
import ecohubImg from "@/assets/ecohub.jpg";
import girlChargeImg from "@/assets/girl-charge.jpg";
import portraitImg from "@/assets/portrait.jpg";

const allMedia = [
  { src: heroSpeakingImg, category: "Event Photos", caption: "International Conference Keynote" },
  { src: speakingHeroImg, category: "Event Photos", caption: "Global Summit Address" },
  { src: youthForumImg, category: "Event Photos", caption: "Youth Forum Leadership" },
  { src: awardImg, category: "Press", caption: "Award Ceremony Recognition" },
  { src: policyImg, category: "Press", caption: "Policy Panel Discussion" },
  { src: ecohubImg, category: "Event Photos", caption: "EcoHub Community Initiative" },
  { src: girlChargeImg, category: "Event Photos", caption: "Girl Charge Workshop" },
  { src: portraitImg, category: "Press", caption: "Editorial Feature" },
];

const Media = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Event Photos", "Press"];
  const filtered = filter === "All" ? allMedia : allMedia.filter(m => m.category === filter);

  return (
    <main className="pt-20">
      {/* <section className="section-padding floating-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6">Media & <span className="italic text-primary">Press</span></h1>
            <p className="body-text">Highlights from conferences, press features, and events worldwide.</p>
          </ScrollReveal>
        </div>
      </section> */}

      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading text-white mb-6">Media & <span className="italic text-primary">Press</span></h1>
            <p className="body-text text-white">Highlights from conferences, press features, and events worldwide.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${filter}-${i}`} delay={i * 0.05}>
                <div
                  className="image-hover-zoom rounded-xl cursor-pointer group relative"
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.caption} className="w-full h-56 object-cover rounded-xl" loading="lazy" />
                  <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/50 transition-all duration-400 rounded-xl flex items-end">
                    <p className="font-body text-sm text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-blue/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground"><X size={32} /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={lightbox} alt="Media" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Media;
