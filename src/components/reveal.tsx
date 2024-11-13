"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  slide?: boolean;
}

const Reveal = ({ children, className = "", slide = false }: RevealProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: "20%" },
          visible: { opacity: 1, y: "0%" },
        }}
        initial="hidden"
        transition={{ duration: 0.5 }}
        whileInView="visible"
      >
        {children}
      </motion.div>
      {slide && (
        <motion.div
          className="absolute inset-0 bg-[#F4A261] dark:bg-blue-600 z-20"
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          whileInView="visible"
        />
      )}
    </div>
  );
};

export default Reveal;
