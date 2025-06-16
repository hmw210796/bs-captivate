"use client";

import { useState } from "react";
import { NavItem } from "@/types";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/General/Button/Button";

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div
          className={`${styles.navContainer} ${
            isOpen ? styles.mobileMenuOpened__ : ""
          }`}
        >
          <div className={`${styles.navContent} `}>
            <Image
              src={"/icons/logo-captivate.svg"}
              alt="captivate-logo"
              width={140}
              height={32}
              className={styles.logo}
            />

            <div className={styles.navLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={styles.navButtons}>
              <Link className={styles.signInBtn} href="#login">
                Log in
              </Link>
              <Button className={styles.getStartedBtn} href="#signup">
                Get Started
              </Button>
            </div>

            <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen && styles.animate__
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen && styles.animate__
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen && styles.animate__
                }`}
              ></span>
            </button>
          </div>

          <div
            className={`${styles.mobileMenu} ${isOpen && styles.menuOpened__}`}
          >
            <div
              className={`${styles.mobileMenuContent} ${
                isOpen && styles.menuOpened__
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                >
                  {item.label}
                </Link>
              ))}
              <div className={styles.mobileButtons}>
                <Link className={styles.mobileSignInBtn} href="#login">
                  Log in
                </Link>
                <Button className={styles.mobileGetStartedBtn} size="large">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
      </nav>
    </header>
  );
}
