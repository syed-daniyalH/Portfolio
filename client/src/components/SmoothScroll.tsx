import { useEffect, useState } from "react";

export default function SmoothScroll() {
  const [shouldEnable, setShouldEnable] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateState = () => {
      setShouldEnable(
        !reducedMotionQuery.matches &&
          finePointerQuery.matches &&
          window.innerWidth >= 768
      );
    };

    updateState();
    reducedMotionQuery.addEventListener("change", updateState);
    finePointerQuery.addEventListener("change", updateState);
    window.addEventListener("resize", updateState);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateState);
      finePointerQuery.removeEventListener("change", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  useEffect(() => {
    if (!shouldEnable) {
      return;
    }

    let lenisInstance: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    let frameId = 0;
    let isActive = true;

    void import("lenis").then(({ default: Lenis }) => {
      if (!isActive) {
        return;
      }

      lenisInstance = new Lenis({
        anchors: true,
        autoRaf: false,
        duration: 1.1,
        smoothWheel: true,
        syncTouch: false,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };

      frameId = window.requestAnimationFrame(raf);
    });

    return () => {
      isActive = false;
      window.cancelAnimationFrame(frameId);
      lenisInstance?.destroy();
    };
  }, [shouldEnable]);

  return null;
}
