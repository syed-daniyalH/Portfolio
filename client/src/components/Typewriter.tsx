import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  texts,
  speed = 100,
  delay = 3000,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
