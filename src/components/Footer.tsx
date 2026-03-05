import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto section-padding pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-foreground">
              Jania <span className="text-gold-light">Ney</span> Yosimbom
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-80">
              Turning youth passion into impact platforms. Multi-award-winning leader, global speaker, and climate & youth policy advocate.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-gold-light">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", path: "/about" },
                { label: "Speaking", path: "/speaking" },
                { label: "Impact", path: "/impact" },
                { label: "Media", path: "/media" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm opacity-70 hover:opacity-100 hover:text-gold-light transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-gold-light">
              Connect
            </h4>
            <p className="font-body text-sm opacity-80 mb-2">
              hello@janiayosimbom.com
            </p>
            <p className="font-body text-sm opacity-80">
              Available for speaking engagements worldwide.
            </p>
          </div>
        </div>
        <div className="gold-divider mx-auto mb-8" />
        <p className="text-center font-body text-xs opacity-60 tracking-wide">
          © {new Date().getFullYear()} Jania Ney Yosimbom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
