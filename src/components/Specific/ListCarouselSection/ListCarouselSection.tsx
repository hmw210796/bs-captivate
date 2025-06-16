"use client";

import React, { useEffect, useRef } from "react";

import styles from "./ListCarouselSection.module.scss";

import Image from "next/image";

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
    imageUrl: "/icons/icon-webinars.svg",
  },
  {
    name: "Staff training",
    imageUrl: "/icons/icon-training.svg",
  },
];

type CarouselItemProps = {
  title: string;
  imageUrl: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        width={28}
        height={28}
        alt={`icon-${title}`}
        className={styles.cardIcon}
      />
      {title}
    </div>
  );
};

const ListCarouselSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const contentWidth = container.scrollWidth;
      const containerWdith = container.clientWidth;

      container.scrollLeft = (contentWidth - containerWdith) / 2;
    }
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      {CarouselArray.map((item) => (
        <CarouselItem
          title={item.name}
          imageUrl={item.imageUrl}
          key={item.name}
        />
      ))}
    </section>
  );
};

export default ListCarouselSection;
