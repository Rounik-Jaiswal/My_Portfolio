import { motion } from "framer-motion";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        {/* Left: Section Title */}
        <motion.h2
          className="about-title"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: false,amount:0.6 }}
        >
          About Me
        </motion.h2>

        {/* Right: Description */}
        <motion.div
          className="about-description"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          viewport={{ once: false,amount:0.6 }}
        >
          <p>
            I’m Rounik Jaiswal, a passionate full-stack developer who enjoys solving complex
            problems and building clean, functional web applications.
          </p>
          <p>
            My interest spans across software architecture, algorithms, and emerging technologies
            like AI and cloud computing.
          </p>
          <p>
            I believe in curiosity, consistency, and continuous learning. Feel free to explore the
            rest of my portfolio to learn more about my skills, education, and past experiences!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
