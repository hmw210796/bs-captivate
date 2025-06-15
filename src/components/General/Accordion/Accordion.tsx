"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Accordion.module.scss";
import Image from "next/image";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <motion.div
      className={styles.accordionContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            openItems.includes(index) ? styles.active : ""
          }`}
        >
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.question}>{item.question}</span>
            <motion.span
              className={styles.icon}
              animate={{ rotate: openItems.includes(index) ? 135 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/icons/icon-plus.svg"
                width={14}
                height={14}
                alt="icon-plus"
              />
            </motion.span>
          </button>
          <AnimatePresence>
            {openItems.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={styles.accordionContent}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.answer}>{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default Accordion;
