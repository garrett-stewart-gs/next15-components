"use client";

import { useRef, useEffect } from "react";

export function useHorizontalCarouselSlider(
  numberOfItems,
  transitionSpeed,
  incrementAmount,
  loop = false,
) {

  // obtain refs for carousel viewport + carousel
  // these objects are returned, and must also be assigend to their corresponding carousel elements
  const viewportRef = useRef(null);
  const carouselRef = useRef(null);
  const lastTranslatePercentValue = useRef(0);

  // calculate necessary values;
  const translatePerInput = -100 / numberOfItems * incrementAmount;
  const animationTime = transitionSpeed * incrementAmount;

  const updateTranslateValue = (newTranslatePercentValue) => lastTranslatePercentValue.current = newTranslatePercentValue;

  const translateCarousel = () => {
    carouselRef.current.style.transition = `transform ${animationTime}s ease-out`;
    carouselRef.current.style.transform = `translateX(${lastTranslatePercentValue.current}%)`;
  };

  const translateCarouselPositive = () => {
    const viewportDimensions = viewportRef.current.getBoundingClientRect();
    const carouselDimensions = carouselRef.current.getBoundingClientRect();
    const maxTranslateAmount = -100 * (carouselDimensions.width - viewportDimensions.width) / carouselDimensions.width;

    // if last translate percentage was set to maximum, loop to beginning/0 or stay at max, depending on loop variable
    if (lastTranslatePercentValue.current === maxTranslateAmount) {
      if (loop) {
        updateTranslateValue(0);
        return translateCarousel();
      }
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate would meet or surpasses max translate value, translate to max
    if (lastTranslatePercentValue.current + translatePerInput <= maxTranslateAmount) { // note that translatePerInput is negative (hence, + operator)
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass max translate value, translate carousel left
    if (lastTranslatePercentValue.current + translatePerInput > maxTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current + translatePerInput);
      return translateCarousel();
    }

  };

  const translateCarouselNegative = () => {

    const viewportDimensions = viewportRef.current.getBoundingClientRect();
    const carouselDimensions = carouselRef.current.getBoundingClientRect();
    const maxTranslateAmount = -100 * (carouselDimensions.width - viewportDimensions.width) / carouselDimensions.width;
    const minTranslateAmount = 0;

    // if last translate percentage was set to maximum, loop to end/max or stay at beginning, depending on loop variable
    if (lastTranslatePercentValue.current === minTranslateAmount) {
      if (loop) {
        updateTranslateValue(maxTranslateAmount);
        return translateCarousel();
      }
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate would meet or surpass min translate value, translate to min
    if (lastTranslatePercentValue.current - translatePerInput >= minTranslateAmount) {
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass min translate value, translate carousel right
    if (lastTranslatePercentValue.current - translatePerInput < minTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current - translatePerInput);
      return translateCarousel();
    }

  };

  return {
    viewportRef,
    carouselRef,
    translateCarouselNegative,
    translateCarouselPositive,
  };

}

export function useVerticalCarouselSlider(
  numberOfItems,
  transitionSpeed,
  incrementAmount,
  loop = false,
) {

  // obtain refs for carousel viewport + carousel
  // these objects are returned, and must also be assigend to their corresponding carousel elements
  const viewportRef = useRef(null);
  const carouselRef = useRef(null);
  const lastTranslatePercentValue = useRef(0);

  // calculate necessary values;
  const translatePerInput = -100 / numberOfItems * incrementAmount;
  const animationTime = transitionSpeed * incrementAmount;

  const updateTranslateValue = (newTranslatePercentValue) => lastTranslatePercentValue.current = newTranslatePercentValue;

  const translateCarousel = () => {
    carouselRef.current.style.transition = `transform ${animationTime}s ease-out`;
    carouselRef.current.style.transform = `translateY(${lastTranslatePercentValue.current}%)`;
  };

  const translateCarouselPositive = () => {
    const viewportDimensions = viewportRef.current.getBoundingClientRect();
    const carouselDimensions = carouselRef.current.getBoundingClientRect();
    const maxTranslateAmount = -100 * (carouselDimensions.height - viewportDimensions.height) / carouselDimensions.height;

    // if last translate percentage was set to maximum, loop to beginning/0 or stay at max, depending on loop variable
    if (lastTranslatePercentValue.current === maxTranslateAmount) {
      if (loop) {
        updateTranslateValue(0);
        return translateCarousel();
      }
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate would meet or surpasses max translate value, translate to max
    if (lastTranslatePercentValue.current + translatePerInput <= maxTranslateAmount) { // note that translatePerInput is negative (hence, + operator)
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass max translate value, translate carousel left
    if (lastTranslatePercentValue.current + translatePerInput > maxTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current + translatePerInput);
      return translateCarousel();
    }

  };

  const translateCarouselNegative = () => {

    const viewportDimensions = viewportRef.current.getBoundingClientRect();
    const carouselDimensions = carouselRef.current.getBoundingClientRect();
    const maxTranslateAmount = -100 * (carouselDimensions.height - viewportDimensions.height) / carouselDimensions.height;
    const minTranslateAmount = 0;

    // if last translate percentage was set to maximum, loop to end/max or stay at beginning, depending on loop variable
    if (lastTranslatePercentValue.current === minTranslateAmount) {
      if (loop) {
        updateTranslateValue(maxTranslateAmount);
        return translateCarousel();
      }
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate would meet or surpass min translate value, translate to min
    if (lastTranslatePercentValue.current - translatePerInput >= minTranslateAmount) {
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass min translate value, translate carousel right
    if (lastTranslatePercentValue.current - translatePerInput < minTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current - translatePerInput);
      return translateCarousel();
    }

  };

  return {
    viewportRef,
    carouselRef,
    translateCarouselNegative,
    translateCarouselPositive,
  };

}