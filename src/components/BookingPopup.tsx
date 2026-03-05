import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookingPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.4) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 glass-panel rounded-lg p-8 max-w-sm shadow-xl border border-primary/20"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <h4 className="font-heading text-xl font-semibold text-deep-blue mb-2">
            Book Jania for Your Next Event
          </h4>
          <p className="font-body text-sm text-muted-foreground mb-5">
            Bring transformational leadership and youth empowerment to your stage.
          </p>
          <Link to="/contact" className="gold-button text-xs w-full text-center block" onClick={handleDismiss}>
            Get in Touch
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;
