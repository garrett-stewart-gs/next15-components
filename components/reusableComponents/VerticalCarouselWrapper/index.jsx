"use client";
import React from "react";

import styles from "./VerticalCarouselWrapper.module.css";

const calculateHtmlProperties = (activeIndex, numberOfItems, itemsPerSection, transitionSpeed) => {
  const viewportHeight = 100;
  const carouselHeight = viewportHeight * numberOfItems / itemsPerSection;
  const itemHeight = viewportHeight / numberOfItems;
  const translatePercentage = -activeIndex * itemHeight;
  const animationTime = transitionSpeed * itemsPerSection;

  return {
    viewportHeight,
    carouselHeight,
    itemHeight,
    translatePercentage,
    animationTime,
  };

};

export default function VerticalCarouselWrapper({ activeIndex, numberOfItems, itemsPerSection = 1, handleTouchStart, handleTouchMove, handleTouchEnd, transitionSpeed = 0.15, children }) {

  const {
    carouselHeight,
    itemHeight,
    translatePercentage,
    animationTime
  } = calculateHtmlProperties(activeIndex, numberOfItems, itemsPerSection, transitionSpeed);

  return (
    <main // carousel viewport
      className={styles.yCarouselViewport}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
      }}
    >
      <div // carousel (overflows the viewport)
        className={styles.yCarousel}
        style={{
          height: `${carouselHeight}%`,
          transform: `translateY(${translatePercentage}%)`,
          transition: `transform ${animationTime}s ease-out`,
        }}
      >
        {

          React.Children.toArray(children).map((child, childIndex) => {
            const siblingNumber = childIndex - activeIndex;
            return (
              <div
                key={`vertical carousel element ${childIndex}`}
                className={`
                  ${styles.yCarouselElement}
                  ${siblingNumber >= 0 && siblingNumber < itemsPerSection ? styles.active : ""}
                `}
                style={{height: `${itemHeight}%`, }}
              >
                {child}
              </div>
            );
          }
          )

        }
      </div>

    </main>
  );
}