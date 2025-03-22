"use client";
import React, { useEffect, useRef } from "react";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";
import { useHorizontalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";

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

const useHorizontalScrollListener = (completeHandleBack, completeHandleNext) => {
  const viewportRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const throttleDelay = 300; // milliseconds

  useEffect(() => {
    const container = viewportRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      if (event.shiftKey) {
        event.preventDefault(); // Prevent default vertical scroll
        const now = Date.now();
        if (now - lastScrollTimeRef.current > throttleDelay) {
          if (event.deltaY < 0) {
            completeHandleBack();
          } else {
            completeHandleNext();
          }
          lastScrollTimeRef.current = now;
        }
      }
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [completeHandleBack, completeHandleNext]);

  return viewportRef;
};


// handleBack and handleNext pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
// you can provide an inner closure function that writes data to child state object, giving the carousel's parents access to control child state (ex. enable parents buttons to control child)
export default function HorizontalCarouselWrapper({ itemsPerSection = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, sendChildStateMethods = null, children }) {

  
  // use array state tracking based on number of children
  const childrenArr = React.Children.toArray(children);
  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    currentArrayLength: numberOfItems,
  } = useActiveIndex(childrenArr.length);
  
  // if custom behavior provided (handleBack/handleNext), then append custom behavior to increment/decrement. 
  // If not, simply increment/decrement
  const completeHandleBack = async () => handleBack === null ? decrementActiveIndex(loop, itemsPerSection) : (await handleBack(activeIndex, numberOfItems) && decrementActiveIndex(loop, itemsPerSection));
  const completeHandleNext = async () => handleNext === null ? incrementActiveIndex(loop, itemsPerSection) : (await handleNext(activeIndex, numberOfItems) && incrementActiveIndex(loop, itemsPerSection));
  
  // if parent needs ability to increment/decrement carousel (child) state, run function that delivers state manipulator to parent. parent needs to store value in outer closure, while the callback is defined as the inner closure
  if (sendChildStateMethods !== null) sendChildStateMethods(completeHandleBack, completeHandleNext);
  
  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHorizontalSwipeTracker(completeHandleBack, completeHandleNext);
  
  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const viewportRef = useHorizontalScrollListener(completeHandleBack, completeHandleNext);

  const {
    carouselWidth,
    itemWidth,
    translatePercentage,
    animationTime
  } = calculateHtmlProperties(activeIndex, numberOfItems, itemsPerSection, transitionSpeed);

  return (
    <main // carousel viewport
      ref={viewportRef}
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
          childrenArr.map((child, childIndex) => {
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