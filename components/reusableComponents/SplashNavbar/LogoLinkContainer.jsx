import React from 'react';

import Link from "next/link";
import Image from "next/image";
import ImageWrapper from "@/components/scaffoldingComponents/ImageWrapper";

import logo from "@/public/images/logos/FAM-Logomark-Primary-Colour-RGB.svg";

import styles from "./LogoLinkContainer.module.css";

export default function LogoLinkContainer({parentRef = null, parentStyles = null}) {

  return (
    <Link
      ref={parentRef}
      className={`
        ${styles.logoLinkContainer}
        ${parentStyles ? parentStyles.logoLinkContainer : ""}
      `}
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
  );
}