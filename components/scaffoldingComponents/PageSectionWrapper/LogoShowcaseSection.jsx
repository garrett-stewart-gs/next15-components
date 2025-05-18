"use client";

import Image from "next/image";

import { useAnimationTimer, useContinuousTranslateX, useTranslateXRef } from "@/utils/hooks/useTimerAnimations";

import { ourClientsLogos } from "./ImageImports";
const { carouselLogos } = ourClientsLogos;

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ImageWrapper from "../ImageWrapper";

import styles from "./LogoShowcaseSection.module.css";

export default function LogoShowcaseSection() {

  // define continuous translateX hook arguments
  const moveLeft = false; // for 1st argument for hook: false means move left
  const moveRight = true; // for 1st argument for hook: true means move right
  const stepPerInterval = 0.0075; // #1 of 2 variables that govern translation speed 

  // extract refs for top/bottom logo slider rows + animation handler function
  const { parentRef: topParent, handleElementTranslateXAnimation: handleTopTranslateXAnimation } = useContinuousTranslateX(moveLeft, stepPerInterval);
  const { parentRef: bottomParent, handleElementTranslateXAnimation: handleBottomTranslateXAnimation } = useContinuousTranslateX(moveRight, stepPerInterval);

  // create a collection of all functions to run at every interval
  const scheduledCallbacks = [handleTopTranslateXAnimation, handleBottomTranslateXAnimation];

  // define interval timing in milliseconds
  const animationTimerInteval = 10; // #2 of 2 variables that govern translation speed

  // set interval timer for scheduled callbacks + extract functions for pausing/resuming the timer for mouse events 
  const { pauseTimer, resumeTimer } = useAnimationTimer(scheduledCallbacks, animationTimerInteval);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>Our Clients</h1>
        <h2>Join the FAM!</h2>
      </TextStyleWrapper>

      <main
        className={styles.slidersWrapper}
        onMouseEnter={pauseTimer}
        onMouseLeave={resumeTimer}
      >
        <section
          ref={topParent}
          className={`
          ${styles.sliderParent}
          ${styles.top}
        `}
        >
          <div
            className={styles.slider}
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
            className={styles.slider}
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
        </section>

        <section
          ref={bottomParent}
          className={`
          ${styles.sliderParent}
          ${styles.bottom}
        `}
        >
          <div
            className={styles.slider}
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
            className={styles.slider}
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
        </section>
      </main>

    </PageSectionWrapper>
  );
}