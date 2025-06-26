// src/components/Hero.tsx

import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      {/* Intro Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Rounik Jaiswal
      </motion.h1>

      <div className="bg-red-500 text-white">Test</div>


      <motion.h2
        className="text-xl md:text-2xl font-medium text-slate-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Developer • Problem Solver • Tech Enthusiast
      </motion.h2>

      {/* Call to Action */}
      <motion.a
        href="#projects"
        className="inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-slate-900 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
    
  );
};

export default Hero;
