"use client";

import React from "react";

import styles from "./ListCarouselSection.module.scss";

import Image from "next/image";
import { motion } from "motion/react";

const CarouselArray = [
  {
    name: "Live Events",
    imageUrl: "/icons/icon-events.svg",
  },
  {
    name: "Pitch Decks",
    imageUrl: "/icons/icon-pitch.svg",
  },
  {
    name: "Financial Reports",
    imageUrl: "/icons/icon-financial.svg",
  },
  {
    name: "Presentation Decks",
    imageUrl: "/icons/icon-presentation.svg",
  },
  {
    name: "Earnings",
    imageUrl: "/icons/icon-earnings.svg",
  },
  {
    name: "Webinars",
    imageUrl: "/icons/icons-webinars.svg",
  },
  {
    name: "Staff training",
    imageUrl: "/icons/icon-training.svg",
  },
];

const LogoSection = () => {
  return <div></div>;
};

export default LogoSection;
