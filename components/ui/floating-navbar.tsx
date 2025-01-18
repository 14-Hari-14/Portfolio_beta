"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icons: React.ReactNode; // Ensure this matches usage in JSX
    target?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll(); // Framer Motion hook
  const [visible, setVisible] = useState(true);

  // Smooth scrolling visibility logic
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0; // Default to 0 if undefined
    const direction = current - previous;
    if (current < 0.05) {
      setVisible(true); // Show nav when near the top
    } else {
      setVisible(direction < 0); // Show when scrolling up
    }
  });  

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-solid border-purple-100 rounded-lg bg-blue-200 shadow-lg z-[5000] px-4 py-4 items-center justify-center space-x-4 uppercase",
            className,
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              target={navItem.target}
              rel={navItem.target === "_blank" ? "noopener noreferrer" : undefined}
              className={cn(
                "relative dark:text-white-100 items-center flex space-x-1 text-white-100 dark:hover:text-blue-400 hover:text-blue-400 tracking-widest font-mono"
              )}
            >
              <span className="block sm:hidden">{navItem.icons}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
