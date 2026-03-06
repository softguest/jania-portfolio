import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImg from "@/assets/hero-speaking.jpg";
import portraitImg from "@/assets/portrait.jpg";
import youthForumImg from "@/assets/youth-forum.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import policyImg from "@/assets/policy-panel.jpg";
import ecohubImg from "@/assets/ecohub.jpg";
import girlChargeImg from "@/assets/girl-charge.jpg";
import speakingHeroImg from "@/assets/speaking-hero.jpg";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import ImpactGlobe from "@/components/ImpactGlobe";

const featuredImages = [
  { src: speakingHeroImg, caption: "Global Keynote Address", emoji: "🌐" },
  { src: youthForumImg, caption: "Youth Forum Leadership", emoji: "👏" },
  { src: awardImg, caption: "Award Recognition", emoji: "🏆" },
  { src: policyImg, caption: "Policy Panel Discussion", emoji: "💬" },
];

const initiatives = [
  { img: ecohubImg, title: "EcoHub", desc: "Environmental sustainability initiatives driving climate action through youth engagement and community projects." },
  { img: girlChargeImg, title: "Girl Charge", desc: "Empowering young women to lead with confidence through mentorship, training, and transformative programs." },
  { img: policyImg, title: "Policy Engagements", desc: "Shaping youth and climate policies at national and international levels through strategic advocacy." },
  { img: speakingHeroImg, title: "Speaking Engagements", desc: "Inspiring audiences worldwide with powerful keynotes on leadership, impact, and transformative change." },
];

const Index = () => {
  const playVoice = () => {
    const audio = new Audio("/voice/jania-intro.mp3")
    audio.play()
  }
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center floating-gradient overflow-hidden">
        {/* <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" /> */}

        {/* Impact Globe */}

        {/* Light Rays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/20 blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
          <ScrollReveal>
            <div>
              <div className="gold-divider mb-8" />
              <h1 className="editorial-heading mb-6">
                Turning Youth Passion Into <span className="italic text-primary">Impact</span> Platforms
              </h1>
              <p className="body-text mb-10 max-w-lg">
                Global Speaker · Climate & Youth Policy Advocate · Founder of EcoHub & Girl Charge
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="gold-button">
                  Book Jania to Speak
                </Link>
                <Link to="/impact" className="gold-button-outline">
                  View Her Impact
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <motion.div
              className="relative"
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Jania Ney Yosimbom speaking at an international conference"
                  className="w-full h-[500px] lg:h-[600px] object-cover border-4 border-primary rounded-2xl transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-10 -left-4 w-24 h-24 border-2 border-primary/70 rounded-xl" />
              <div className="absolute -top-10 -right-4 w-24 h-24 bg-primary/40 rounded-full" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED IMPACT */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">Featured Impact</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="image-hover-zoom rounded-xl relative group cursor-pointer">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-72 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 border-4 border-accent/50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-deep-blue/0 bg-deep-blue/50 transition-all duration-500 rounded-xl flex items-end">
                    <p className="font-body text-sm text-primary-foreground p-4 opacity-100 transition-opacity duration-300 font-bold">
                      {item.caption} <span className="ml-2">{item.emoji}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding floating-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={portraitImg}
                alt="Jania Ney Yosimbom portrait"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <div className="gold-divider mb-6" />
              <h2 className="editorial-subheading mb-6">
                A Voice for the <span className="italic text-primary">Next Generation</span>
              </h2>
              <p className="body-text mb-8">
                Jania Ney Yosimbom is a multi-award-winning leader, global ambassador, and climate & youth policy expert. As the founder of EcoHub and Girl Charge, she has dedicated her life to turning young people's passion and drive into impact-generating platforms and transformative change tools. Her work spans continents, policy chambers, and stages — always anchored in faith, service, and a vision for global transformation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <AnimatedCounter end={1000} suffix="+" label="Youth Impacted" />
                <AnimatedCounter end={50} suffix="+" label="Conferences" />
                <AnimatedCounter end={12} suffix="+" label="Awards" />
                <AnimatedCounter end={20} suffix="+" label="Partnerships" />
              </div>
              <Link to="/about" className="gold-button-outline">
                Read Full Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INITIATIVES PREVIEW */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">Initiatives & Programs</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="image-hover-zoom">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="gold-divider mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-deep-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="body-text text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW */}
      <section className="section-padding floating-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-10" />
            <blockquote className="font-heading text-2xl md:text-3xl italic text-deep-blue leading-relaxed mb-8">
              "Jania's ability to inspire and mobilize young people for climate action is unmatched. She brings a rare combination of passion, policy expertise, and spiritual grounding to every room she enters."
            </blockquote>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-2">
              — International Youth Climate Coalition
            </p>
            <div className="mt-10">
              <Link to="/testimonials" className="gold-button-outline">
                View More Testimonials
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="editorial-heading mb-6">
              Bring Transformational Leadership to Your Next Event
            </h2>
            <p className="body-text mb-10">
              Partner with Jania to inspire, influence, and ignite transformative change at your next conference, summit, or event.
            </p>
            <Link
              to="/contact"
              className="gold-button inline-block hover:shadow-[0_0_40px_hsl(42_45%_57%/0.3)] transition-shadow duration-500"
            >
              Book a Speaking Engagement
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
