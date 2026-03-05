import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import portraitImg from "@/assets/portrait.jpg";
import heroSpeakingImg from "@/assets/hero-speaking.jpg";
import speakingHeroImg from "@/assets/speaking-hero.jpg";
import ecohubImg from "@/assets/ecohub.jpg";
import girlChargeImg from "@/assets/girl-charge.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import policyImg from "@/assets/policy-panel.jpg";

const timeline = [
  { year: "Early Years", title: "Leadership Journey Begins", desc: "From a young age, Jania demonstrated a natural gift for leadership and an unwavering commitment to serving others. Her early experiences in community organizing laid the foundation for her global mission.", img: awardImg },
  { year: "EcoHub Founded", title: "Founding EcoHub", desc: "Recognizing the urgent need for youth-led climate action, Jania founded EcoHub — an innovative platform connecting young environmentalists with resources, mentorship, and policy opportunities.", img: ecohubImg },
  { year: "Girl Charge Launched", title: "Creating Girl Charge", desc: "Driven by a passion for gender equity, Jania launched Girl Charge to empower young women with leadership skills, confidence, and opportunities to become change-makers in their communities.", img: girlChargeImg },
  { year: "Global Stage", title: "Global Advocacy & Policy Work", desc: "Jania's expertise in climate and youth policy has taken her to international forums, where she advocates for inclusive policies that center young people's voices in decision-making.", img: policyImg },
  { year: "Mission", title: "Faith & Mission", desc: "Anchored in her Christian faith, Jania approaches every endeavor with purpose, compassion, and a deep conviction that leadership is a calling to serve. Her mission is to raise a generation of impact-driven leaders.", img: heroSpeakingImg },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      {/* <section className="relative floating-gradient section-padding">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={portraitImg} alt="Jania Ney Yosimbom" className="w-full h-[800px] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-divider mb-6" />
            <h1 className="editorial-heading mb-6">The Story Behind the <span className="italic text-primary">Movement</span></h1>
            <p className="body-text mb-6">
              Jania Ney Yosimbom is not just a leader — she is a movement builder. A multi-award-winning advocate, global speaker, and the visionary founder of EcoHub and Girl Charge, Jania has dedicated her life to transforming how young people engage with leadership, policy, and purpose.
            </p>
            <p className="body-text">
              Her journey from community activist to international policy expert is a testament to the power of faith, resilience, and an unshakable belief that every young person carries the potential to change the world.
            </p>
          </ScrollReveal>
        </div>
      </section> */}

      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mb-6" />
            <h1 className="editorial-heading text-white mb-6">The Story Behind the <span className="italic text-primary">Movement</span></h1>
            <p className="body-text  text-white max-w-2xl mb-6">
              Jania Ney Yosimbom is not just a leader — she is a movement builder. A multi-award-winning advocate, global speaker, and the visionary founder of EcoHub and Girl Charge, Jania has dedicated her life to transforming how young people engage with leadership, policy, and purpose.
            </p>
            <p className="body-text flex justify-center text-white max-w-2xl mb-6">
              Her journey from community activist to international policy expert is a testament to the power of faith, resilience, and an unshakable belief that every young person carries the potential to change the world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="editorial-subheading">A Journey of Impact</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-20">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="image-hover-zoom rounded-xl">
                      <img src={item.img} alt={item.title} className="w-full h-72 object-cover rounded-xl" loading="lazy" />
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold">{item.year}</span>
                    <h3 className="font-heading text-2xl font-semibold text-deep-blue mt-2 mb-4">{item.title}</h3>
                    <div className="gold-divider mb-4" />
                    <p className="body-text">{item.desc}</p>
                  </div>
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
            <h2 className="editorial-subheading mb-6">Ready to Collaborate?</h2>
            <p className="body-text mb-10">Partner with Jania to bring transformational leadership to your next event or initiative.</p>
            <Link to="/contact" className="gold-button">Book a Conversation</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default About;
