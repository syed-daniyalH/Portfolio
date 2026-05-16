import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      setIsPointer(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 bg-[#d4af37] rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#d4af37] rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.3 : 1,
          opacity: isPointer ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 1,
        }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
