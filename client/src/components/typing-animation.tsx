import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const TypingAnimation = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 font-bold text-blue-600 dark:text-blue-400"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingAnimation;