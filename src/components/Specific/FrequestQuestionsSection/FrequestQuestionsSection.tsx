import Accordion from "@/components/General/Accordion/Accordion";
import React from "react";

import styles from "./FrequestQuestionsSection.module.scss";

const FAQArray = [
  {
    question: "Is Captivate easy to use for a beginner?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
  {
    question: "How is it different than PowerPoint?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
  {
    question: "How much does it cost to use Captivate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
  {
    question: "Is Captivate right for my team?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
  {
    question: "How do I add members to our plan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
  },
];

const FrequestQuestionsSection = () => {
  return (
    <section className={styles.section} id="faq">
      <h1 className={styles.sectionTitle}>Frequent questions</h1>

      <Accordion items={FAQArray}></Accordion>
    </section>
  );
};

export default FrequestQuestionsSection;
