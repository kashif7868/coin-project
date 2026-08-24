"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

import styles from "@/components/animations/css/FadeIn.module.css";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
}: FadeInProps) => {
  const shouldReduceMotion =
    useReducedMotion();

  const combinedClassName = [
    styles.fadeInRoot,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={combinedClassName}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;