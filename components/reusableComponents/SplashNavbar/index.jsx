"use client";

import { useRef } from "react";
import {
  useScrollScaleElementWidth,
  useScrollScaleElementHeight,
  useScrollScaleElementPaddingBottom,
  useScrollAnimateAbsoluteLeft,
  useScrollTranslateXElement,
  useScrollAnimateOpacity,
} from "@/utils/hooks/useScrollPositionAnimations";

import Link from "next/link";
import Image from "next/image";

import NavLinksContainer from "./NavLinksContainer";
import ImageWrapper from "@/components/scaffoldingComponents/ImageWrapper";
import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";

import logo from "@/public/images/logos/FAM-Logomark-Primary-Colour-RGB.svg";
// import logo from "@/public/images/logos/fam_logo_rgb_full.png";

import styles from "./SplashNavbar.module.css";




export default function SplashNavbar() {

  const splashContainerRef = useRef(null);
  useScrollScaleElementPaddingBottom(splashContainerRef, 0);

  const splashNavbarRef = useRef(null);
  useScrollScaleElementHeight(splashNavbarRef, 6.25);

  const logoLinkRef = useRef(null);
  useScrollTranslateXElement(logoLinkRef, 0);
  useScrollAnimateAbsoluteLeft(logoLinkRef, 0);

  const splashSloganRef = useRef(null);
  useScrollAnimateOpacity(splashSloganRef, 0);

  const splashLinksRef = useRef(null);
  useScrollAnimateAbsoluteLeft(splashLinksRef, 1);
  useScrollTranslateXElement(splashLinksRef, -1);

  return (
    <nav
      ref={splashContainerRef}
      className={`
        ${styles.splashNavbarContainer}
      `}
      onClick={() => console.log(window.scrollY)}
    >
      <main ref={splashNavbarRef} className={`${styles.splashNavbar}`}>
        <Link
          ref={logoLinkRef}
          className={styles.logoLinkContainer}
          href="/"
        >
          <ImageWrapper parentStyles={styles}>
            <Image
              src={logo}
              alt="website logo"
              sizes="100vw"
              fill
            />
          </ImageWrapper>
        </Link>
      </main>

      <section
        ref={splashSloganRef}
        className={styles.splashNavbarSlogan}
      >
        <TextStyleWrapper parentStyles={styles}>
          <h2>MEDIA ON THE MOVE</h2>
        </TextStyleWrapper>
      </section>

      <section ref={splashLinksRef} className={styles.splashNavbarLinks}>
        <NavLinksContainer />
      </section>

    </nav>
  );
}