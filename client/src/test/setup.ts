import "@testing-library/jest-dom/vitest";
import { afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";

beforeAll(() => {
  const elementProto = Element.prototype as typeof Element.prototype & {
    hasPointerCapture?: (pointerId: number) => boolean;
    releasePointerCapture?: (pointerId: number) => void;
    setPointerCapture?: (pointerId: number) => void;
  };

  if (typeof elementProto.hasPointerCapture !== "function") {
    Object.defineProperty(elementProto, "hasPointerCapture", {
      configurable: true,
      value: () => false,
    });
  }

  if (typeof elementProto.setPointerCapture !== "function") {
    Object.defineProperty(elementProto, "setPointerCapture", {
      configurable: true,
      value: () => undefined,
    });
  }

  if (typeof elementProto.releasePointerCapture !== "function") {
    Object.defineProperty(elementProto, "releasePointerCapture", {
      configurable: true,
      value: () => undefined,
    });
  }

  if (typeof elementProto.scrollIntoView !== "function") {
    Object.defineProperty(elementProto, "scrollIntoView", {
      configurable: true,
      value: () => undefined,
    });
  }
});

afterEach(() => {
  cleanup();
});
