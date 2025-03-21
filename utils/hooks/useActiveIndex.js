"use client";

import { useState } from "react";

// use this function to track the active array element.
// state is tracked with a single integer value || null when no index is active
// 
export function useActiveIndex(arrayLength, initialIndex = 0) {

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  let currentArrayLength = arrayLength;

  const incrementActiveIndex = (loop = true, value = 1) => {
    setActiveIndex(prev => {

      if (activeIndex === null) return -1 + value;

      if (!loop) return (prev + value > currentArrayLength - 1) ? prev : prev + value;

      if (loop) return (prev + value > currentArrayLength - 1) ? 0 : prev + value;

    });
  };

  const decrementActiveIndex = (loop = true, value = 1) => {
    setActiveIndex(prev => {

      if (activeIndex === null) return currentArrayLength - value;

      if (!loop) return (prev - value < 0) ? 0 : prev - value;

      if (prev - value < 0) return arrayLength - value;

      return prev - value;

    });
  };

  const setNewActiveIndex = (newIndex) => (newIndex <= currentArrayLength - 1 && newIndex >= 0) && setActiveIndex(prev => newIndex);

  const deactivateActiveIndex = () => setActiveIndex(prev => null);

  const toggleActiveIndex = (newIndex) => {

    if (newIndex === null) return deactivateActiveIndex();

    return setNewActiveIndex(newIndex);

  };

  const updateCurrentArrayLength = (newArrayLength) => currentArrayLength = newArrayLength;//setCurrentArrayLength(prev => newArrayLength);

  return {
    activeIndex, // can be set to null + any valid integer index. null reflects that no array element is active
    incrementActiveIndex, // increases active index value by 1, sets to 0 if incrementing out of bounds
    decrementActiveIndex, // decreases active index value by 1, sets to endingIndex if decrementing out of bounds
    setNewActiveIndex, // sets active index to provided index value
    deactivateActiveIndex, // sets active index value to null, useful if you want to deactivate an element
    toggleActiveIndex, // toggles the element between null and index value. useful if you want to activate/deactivate an element by clicking on it repeatedly
    currentArrayLength,
    updateCurrentArrayLength, // changes the array length value to reflect array mutation. USE SPARINGLY AS LAST RESORT
  };

}