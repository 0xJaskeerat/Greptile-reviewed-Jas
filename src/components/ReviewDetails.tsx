import { useState } from "react";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.webp";

import { AnimatedReview } from "./AnimatedReview";

export const ReviewDetails: React.FC = () => {
  const [logoAnimationDone, setLogoAnimationDone] = useState(false);

  return (
    <div className="relative w-full max-w-full h-full max-h-full mx-auto p-6 sm:p-8 bg-black rounded-xl shadow-xl overflow-hidden">
      {/* Logo animation */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setLogoAnimationDone(true)}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <motion.img
          src={Logo}
          alt="Greptile Logo"
          className="w-52 h-52 object-contain"
          animate={
            logoAnimationDone
              ? {
                  y: "-24vh",
                  scale: 0.3,
                  transition: {
                    type: "spring",
                    stiffness: 60,
                    damping: 10,
                  },
                }
              : {}
          }
        />
      </motion.div>

      {/* animated review */}
      {logoAnimationDone && <AnimatedReview />}
    </div>
  );
};
