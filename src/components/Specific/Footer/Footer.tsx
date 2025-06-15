import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const LandingPagesGroup = [
  {
    title: "Landing page V1",
    href: "#landingV1",
  },
  {
    title: "Landing page V2",
    href: "#landingV2",
  },
  {
    title: "Landing page V3",
    href: "#landingV3",
  },
  {
    title: "Landing page V4",
    href: "#landingV4",
  },
  {
    title: "Landing page V5",
    href: "#landingV5",
  },
];

const UtilityPagesGroup = [
  {
    title: "Log in",
    href: "#login",
  },
  {
    title: "Sign up",
    href: "#signup",
  },
  {
    title: "Privacy policy",
    href: "#privacy",
  },
  {
    title: "Password",
    href: "#password",
  },
  {
    title: "404",
    href: "#notFound",
  },
];

const SocMedArray = [
  {
    title: "Facebook",
    imageUrl: "/icons/icon-facebook.svg",
    href: "#facebook",
  },
  {
    title: "Twitter",
    imageUrl: "/icons/icon-twitter.svg",
    href: "#twitter",
  },
  {
    title: "Instagram",
    imageUrl: "/icons/icon-instagram.svg",
    href: "#instagram",
  },
  {
    title: "Linkedin",
    imageUrl: "/icons/icon-linkedin.svg",
    href: "#linkedin",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image
          src="/icons/logo-captivate.svg"
          alt="Captivate logo"
          width={175}
          height={40}
          className={styles.footerLogo}
        />
        <nav className={styles.navSection}>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>LANDING PAGES</span>
            <ul>
              {LandingPagesGroup.map((nav) => (
                <li key={nav.href}>
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>UTILITY PAGES</span>
            <ul>
              {UtilityPagesGroup.map((nav) => (
                <li key={nav.href}>
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <div className={styles.socMed}>
            {SocMedArray.map((item) => (
              <Link href={item.href} key={item.href}>
                <Image
                  src={item.imageUrl}
                  width={24}
                  height={24}
                  alt={item.title}
                />
              </Link>
            ))}
          </div>
          <span>© 2025. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
