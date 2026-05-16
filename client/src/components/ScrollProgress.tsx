import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollProgress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#4a90e2] to-[#d4af37] z-50"
      style={{
        width: `${progress}%`,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    />
  );
}
