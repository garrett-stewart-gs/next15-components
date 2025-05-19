"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// sets a interval timer that runs your callback function every x milliseconds, default 10000ms = 10sec
export function useAnimationTimer(animationArr, interval = 1000) {

  // create storage for timer key (for pausing/resuming/cleanup of timer)
  const timerRef = useRef(null);

  // create function that resumes the timer, should be bound to an event
  const startTimer = useCallback(
    () => {
      //resetTimer
      clearInterval(timerRef.current);
      timerRef.current = setInterval(
        () => {
          animationArr.forEach(animation => animation());
        },
        interval
      );
    },
    []
  );

  // create function that pauses the timer, should be bound to an event
  const endTimer = useCallback(
    () => {
      // reset timer
      clearInterval(timerRef.current);
      // clear old timer key
      timerRef.current = null;
    },
    []
  );


  useEffect(
    () => {
      startTimer(); // starts timer on mount
      return endTimer; // ends timer and cleanup on dismount
    },
    [] // trigger the timer on mount/dismount
  );

  return {
    resumeTimer: startTimer,
    pauseTimer: endTimer,
  };

}

export function useContinuousTranslateX(isShiftingRight = false, step = 0.1) {

  const parentRef = useRef(null); // passed to component
  const child1Ref = useRef(null); // internal ref only
  const child2Ref = useRef(null); // internal ref only

  const hasBeenInitialized = useRef(false); // track if animation has been initialized/run previously

  const getElementRect = (elementRef) => elementRef.current.getBoundingClientRect();

  const readElementTranslateValuePx = (elementRef) => {
    // grab the “matrix(a, b, c, d, tx, ty)” string
    const transformMatrixString = getComputedStyle(elementRef.current).transform;
    // extract the tx value, and convert to float
    return parseFloat(transformMatrixString.match(/matrix.*\((.+)\)/)[1].split(', ')[4]);
  };

  const convertTranslateValueInPxToPercent = (translateValueInPx, elementRef) => {
    const elementWidthInPx = getElementRect(elementRef).width;
    return (translateValueInPx / elementWidthInPx) * 100;
  };

  const getElementTranslateXPercent = (elementRef) => {
    const translateXValueInPx = readElementTranslateValuePx(elementRef);
    return convertTranslateValueInPxToPercent(translateXValueInPx, elementRef);
  };

  const isTranslateXPercentWithinRange = (translateXPercent, elementRef) => {
    return translateXPercent >= elementRef.min && translateXPercent <= elementRef.max ? true : false;
  };

  const applyTranslateXPercentToElement = (elementRef, translatePercent) => elementRef.current.style.transform = `translateX(${translatePercent}%)`;

  const applyOpacityToElement = (elementRef, opacityValue) => elementRef.current.style.opacity = `${opacityValue}`;

  const initializeAnimationProperties = () => {

    // record that animation properties have been initialized
    hasBeenInitialized.current = true;

    // obtain childRefs
    child1Ref.current = parentRef.current.children[0];
    child2Ref.current = parentRef.current.children[1];

    // assign individual min/max values to childRefs
    child1Ref["min"] = isShiftingRight ? 0 : -100;
    child1Ref["max"] = isShiftingRight ? 200 : 100;
    child2Ref["min"] = isShiftingRight ? -100 : -200;
    child2Ref["max"] = isShiftingRight ? 100 : 0;

    // apply initial translate percentages to children
    if (isShiftingRight) { // shifting right
      applyTranslateXPercentToElement(child1Ref, child1Ref.min);
      applyTranslateXPercentToElement(child2Ref, 0);
    } else { // shifting left
      applyTranslateXPercentToElement(child1Ref, 0);
      applyTranslateXPercentToElement(child2Ref, child2Ref.max);
    }

  };

  const handleElementTranslateXAnimation = () => {

    // if element ref not initialized yet, return
    if (!parentRef.current) return;

    // if uninitialized, initialize animation properties and return
    if (!hasBeenInitialized.current) return initializeAnimationProperties();

    // obtain current translateX values
    const currentChild1TranslateXPercent = getElementTranslateXPercent(child1Ref);
    const currentChild2TranslateXPercent = getElementTranslateXPercent(child2Ref);

    // calculate new translateX values, based on shifting direction (isShiftingRight boolean)
    const newChild1TranslateXPercent = isShiftingRight ? currentChild1TranslateXPercent + step : currentChild1TranslateXPercent - step;
    const newChild2TranslateXPercent = isShiftingRight ? currentChild2TranslateXPercent + step : currentChild2TranslateXPercent - step;

    // apply new translateX percentage to child 1
    if (!isTranslateXPercentWithinRange(newChild1TranslateXPercent, child1Ref)) { // if new percentage is out of range

      // hide element temporarily
      applyOpacityToElement(child1Ref, 0);

      // apply translateX percentage that corresponds to starting location
      isShiftingRight ?
        applyTranslateXPercentToElement(child1Ref, child1Ref.min) // shifting right
        :
        applyTranslateXPercentToElement(child1Ref, child1Ref.max); // shifting left

      // show temporarily hidden element
      applyOpacityToElement(child1Ref, 1);

    } else { // if new percentage is within range
      applyTranslateXPercentToElement(child1Ref, newChild1TranslateXPercent);
    }

    // apply new translateX percentage to child 2
    if (!isTranslateXPercentWithinRange(newChild2TranslateXPercent, child2Ref)) { // if new percentage is out of range

      // hide element temporarily
      applyOpacityToElement(child2Ref, 0);

      // apply translateX percentage that corresponds to starting location
      isShiftingRight ?
        applyTranslateXPercentToElement(child2Ref, child2Ref.min) // shifting right
        :
        applyTranslateXPercentToElement(child2Ref, child2Ref.max); // shifting left

      // show temporarily hidden element
      applyOpacityToElement(child2Ref, 1);

    } else { // if new percentage is within range
      applyTranslateXPercentToElement(child2Ref, newChild2TranslateXPercent);
    }

  };

  return {
    parentRef,
    handleElementTranslateXAnimation,
  };

}

