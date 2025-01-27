"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypeWriter = ({
  text,
  delay = 0,
  className = "",
  onComplete,
}: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Esperar el delay inicial antes de comenzar
    const initialTimer = setTimeout(() => {
      setStartTyping(true);
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(initialTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 5); // Velocidad del typing

      return () => clearTimeout(timeout);
    } else {
      onComplete && onComplete();
      setIsComplete(true);
    }
  }, [currentIndex, text, startTyping, onComplete]);

  return (
    <span className={className} style={{ display: "block" }}>
      {currentText}
      {startTyping && !isComplete && <span className="cursor">_</span>}
    </span>
  );
};
