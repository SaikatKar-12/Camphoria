"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LampContainer } from "@/Components/ui/lamp";
import "../index.css";
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="faq-header">
          <div className="faq-title-container">
            <h1 className="faq-title">FAQ</h1>
            <h2 className="faq-subtitle">Frequently Asked Questions</h2>
          </div>
          <div className="faq-background-text">
            <span>FAQ</span>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
