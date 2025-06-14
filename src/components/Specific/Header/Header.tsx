"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
        <div className={styles.navContent}>
          <Image
            src={"/icons/logo-captivate.svg"}
            alt="captivate-logo"
            width={165}
            height={40}
          />

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
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
            <span className={`${styles.hamburgerLine} ${styles.top__}`}></span>
            <span
              className={`${styles.hamburgerLine} ${styles.middle__}`}
            ></span>
            <span
              className={`${styles.hamburgerLine} ${styles.bottom__}`}
            ></span>
          </button>

          {/* <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                >
                  {item.label}
                </a>
              ))}
              <div className={styles.mobileButtons}>
                <button className={styles.mobileSignInBtn}>Sign In</button>
                <button className={styles.mobileGetStartedBtn}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
