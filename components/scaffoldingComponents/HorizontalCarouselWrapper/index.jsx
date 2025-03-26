"use client";

import React, { useEffect, useRef } from "react";

import { useHorizontalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";
import { useHorizontalScrollTracker } from "@/utils/hooks/useScrollTrackers";
import { useHorizontalCarouselSlider } from "@/utils/hooks/useCarouselTransitions";

import styles from "./HorizontalCarouselWrapper.module.css";
import { useViewportVisibilityTracker } from "@/utils/hooks/useVisibilityTrackers";


// handleBack and handleNext pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
// you can provide an inner closure function that writes data to child state object, giving the carousel's parents access to control child state (ex. enable parents buttons to control child)
export default function HorizontalCarouselWrapper({ parentActiveIndexState = null, incrementAmount = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, sendChildStateMethods = null, customElementStylesObj = null, children }) {

  // use array state tracking based on number of children
  const childrenArr = React.Children.toArray(children);
  const numberOfItems = childrenArr.length;
  const childRefs = useRef([]);

  // extract viewport and carousel refs and apply slider transitions
  const {
    viewportRef,
    carouselRef,
    translateCarouselNegative,
    translateCarouselPositive,
  } = useHorizontalCarouselSlider(numberOfItems, transitionSpeed, incrementAmount, loop);

  // if custom behavior provided (handleBack/handleNext), then append custom behavior to increment/decrement. 
  // If not, simply increment/decrement
  const completeHandleBack = async () => (handleBack !== null) ? (await handleBack() && translateCarouselNegative()) : translateCarouselNegative();
  const completeHandleNext = async () => (handleNext !== null) ? (await handleNext() && translateCarouselPositive()) : translateCarouselPositive();

  const lastIndexState = useRef(parentActiveIndexState);
  useEffect(() => { 
    if (parentActiveIndexState === null) return;
    if (parentActiveIndexState === lastIndexState.current) return;
    (parentActiveIndexState < lastIndexState.current) ? translateCarouselNegative() : translateCarouselPositive();
    lastIndexState.current = parentActiveIndexState;
  }, [parentActiveIndexState]);

  // if parent needs ability to increment/decrement carousel (child) state, run function that delivers state manipulator to parent. parent needs to store value in outer closure, while the callback is defined as the inner closure
  if (sendChildStateMethods !== null) sendChildStateMethods(completeHandleBack, completeHandleNext);

  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHorizontalSwipeTracker(completeHandleBack, completeHandleNext);

  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const { handleHorizontalScroll } = useHorizontalScrollTracker(completeHandleBack, completeHandleNext);

  // tracks which carousel elements are inside the viewport, and applies .active class
  // elements without .active class have max-height limited to 0;
  useViewportVisibilityTracker(childrenArr, viewportRef, childRefs, styles, 0.1);

  return (
    <main // carousel viewport
      ref={viewportRef}
      className={styles.xCarouselViewport}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleHorizontalScroll}
    >
      <div // carousel (overflows the viewport)
        ref={carouselRef}
        className={styles.xCarousel}
      >
        {
          childrenArr.map((child, childIndex) => {
            return (
              <div
                ref={child => childRefs.current[childIndex] = child}
                key={`horizontal carousel element ${childIndex}`}
                className={`
                  ${styles.xCarouselElement}
                  ${styles.active} 
                `}
              >
                {child}
              </div>
            );
          })
        }
      </div>

    </main>
  );
}