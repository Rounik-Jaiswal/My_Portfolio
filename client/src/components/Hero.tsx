import { motion } from "framer-motion";
import "../styles/Hero.css"; 
import ShinyText from "../styles/Reactbits/ShinyText";
const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">

      <ShinyText text="Hi, I am Rounik Jaiswal" disabled={false} speed={3} className='heading1' />
      <motion.h2
        className="hero-subheading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Developer • Problem Solver • Tech Enthusiast
      </motion.h2>
      <div className="Hero-button-container">      
        <motion.a
            href="#about"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            About Me
        </motion.a>
        <motion.a
            href="#projects"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Education
        </motion.a>
        <motion.a
            href="#projects"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            skills 
        </motion.a>
        <motion.a
            href="#projects"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Contact
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
