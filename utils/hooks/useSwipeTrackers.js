"use client";

import { useRef } from "react";

export function useHorizontalSwipeTracker(handleSwipeNegative, handleSwipePositive) {

  const startX = useRef(0); // starting x-position
  const deltaX = useRef(0); // change in x-position
  const threshold = 50; // sets minimum swipe distance to trigger navigation

  // sets starting coordinates
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  // updates current position as swipe occurs. function activates rapidly?
  const handleTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  // compares final x position with starting x position when touch swipe ends
  const handleTouchEnd = () => {

    // if swipe positive (left)
    if (deltaX.current < -threshold) handleSwipePositive();

    // if swipe negative (right)
    if (deltaX.current > threshold) handleSwipeNegative();

  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

export function useVerticalSwipeTracker(handleSwipeNegative, handleSwipePositive) {

  const startY = useRef(0); // starting y-position
  const deltaY = useRef(0); // change in x-position
  const threshold = 50; // sets minimum swipe distance to trigger navigation

  // sets starting coordinates
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    deltaY.current = 0;
  };

  // updates current position as swipe occurs. function activates rapidly?
  const handleTouchMove = (e) => {
    deltaY.current = e.touches[0].clientY - startY.current;
  };

  // compares final x position with starting x position when touch swipe ends
  const handleTouchEnd = () => {
    // if swipe positive (up)
    if (deltaY.current < -threshold) handleSwipePositive();

    // if swipe negative (down)
    if (deltaY.current > threshold ) handleSwipeNegative();

  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}