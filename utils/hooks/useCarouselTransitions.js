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

  const translateCarouselPositive = (numberOfInputs = 1) => {

    const { paddingLeft, paddingRight } = window.getComputedStyle(viewportRef.current);
    const calculatedViewportPadding = parseFloat(paddingLeft) + parseFloat(paddingRight);

    const viewportWidth = viewportRef.current.getBoundingClientRect().width - calculatedViewportPadding;
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;

    const maxTranslateAmount = -100 * (carouselWidth - viewportWidth) / carouselWidth;

    const translateAmount = translatePerInput * Math.abs(numberOfInputs);

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
    if (lastTranslatePercentValue.current + translateAmount <= maxTranslateAmount) { // note that translateAmount is negative (hence, + operator)
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass max translate value, translate carousel left
    if (lastTranslatePercentValue.current + translateAmount > maxTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current + translateAmount);
      return translateCarousel();
    }

  };

  const translateCarouselNegative = (numberOfInputs = 1) => {

    const { paddingLeft, paddingRight } = window.getComputedStyle(viewportRef.current);
    const calculatedViewportPadding = parseFloat(paddingLeft) + parseFloat(paddingRight);

    const viewportWidth = viewportRef.current.getBoundingClientRect().width - calculatedViewportPadding;
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;

    const maxTranslateAmount = -100 * (carouselWidth - viewportWidth) / carouselWidth;
    const minTranslateAmount = 0;

    const translateAmount = translatePerInput * Math.abs(numberOfInputs);

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
    if (lastTranslatePercentValue.current - translateAmount >= minTranslateAmount) {
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass min translate value, translate carousel right
    if (lastTranslatePercentValue.current - translateAmount < minTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current - translateAmount);
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

  const translateCarouselPositive = (numberOfInputs = 1) => {

    const { paddingTop, paddingBottom } = window.getComputedStyle(viewportRef.current);
    const calculatedViewportPadding = parseFloat(paddingTop) + parseFloat(paddingBottom);

    const viewportHeight = viewportRef.current.getBoundingClientRect().height - calculatedViewportPadding;
    const carouselHeight = carouselRef.current.getBoundingClientRect().height;

    const maxTranslateAmount = -100 * (carouselHeight - viewportHeight) / carouselHeight;

    const translateAmount = translatePerInput * Math.abs(numberOfInputs);

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
    if (lastTranslatePercentValue.current + translateAmount <= maxTranslateAmount) { // note that translateAmount is negative (hence, + operator)
      updateTranslateValue(maxTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass max translate value, translate carousel left
    if (lastTranslatePercentValue.current + translateAmount > maxTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current + translateAmount);
      return translateCarousel();
    }

  };

  const translateCarouselNegative = (numberOfInputs = 1) => {

    const { paddingTop, paddingBottom } = window.getComputedStyle(viewportRef.current);
    const calculatedViewportPadding = parseFloat(paddingTop) + parseFloat(paddingBottom);

    const viewportHeight = viewportRef.current.getBoundingClientRect().height - calculatedViewportPadding;
    const carouselHeight = carouselRef.current.getBoundingClientRect().height;

    const maxTranslateAmount = -100 * (carouselHeight - viewportHeight) / carouselHeight;
    const minTranslateAmount = 0;

    const translateAmount = translatePerInput * Math.abs(numberOfInputs);

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
    if (lastTranslatePercentValue.current - translateAmount >= minTranslateAmount) {
      updateTranslateValue(minTranslateAmount);
      return translateCarousel();
    }

    // if next translate does not meet or surpass min translate value, translate carousel right
    if (lastTranslatePercentValue.current - translateAmount < minTranslateAmount) {
      updateTranslateValue(lastTranslatePercentValue.current - translateAmount);
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