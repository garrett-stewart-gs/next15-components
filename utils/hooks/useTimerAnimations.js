"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const convertPxValueToEm = (elementWidthPx, elementFontSize) => elementWidthPx / elementFontSize;

function calculateAnimationProgress() {

}

function calculateCurrentValue(initialValue, endingValue, animationProgressPercentage) {

  // determine maximum change in scale
  const maximumChangeInValue = endingValue - initialValue;

  const currentChangeInValue = maximumChangeInValue * animationProgressPercentage;

  // calculate current scale factor based on animation progress percentage
  return Number((initialValue + currentChangeInValue).toFixed(2));

}

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
          animationArr.forEach(animation => animation())
        },
        [interval]
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

export function useTranslateXRef(
  startingTranslateXPercent = 100, // places element at far right/left at 0%
  endingTranslateXPercent = -100, // places element at far left/right at 100%;
  startingAnimationProgress = 50, // places element in center at 50%
) {

  const elementRef = useRef(null);
  const totalTranslatePercentChange = useRef(endingTranslateXPercent - startingTranslateXPercent);
  const currentAnimationProgress = useRef(startingAnimationProgress);

  const updateTranslateValue = () => {

    // if element ref not initialized yet, return
    if (!elementRef.current) return;

    // calculate current translate percent change
    const currentTranslatePercentage = startingTranslateXPercent + (totalTranslatePercentChange.current * currentAnimationProgress.current / 100);

    console.log('new calculated currentTranslatePercentage: ', currentTranslatePercentage)

    // apply new translateX value to element
    elementRef.current.style.transform = `translateX(${currentTranslatePercentage}%)`;

    // increment currentAnimation progress, or loop if animation finished
    currentAnimationProgress.current = currentAnimationProgress.current < 100 ? 
      currentAnimationProgress.current + 1
      :
      0;
  };

  return {
    elementRef,
    updateTranslateValue,
  };

}

