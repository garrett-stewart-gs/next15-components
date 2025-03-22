"use client";
import React from "react";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";
import { useVerticalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";

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


// handleBack and handleNext essentially pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
export default function VerticalCarouselWrapper({ itemsPerSection = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, children }) {

  // create array state tracking based on number of children
  const childrenArr = React.Children.toArray(children);
  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    currentArrayLength: numberOfItems,
  } = useActiveIndex(childrenArr.length);

  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useVerticalSwipeTracker( // takes 2 functions as arguements (these are instructions for the swipe tracker when the user )
    async () => handleBack === null ?
      decrementActiveIndex(loop, itemsPerSection)
      :
      (await handleBack(activeIndex, numberOfItems) && decrementActiveIndex(loop, itemsPerSection))
    ,
    async () => handleNext === null ?
      incrementActiveIndex(loop, itemsPerSection)
      :
      (await handleNext(activeIndex, numberOfItems) && incrementActiveIndex(loop, itemsPerSection))
  );

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
                style={{ height: `${itemHeight}%`, }}
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