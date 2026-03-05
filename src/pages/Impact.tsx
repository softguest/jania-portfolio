import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ecohubImg from "@/assets/ecohub.jpg";
import girlChargeImg from "@/assets/girl-charge.jpg";
import youthForumImg from "@/assets/youth-forum.jpg";
import speakingHeroImg from "@/assets/speaking-hero.jpg";

const Impact = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      {/* <section className="section-padding floating-gradient"> */}
        {/* <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6">Initiatives & <span className="italic text-primary">Impact</span></h1>
            <p className="body-text max-w-2xl mx-auto">
              Through EcoHub and Girl Charge, Jania is building a legacy of youth-led transformation across climate action, leadership, and gender equity.
            </p>
          </ScrollReveal>
        </div>
      </section> */}

      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img src={speakingHeroImg} alt="Jania speaking at major conference" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="editorial-heading mb-6 text-white">Initiatives & <span className="italic text-primary">Impact</span></h1>
            <p className="body-text max-w-2xl mx-auto text-white">
              Through EcoHub and Girl Charge, Jania is building a legacy of youth-led transformation across climate action, leadership, and gender equity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* EcoHub */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
              <img src={ecohubImg} alt="EcoHub environmental initiative" className="w-full h-[800px] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="gold-divider mb-6" />
              <h2 className="editorial-subheading mb-6">EcoHub</h2>
              <p className="body-text mb-6">
                EcoHub is a youth-led environmental initiative founded by Jania to address the pressing challenges of climate change. Through community tree planting, environmental education, and policy advocacy, EcoHub empowers young people to become stewards of their environment.
              </p>
              <p className="body-text">
                The initiative has mobilized hundreds of volunteers, planted thousands of trees, and influenced environmental policy at local and national levels.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter end={500} suffix="+" label="Volunteers" />
                <AnimatedCounter end={5000} suffix="+" label="Trees Planted" />
                <AnimatedCounter end={15} suffix="+" label="Communities" />
                <AnimatedCounter end={8} suffix="+" label="Policy Wins" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="image-hover-zoom rounded-xl"><img src={youthForumImg} alt="EcoHub activity" className="w-full h-40 object-cover rounded-xl" loading="lazy" /></div>
                <div className="image-hover-zoom rounded-xl"><img src={speakingHeroImg} alt="EcoHub impact" className="w-full h-40 object-cover rounded-xl" loading="lazy" /></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Girl Charge */}
      <section className="section-padding floating-gradient">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
              <img src={girlChargeImg} alt="Girl Charge leadership program" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="gold-divider mb-6" />
              <h2 className="editorial-subheading mb-6">Girl Charge</h2>
              <p className="body-text mb-6">
                Girl Charge is Jania's flagship women empowerment initiative dedicated to raising a generation of bold, confident, and purpose-driven young women leaders. Through mentorship programs, leadership workshops, and community engagement, Girl Charge equips young women with the skills and confidence to lead.
              </p>
              <p className="body-text">
                The program has impacted hundreds of young women across multiple communities, creating a ripple effect of leadership and empowerment.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter end={300} suffix="+" label="Women Trained" />
                <AnimatedCounter end={25} suffix="+" label="Workshops" />
                <AnimatedCounter end={10} suffix="+" label="Mentors" />
                <AnimatedCounter end={12} suffix="+" label="Programs" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="editorial-subheading mb-6">Support the Mission</h2>
            <p className="body-text mb-10">Join Jania in building platforms that transform young lives and communities.</p>
            <Link to="/contact" className="gold-button">Get Involved</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Impact;
