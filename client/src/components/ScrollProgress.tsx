import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const nextProgress = totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ scaleX: progress / 100 }}
        initial={false}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 24 }}
      />
    </div>
  );
}
