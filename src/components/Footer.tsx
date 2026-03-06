import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto section-padding pb-12">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-foreground">
                Jania <span className="text-gold-light">Ney</span> Yosimbom
              </h3>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Turning youth passion into impact platforms. Multi-award-winning
                leader, global speaker, and climate & youth policy advocate.
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

      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/WHATSAPP_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <FaWhatsapp size={32} />
        
        {/* Glow Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
      </a>
    </>
  );
};

export default Footer;