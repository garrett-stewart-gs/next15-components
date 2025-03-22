"use client";
import React, { useEffect , useRef } from "react";

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

const createVerticalScrollListener = (completeHandleBack, completeHandleNext) => {
  const viewportRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const throttleDelay = 300; // milliseconds

  useEffect(() => {
    const currentViewport = viewportRef.current;
    if (!currentViewport) return;

    const handleWheel = (event) => {
      // Ignore shift+scroll events
      if (event.shiftKey) return;
      
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
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

    currentViewport.addEventListener("wheel", handleWheel);
    return () => currentViewport.removeEventListener("wheel", handleWheel);
  }, [completeHandleBack, completeHandleNext]);

  return viewportRef;
};


// handleBack and handleNext essentially pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
export default function VerticalCarouselWrapper({ itemsPerSection = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, sendChildStateMethods = null, children }) {

  
  // create array state tracking based on number of children
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
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useVerticalSwipeTracker(completeHandleBack, completeHandleNext);

  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const viewportRef = createVerticalScrollListener(completeHandleBack, completeHandleNext); // creates scroll listener and returns useRef object

  const {
    carouselHeight,
    itemHeight,
    translatePercentage,
    animationTime
  } = calculateHtmlProperties(activeIndex, numberOfItems, itemsPerSection, transitionSpeed);

  return (
    <main // carousel viewport
      ref={viewportRef}
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