import React from "react";

import Link from "next/link";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const baseClasses = `${styles.button}
    ${variant === "primary" ? styles.primary__ : styles.secondary__}
    ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button type={type} onClick={onClick} className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
