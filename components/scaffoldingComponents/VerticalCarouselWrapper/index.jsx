"use client";
import React, { useEffect, useRef } from "react";

import { useVerticalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";
import { useVerticalScrollTracker } from "@/utils/hooks/useScrollTrackers";
import { useVerticalCarouselSlider } from "@/utils/hooks/useCarouselTransitions";
import { useViewportVisibilityTracker } from "@/utils/hooks/useVisibilityTrackers";

import styles from "./VerticalCarouselWrapper.module.css";

// handleBack and handleNext essentially pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
export default function VerticalCarouselWrapper({ parentActiveIndexState = null, incrementAmount = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, sendChildStateMethods = null, children }) {

  // create array state tracking based on number of children
  const childrenArr = React.Children.toArray(children);
  const numberOfItems = childrenArr.length;
  const childRefs = useRef([]);

  const {
    viewportRef,
    carouselRef,
    translateCarouselNegative,
    translateCarouselPositive,
  } = useVerticalCarouselSlider(numberOfItems, transitionSpeed, incrementAmount, loop);

  // if custom behavior provided (handleBack/handleNext), then append custom behavior to increment/decrement. 
  // If not, simply increment/decrement
  const completeHandleBack = async () => (handleBack !== null) ? (await handleBack() && translateCarouselNegative()) : translateCarouselNegative();
  const completeHandleNext = async () => (handleNext !== null) ? (await handleNext() && translateCarouselPositive()) : translateCarouselPositive();

  const lastIndexState = useRef(parentActiveIndexState);
  useEffect(() => {
    if (parentActiveIndexState === null) return;
    if (parentActiveIndexState === lastIndexState.current) return;
    const indexChange = parentActiveIndexState - lastIndexState.current;
    (indexChange < 0) ? translateCarouselNegative(indexChange) : translateCarouselPositive(indexChange);
    lastIndexState.current = parentActiveIndexState;
  }, [parentActiveIndexState]);

  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useVerticalSwipeTracker(completeHandleBack, completeHandleNext);

  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const { handleVerticalScroll } = useVerticalScrollTracker(completeHandleBack, completeHandleNext);

  // tracks which carousel elements are inside the viewport, and applies .active class
  useViewportVisibilityTracker(childrenArr, viewportRef, childRefs, styles, 0.1);

  return (
    <main // carousel viewport
      ref={viewportRef}
      className={styles.yCarouselViewport}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleVerticalScroll}
    >
      <div // carousel (overflows the viewport)
        ref={carouselRef}
        className={styles.yCarousel}
      >
        {

          React.Children.toArray(children).map((child, childIndex) => {
            return (
              <div
                ref={(child) => childRefs.current[childIndex] = child}
                key={`vertical carousel element ${childIndex}`}
                className={`
                  ${styles.yCarouselElement}
                `}
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