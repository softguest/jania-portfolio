// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const BookingPopup = () => {
//   const [show, setShow] = useState(false);
//   const [dismissed, setDismissed] = useState(false);

//   useEffect(() => {
//     if (dismissed) return;

//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 10000);

//     const handleScroll = () => {
//       const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       if (scrollPercent > 0.4) {
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [dismissed]);

//   const handleDismiss = () => {
//     setShow(false);
//     setDismissed(true);
//   };

//   return (
//     <AnimatePresence>
//       {show && !dismissed && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 20 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="fixed bottom-8 right-8 z-50 glass-panel rounded-lg p-8 max-w-sm shadow-xl border border-primary/20"
//         >
//           <button
//             onClick={handleDismiss}
//             className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
//             aria-label="Close"
//           >
//             <X size={18} />
//           </button>
//           <h4 className="font-heading text-xl font-semibold text-deep-blue mb-2">
//             Book Jania for Your Next Event
//           </h4>
//           <p className="font-body text-sm text-muted-foreground mb-5">
//             Bring transformational leadership and youth empowerment to your stage.
//           </p>
//           <Link to="/contact" className="gold-button text-xs w-full text-center block" onClick={handleDismiss}>
//             Get in Touch
//           </Link>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default BookingPopup;


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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          // Dark blue transparent background with blur
          style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(11, 22, 33, 0.7)" }} // Adjust rgba for deep-blue and transparency
        >
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl overflow-hidden text-center transform scale-100" // Added transform scale-100 for framer motion base
          >
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 animate-gradient-xy rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <button
                onClick={handleDismiss}
                className="absolute top-1 right-1 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h4 className="font-heading text-4xl font-extrabold text-white mb-4 leading-tight">
                Elevate Your Event
              </h4>
              <p className="font-body text-lg text-gray-200 mb-6">
                Bring transformative leadership and youth empowerment to your stage. Jania inspires, motivates, and leaves a lasting impact.
              </p>
              <Link to="/contact" className="gold-button text-base px-8 py-3 rounded-full inline-block font-bold shadow-lg hover:scale-105 transition-transform duration-300" onClick={handleDismiss}>
                Book Jania Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;