import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [canRender, setCanRender] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateAvailability = () => {
      setCanRender(!reducedMotionQuery.matches && finePointerQuery.matches);
    };

    updateAvailability();
    reducedMotionQuery.addEventListener("change", updateAvailability);
    finePointerQuery.addEventListener("change", updateAvailability);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateAvailability);
      finePointerQuery.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!canRender) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      const target = event.target as HTMLElement;
      setIsPointer(
        Boolean(target.closest("button, a, input, textarea, select, [role='button']"))
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [canRender]);

  if (!canRender) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-primary mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
      />
      <motion.div
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border border-primary/60"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.2 : 1,
          opacity: isPointer ? 0.85 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.7 }}
      />
      <motion.div
        className="pointer-events-none fixed z-40 h-12 w-12 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isPointer ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.9 }}
      />
    </>
  );
}
