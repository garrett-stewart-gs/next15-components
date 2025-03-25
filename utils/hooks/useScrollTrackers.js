"use client";

import { useRef } from "react";


export function useHorizontalScrollTracker(handleScrollNegative, handleScrollPositive, throttleDelay = 300) {

  const timeOfLastScroll = useRef(0);

  const handleHorizontalScroll = (e) => {

    // verify that scroll event was triggered with shift key active (horizontal scroll, not vertical)
    if (!e.shiftKey) return;

    // get exact time
    const now = Date.now();
    
    // verify throttle delay is not active (throttle prevents scroll event from triggering multiple times per user scroll)
    if (Date.now() - timeOfLastScroll.current < throttleDelay) return;

    // update most recent horizontal scroll time
    timeOfLastScroll.current = Date.now();

    // execute the correct callback action, depending on if mouse scroll event has positive/negative value
    return e.deltaY < 0 ? handleScrollNegative() : handleScrollPositive();

  };

  return {
    handleHorizontalScroll,
  };
}

export function useVerticalScrollTracker(handleScrollNegative, handleScrollPositive, throttleDelay = 300) {

  const timeOfLastScroll = useRef(0);

  const handleVerticalScroll = (e) => {

    // get exact time
    const now = Date.now();
    
    // verify throttle delay is not active (throttle prevents scroll event from triggering multiple times per user scroll)
    if (Date.now() - timeOfLastScroll.current < throttleDelay) return;

    // update most recent Vertical scroll time
    timeOfLastScroll.current = Date.now();

    // execute the correct callback action, depending on if mouse scroll event has positive/negative value
    return e.deltaY < 0 ? handleScrollNegative() : handleScrollPositive();

  };

  return {
    handleVerticalScroll,
  };
}