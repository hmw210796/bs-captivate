import React from "react";
import styles from "./FeaturesCard.module.scss";

type FeaturesCardProps = {
  children: React.ReactNode;
  className?: string;
};

const FeaturesCard: React.FC<FeaturesCardProps> = ({ children, className }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>{children}</div>
  );
};

export default FeaturesCard;
