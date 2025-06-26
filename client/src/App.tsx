import { useEffect } from "react";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const root = document.documentElement;
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div className="cursor-effect" />
      <Hero />
      <About />
      {/* Add other sections here */}
    </div>
  );
};

export default App;
