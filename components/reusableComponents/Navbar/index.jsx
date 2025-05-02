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



import LogoLinkContainer from "./LogoLinkContainer";
import NavLinksContainer from "./NavLinksContainer";
import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";


import styles from "./SplashNavbar.module.css";

export default function SplashNavbar() {

  const relativeContainerRef = useRef(null);
  useScrollScaleElementPaddingBottom(relativeContainerRef, 0);

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
    <nav className={styles.splashNavbarContainer}>

      <main
        ref={relativeContainerRef}
        className={`${styles.relativeContainer}`}
      >
        <section
          ref={splashNavbarRef}
          className={`${styles.splashNavbar}`}
        >
          <LogoLinkContainer parentRef={logoLinkRef} parentStyles={styles} />
        </section>

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

      </main>

    </nav>
  );
}