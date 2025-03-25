"use client";

import { useRef, useEffect } from "react";

export function useHorizontalCarouselSlider(
  activeIndex,
  numberOfItems,
  transitionSpeed,
  incrementAmount,
) {

  // obtain refs for carousel viewport + carousel
  // these objects are returned, and must also be assigend to their corresponding carousel elements
  const viewportRef = useRef(null);
  const carouselRef = useRef(null);

  // calculate necessary values;


  const translatePerItem = 100 / numberOfItems;
  const animationTime = transitionSpeed * incrementAmount;


  useEffect(() => {

    // determine current/relavent dimensions of viewport and carousel
    const {
      width: viewportWidth,
      right: viewportRight,
    } = viewportRef.current.getBoundingClientRect();

    const {
      width: carouselWidth,
      right: carouselRight,
    } = carouselRef.current.getBoundingClientRect();

    const translateAmount = activeIndex * translatePerItem;
    const maxTranslateAmount = 100 * (carouselWidth - viewportWidth) / carouselWidth;

    const calculatedTranslateAmount = translateAmount < maxTranslateAmount ? translateAmount : maxTranslateAmount;

    carouselRef.current.style.transition = `transform ${animationTime}s ease-out`;
    carouselRef.current.style.transform = `translateX(-${calculatedTranslateAmount}%)`;


  }, [activeIndex]);


  return {
    viewportRef,
    carouselRef,
  };

}

export function useVerticalCarouselSlider(activeIndex) {

}