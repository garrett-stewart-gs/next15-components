"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { useHorizontalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";
import { useHorizontalScrollTracker } from "@/utils/hooks/useScrollTrackers";
import { useHorizontalCarouselSlider } from "@/utils/hooks/useCarouselTransitions";
import { useViewportVisibilityTracker } from "@/utils/hooks/useVisibilityTrackers";

import LeftArrowIcon from "@/components/reusableComponents/ArrowIcons/LeftArrowIcon";
import RightArrowIcon from "@/components/reusableComponents/ArrowIcons/RightArrowIcon";
import HorizontalCarouselIndexSelectorControls from "./HorizontalCarouselIndexSelectorControls";

import styles from "./HorizontalCarouselWrapper.module.css";


// handleBack and handleNext pass current array information to parent, allowing you to give custom instructions to the carousel
// (activeIndex is react state initialized in the carousel wrapper)
// (numberOfItems is determined by number of children)
// you can provide an inner closure function that writes data to child state object, giving the carousel's parents access to control child state (ex. enable parents buttons to control child)
export default function HorizontalCarouselWrapper({
  incrementAmount = 1,
  loop = false,
  parentActiveIndexState = null,
  setNewActiveIndex = null,
  handleBack = null,
  handleNext = null,
  enableArrowControls = false, // toggles left/right arrow buttons for incrementing/decrementing the carousel position
  enableSelectorControls = false, // toggles index selector icons for selecting a specific carousel element to display
  matchElementAndViewportWidths = false, // determines if xCarouselElement size is determined by viewport width OR its own contents
  disableAdaptiveHeight = false, // determines if carousel height is set by all elements OR visible elements only
  transitionSpeed = 0.15,
  parentStyles = null,
  children
}) {

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

  // consolidate parent/regular instructions for decrement/reverse events
  const completeHandleBack = async () => (handleBack !== null) ? // check if parent has provided instructions
    (await handleBack() && translateCarouselNegative()) // check if parent has provided instructions
    :
    translateCarouselNegative(); // run regular instructions only

  // consolidate parent/regular instructions for increment/forward events
  const completeHandleNext = async () => (handleNext !== null) ? // check if parent has provided instructions
    (await handleNext() && translateCarouselPositive()) // check if parent has provided instructions
    :
    translateCarouselPositive();// run regular instructions only

  // track and synchronize parent state with carousel translation
  // if parent active index state changes, translates carousel slider to correct position
  const lastIndexState = useRef(parentActiveIndexState);
  useEffect(() => {
    if (parentActiveIndexState === null) return;
    if (parentActiveIndexState === lastIndexState.current) return;
    const indexChange = parentActiveIndexState - lastIndexState.current;
    (indexChange < 0) ? translateCarouselNegative(indexChange) : translateCarouselPositive(indexChange);
    lastIndexState.current = parentActiveIndexState;
  }, [parentActiveIndexState]);

  // enable swipe tracking and custom behavior when swipe occurs, USING SWIPE TRACKER HOOK
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHorizontalSwipeTracker(completeHandleBack, completeHandleNext);

  // enable shift+scroll behavior USING SCROLL LISTENER HOOK
  const { handleHorizontalScroll } = useHorizontalScrollTracker(completeHandleBack, completeHandleNext);

  // tracks which carousel elements are inside the viewport, and applies .active class
  // elements without .active class have max-height limited to 0;
  useViewportVisibilityTracker(childrenArr, viewportRef, childRefs, styles, 0.1);

  return (
    <main
      className={styles.xCarouselFullContainer}
    >
      <div
        className={styles.xCarouselArrowsAndViewportContainer}
      >

        {
          enableArrowControls && <LeftArrowIcon onClick={completeHandleBack} />
        }

        <div // carousel viewport
          ref={viewportRef}
          className={`
        ${styles.xCarouselViewport}
        ${parentStyles ? parentStyles.xCarouselViewport : ""}
      `}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleHorizontalScroll}
        >
          <div // carousel (overflows the viewport)
            ref={carouselRef}
            className={`
          ${styles.xCarousel}
          ${parentStyles ? parentStyles.xCarousel : ""}
        `}
          >
            {
              childrenArr.map((child, childIndex) => {
                return (
                  <div
                    ref={child => childRefs.current[childIndex] = child}
                    key={`horizontal carousel element ${childIndex}`}
                    className={`
                  ${styles.xCarouselElement}
                  ${disableAdaptiveHeight ? "" : styles.adaptiveHeight}
                  ${matchElementAndViewportWidths ? styles.matchesViewportWidth : ""}
                  ${parentStyles ? parentStyles.xCarouselElement : ""}
                `}
                  >
                    {child}
                  </div>
                );
              })
            }
          </div>

        </div>

        {
          enableArrowControls && <RightArrowIcon onClick={completeHandleNext} />
        }

      </div>

      {
        enableSelectorControls &&
        parentActiveIndexState !== null &&
        setNewActiveIndex !== null &&
        (
          < HorizontalCarouselIndexSelectorControls
            numberOfElements={childrenArr.length}
            parentActiveIndexState={parentActiveIndexState}
            setNewActiveIndex={setNewActiveIndex}
            parentStyles={parentStyles}
          />
        )
      }


    </main>
  );
}