import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import speakingHeroImg from "@/assets/speaking-hero.jpg";

const testimonials = [
  {
    quote: "Jania's ability to inspire and mobilize young people for climate action is unmatched. She brings a rare combination of passion, policy expertise, and spiritual grounding to every room she enters.",
    name: "Dr. Sarah Mensah",
    org: "International Youth Climate Coalition",
  },
  {
    quote: "Having Jania speak at our annual summit was transformative. Her message resonated deeply with our audience, and the feedback was overwhelmingly positive. She is a force for good.",
    name: "Michael Okonkwo",
    org: "African Leadership Forum",
  },
  {
    quote: "Jania doesn't just speak — she moves people to action. Her work with EcoHub and Girl Charge demonstrates the kind of leadership our world desperately needs.",
    name: "Ambassador Linda Nwosu",
    org: "UN Youth Advisory Board",
  },
  {
    quote: "Working with Jania on our youth empowerment program was an incredible experience. Her vision, dedication, and ability to connect with young people is truly remarkable.",
    name: "Pastor David Tunde",
    org: "Global Faith Leadership Network",
  },
  {
    quote: "Jania represents the future of leadership — purpose-driven, globally minded, and deeply committed to making a difference. I highly recommend her for any platform.",
    name: "Prof. Amina Yusuf",
    org: "Centre for Sustainable Development",
  },
];

const Testimonials = () => {
  return (
    <main className="pt-20">
      {/* <section className="section-padding floating-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6 text-white">What They <span className="italic text-primary">Say</span></h1>
            <p className="body-text text-white">Voices from leaders, organizations, and communities impacted by Jania's work.</p>
          </ScrollReveal>
        </div>
      </section> */}

      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6 text-white">What They <span className="italic text-primary">Say</span></h1>
            <p className="body-text text-white">Voices from leaders, organizations, and communities impacted by Jania's work.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto space-y-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-panel rounded-xl p-8 md:p-10">
                <div className="gold-divider mb-6" />
                <blockquote className="font-heading text-xl md:text-2xl italic text-deep-blue leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-body text-sm font-semibold text-deep-blue">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">{t.org}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding floating-gradient text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="editorial-subheading mb-6">Ready to Experience the Impact?</h2>
            <Link to="/contact" className="gold-button">Book Jania Today</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Testimonials;
