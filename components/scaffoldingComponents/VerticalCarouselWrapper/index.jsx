"use client";
import React, { useRef } from "react";

import { useVerticalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";
import { useVerticalScrollTracker } from "@/utils/hooks/useScrollTrackers";
import { useVerticalCarouselSlider } from "@/utils/hooks/useCarouselTransitions";
import { useViewportVisibilityTracker } from "@/utils/hooks/useVisibilityTrackers";

import styles from "./VerticalCarouselWrapper.module.css";

// handleBack and handleNext essentially pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
export default function VerticalCarouselWrapper({ incrementAmount = 1, handleBack = null, handleNext = null, loop = false, transitionSpeed = 0.15, sendChildStateMethods = null, children }) {

  // create array state tracking based on number of children
  const childrenArr = React.Children.toArray(children);
  const numberOfItems = childrenArr.length;
  const childRefs = useRef([]);
  // // ensures array is the exact correct length
  // useEffect(() => {
  //   childRefs.current = childRefs.current.slice(0, numberOfItems);
  // }, [childrenArr]);

  const {
    viewportRef,
    carouselRef,
    translateCarouselNegative,
    translateCarouselPositive,
  } = useVerticalCarouselSlider(numberOfItems, transitionSpeed, incrementAmount, loop);

  // NEED TO KEEP THIS FOR NOW, NEED TO UPDATE CUSTOM FORM
  // if custom behavior provided (handleBack/handleNext), then append custom behavior to increment/decrement. 
  // If not, simply increment/decrement
  // const completeHandleBack = async () => handleBack === null ? decrementActiveIndex(loop, incrementAmount) : (await handleBack(activeIndex, numberOfItems) && decrementActiveIndex(loop, incrementAmount));
  // const completeHandleNext = async () => handleNext === null ? incrementActiveIndex(loop, incrementAmount) : (await handleNext(activeIndex, numberOfItems) && incrementActiveIndex(loop, incrementAmount));

  const completeHandleBack = async () => translateCarouselNegative();
  const completeHandleNext = async () => translateCarouselPositive();


  // if parent needs ability to increment/decrement carousel (child) state, run function that delivers state manipulator to parent. parent needs to store value in outer closure, while the callback is defined as the inner closure
  if (sendChildStateMethods !== null) sendChildStateMethods(completeHandleBack, completeHandleNext);

  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useVerticalSwipeTracker(completeHandleBack, completeHandleNext);

  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const { handleVerticalScroll } = useVerticalScrollTracker(completeHandleBack, completeHandleNext);

  useViewportVisibilityTracker(viewportRef, childRefs, styles, 0.1);

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