import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { text: "English", font: "font-sans", direction: "ltr" },
  { text: "العربية", font: "font-arabic", direction: "rtl" },
  { text: "اردو", font: "font-urdu", direction: "rtl" },
  { text: "हिंदी", font: "font-hindi", direction: "ltr" },
];

export default function LanguageCycler() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const current = languages[currentIndex];

  return (
    <div className="relative inline-block min-w-[200px] h-[1.2em]" dir={current.direction}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.4, 0.0, 0.2, 1] 
          }}
          className={`absolute inset-0 text-primary ${current.font} language-text text-center`}
          data-testid="language-text"
        >
          {current.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
