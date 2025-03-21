"use client";
import React from "react";

import styles from "./HorizontalCarouselWrapper.module.css";


const calculateHtmlProperties = (activeIndex, numberOfItems, itemsPerSection, transitionSpeed) => {
  const viewportWidth = 100;
  const carouselWidth = viewportWidth * numberOfItems / itemsPerSection;
  const itemWidth = viewportWidth / numberOfItems;
  const translatePercentage = -activeIndex * itemWidth;
  const animationTime = transitionSpeed * itemsPerSection;

  return {
    viewportWidth,
    carouselWidth,
    itemWidth,
    translatePercentage,
    animationTime,
  };

};

export default function HorizontalCarouselWrapper({ activeIndex, numberOfItems, itemsPerSection = 1, handleTouchStart, handleTouchMove, handleTouchEnd, transitionSpeed = 0.15, children }) {

  const {
    carouselWidth,
    itemWidth,
    translatePercentage,
    animationTime
  } = calculateHtmlProperties(activeIndex, numberOfItems, itemsPerSection, transitionSpeed);

  return (
    <main // carousel viewport
      className={styles.xCarouselViewport}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div // carousel (overflows the viewport)
        className={styles.xCarousel}
        style={{
          width: `${carouselWidth}%`,
          transform: `translateX(${translatePercentage}%)`,
          transition: `transform ${animationTime}s ease-out`,
        }}
      >
        {
          React.Children.toArray(children).map((child, childIndex) => {
            const siblingNumber = childIndex - activeIndex;
            return (
              <div
                key={`horizontal carousel element ${childIndex}`}
                className={`
                  ${styles.xCarouselElement}
                  ${siblingNumber >= 0 && siblingNumber < itemsPerSection ? styles.active : ""}
                `}
                style={{ flex: `0 0 ${itemWidth}%` }}
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