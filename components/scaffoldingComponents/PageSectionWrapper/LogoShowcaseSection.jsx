"use client";

import Image from "next/image";

import { useAnimationTimer, useTranslateXRef } from "@/utils/hooks/useTimerAnimations";

import { ourClientsLogos } from "./ImageImports";
const { carouselLogos } = ourClientsLogos;

import PageSectionWrapper from ".";
import ImageWrapper from "../ImageWrapper";

import styles from "./LogoShowcaseSection.module.css";

export default function LogoShowcaseSection() {

  const { elementRef: topLeftElementRef, updateTranslateValue: updateTopLeftTranslateValue } = useTranslateXRef(0, -100, 0);
  const { elementRef: topRightElementRef, updateTranslateValue: updateTopRightTranslateValue } = useTranslateXRef(0, -100, 0);
  const { elementRef: bottomLeftElementRef, updateTranslateValue: updateBottomLeftTranslateValue } = useTranslateXRef(0, 100, 0);
  const { elementRef: bottomRightElementRef, updateTranslateValue: updateBottomRightTranslateValue } = useTranslateXRef(0, 100, 0);


  useAnimationTimer([
    updateTopLeftTranslateValue,
    updateTopRightTranslateValue,
    updateBottomLeftTranslateValue,
    updateBottomRightTranslateValue,
  ], 1000);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <main
        className={`
          ${styles.sliderRow}
          ${styles.top}
        `}
      >
        <div
          ref={topLeftElementRef}
          className={styles.logoSlider}
        >
          {
            [...carouselLogos].map((logo, index) => {
              return (
                <ImageWrapper key={`top left slider image${index}`} parentStyles={styles}>
                  <Image
                    src={logo}
                    alt={`${index}`}
                    sizes="20em"
                    fill
                  />
                </ImageWrapper>
              );
            })
          }
        </div>
        <div
          ref={topRightElementRef}
          className={styles.logoSlider}
        >
          {
            [...carouselLogos].map((logo, index) => {
              return (
                <ImageWrapper key={`top right slider image${index}`} parentStyles={styles}>
                  <Image
                    src={logo}
                    alt={`${index}`}
                    sizes="20em"
                    fill
                  />
                </ImageWrapper>
              );
            })
          }
        </div>
      </main>

      <main
        className={`
          ${styles.sliderRow}
          ${styles.bottom}
        `}
      >
        <div
          ref={bottomLeftElementRef}
          className={styles.logoSlider}
        >
          {
            [...carouselLogos].reverse().map((logo, index) => {
              return (
                <ImageWrapper key={`bottom left slider image${index}`} parentStyles={styles}>
                  <Image
                    src={logo}
                    alt={`${index}`}
                    sizes="20em"
                    fill
                  />
                </ImageWrapper>
              );
            })
          }
        </div>
        <div
          ref={bottomRightElementRef}
          className={styles.logoSlider}
        >
          {
            [...carouselLogos].reverse().map((logo, index) => {
              return (
                <ImageWrapper key={`bottom right slider image${index}`} parentStyles={styles}>
                  <Image
                    src={logo}
                    alt={`${index}`}
                    sizes="20em"
                    fill
                  />
                </ImageWrapper>
              );
            })
          }
        </div>
      </main>

    </PageSectionWrapper>
  );
}