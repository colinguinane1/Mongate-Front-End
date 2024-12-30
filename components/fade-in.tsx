"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation(); // Animation controller
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.1, // Adjust visibility threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the animation when in view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        hidden: { opacity: 0, y: 15, scale: 0.5, filter: "blur(10px)" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
