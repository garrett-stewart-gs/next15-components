"use client";

import { useEffect, useState, useRef } from "react";

import throttle from "lodash/throttle";

const convertPxValueToEm = (elementWidthPx, elementFontSize) => elementWidthPx / elementFontSize;

function calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY) {

  // determine current scroll position
  const currentScrollYPosition = window.scrollY;

  // if animation shouldn't start yet, set percentage to 0
  if (currentScrollYPosition <= startAnimationAtScrollY) return 0;

  // if animation should be finished, set percentage to 1
  if (currentScrollYPosition >= endAnimationAtScrollY) return 1;

  // if animation is taking place, calculate percentage of completion (ie. 0-1)
  return (currentScrollYPosition - startAnimationAtScrollY) / (endAnimationAtScrollY - startAnimationAtScrollY);

}

function calculateCurrentValue(initialValue, endingValue, animationProgressPercentage) {

  // determine maximum change in scale
  const maximumChangeInValue = endingValue - initialValue;

  const currentChangeInValue = maximumChangeInValue * animationProgressPercentage;

  // calculate current scale factor based on animation progress percentage
  return Number((initialValue + currentChangeInValue).toFixed(2));

}

function useVerticalScrollCount(throttleDuration = 300) {

  // create state for tracking user scroll events
  const [currentScrollCount, setCurrentScrollCount] = useState(0); // positive integer counting number of user scroll inputs. up = -1, down = +1 (intended for animations that do not need to sync with page position)

  // update scroll count state 
  const handleScroll = () => setCurrentScrollCount(prev => prev + 1);

  // prevent multiple scroll events from firing
  const throttleHandleScroll = throttle(handleScroll, throttleDuration, {
    leading: false, // stops event handler from firing at first mouse scroll event
    trailing: true, // fires event handler on final mouse scroll event
  });

  // bind event listener to window on mount, and cleanup event listener on dismount
  useEffect(() => {
    window.addEventListener('scroll', throttleHandleScroll, { passive: true }); // passive true argument disables preventDefault() on this event (should optimize/smooth scroll behaviors)
    return () => {
      window.removeEventListener('scroll', throttleHandleScroll, { passive: true });
    };
  }, []);

  return {
    currentScrollCount,
  };

}

export function useScrollScaleElementWidth(
  elementRef,
  endingWidthInEms = 12.5,
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1
) {

  // track user scroll activity
  const { currentScrollCount } = useVerticalScrollCount(); // integer value that changes whenever user triggers scroll event (also triggers useEffect)

  // create storage for starting/finishing element widths
  // these values are set to null, then set when the element is mounted (value is reset once only)
  const initialElementWidthInEms = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial width hasn't been retrieved/stored, determine and store initial width
    if (initialElementWidthInEms.current === null) {
      // determine current font-size in px (for converting to ems)
      const elementFontSize = parseFloat(getComputedStyle(elementRef.current).fontSize);
      // determine element's starting width in px
      const initialElementWidthInPx = elementRef.current.getBoundingClientRect().width;
      // convert element's starting width to ems (for improved scaling)
      initialElementWidthInEms.current = convertPxValueToEm(initialElementWidthInPx, elementFontSize);
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // determine current width, based on initial width, ending width, and animation progress
    const newWidth = calculateCurrentValue(initialElementWidthInEms.current, endingWidthInEms, animationProgressPercentage);

    // Set the computed width to the element.
    elementRef.current.style.width = `${newWidth}em`;
    // elementRef.current.style.maxWidth = `${newWidth}em`;

  }, [currentScrollCount]);

}

export function useScrollScaleElementHeight(
  elementRef,
  endingHeightInEms = 6.25,
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1
) {

  // track user scroll activity
  const { currentScrollCount } = useVerticalScrollCount(); // integer value that changes whenever user triggers scroll event (also triggers useEffect)

  // create storage for starting/finishing element height
  // this value is set to null, then set when the element is mounted (value is reset once only)
  const initialElementHeightInEms = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial Height hasn't been retrieved/stored, determine and store initial Height
    if (initialElementHeightInEms.current === null) {
      // determine current font-size in px (for converting to ems)
      const elementFontSize = parseFloat(getComputedStyle(elementRef.current).fontSize);
      // determine element's starting Height in px
      const initialElementHeightInPx = elementRef.current.getBoundingClientRect().height;
      // convert element's starting Height to ems (for improved scaling)
      initialElementHeightInEms.current = convertPxValueToEm(initialElementHeightInPx, elementFontSize);
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // determine current height, based on
    const newHeight = calculateCurrentValue(initialElementHeightInEms.current, endingHeightInEms, animationProgressPercentage);

    // Set the computed width to the element.
    elementRef.current.style.height = `${newHeight}em`;
    // elementRef.current.style.maxHeight = `${newHeight}em`;

  }, [currentScrollCount]);

}

export function useScrollScaleElementPaddingBottom(
  elementRef,
  endingPaddingInEms = 0,
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1,
) {

  const { currentScrollCount } = useVerticalScrollCount();

  const initialElementPaddingBottomInEms = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial width hasn't been retrieved/stored, determine and store initial width
    if (initialElementPaddingBottomInEms.current === null) {
      // determine current font-size in px (for converting to ems)
      const elementFontSize = parseFloat(getComputedStyle(elementRef.current).fontSize);
      // determine element padding bottom in px
      const elementPaddingBottomInPx = parseFloat(getComputedStyle(elementRef.current).paddingBottom);
      // convert padding to em units
      initialElementPaddingBottomInEms.current = convertPxValueToEm(elementPaddingBottomInPx, elementFontSize);
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // determine current padding bottom, based on initial padding, ending padding, and animation progress
    const newPaddingBottom = calculateCurrentValue(initialElementPaddingBottomInEms.current, endingPaddingInEms, animationProgressPercentage);

    // assign new padding bottom value to element ref
    elementRef.current.style.paddingBottom = `${newPaddingBottom}em`;

  }, [currentScrollCount]);

}

export function useScrollTranslateXElement(
  elementRef,
  endingTranslatePercentage = 0, // percentage in decimal form. can be negative or positve. (ie. -50% = -0.5, 100% = 1)
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1,
) {

  const { currentScrollCount } = useVerticalScrollCount();

  const initialTranslatePercentage = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial translate percentage hasn't been retrieved/stored, determine initial translate percentage (ie. 50% = 0.5, -100% = -1)
    if (initialTranslatePercentage.current === null) {
      const transformMatrixString = getComputedStyle(elementRef.current).transform;
      initialTranslatePercentage.current = transformMatrixString === "none" ?
        0
        :
        (new DOMMatrix(transformMatrixString).m41 / elementRef.current.getBoundingClientRect().width);
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // calculate new translateX percentage based on initial translate percentage, ending translate percentage, and animation progress percentage
    const newTranslatePercentage = calculateCurrentValue(initialTranslatePercentage.current, endingTranslatePercentage, animationProgressPercentage) * 100;

    // apply new tranlsate percentage
    elementRef.current.style.transform = `translateX(${newTranslatePercentage}%)`;

  }, [currentScrollCount]);

}

export function useScrollAnimateAbsoluteLeft(
  elementRef,
  endingLeftPercentage = 0,
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1,
) {

  const { currentScrollCount } = useVerticalScrollCount();

  const initialLeftPercentage = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial left value hasn't been retrieved/stored, determine initial left value (should only run once)
    if (initialLeftPercentage.current === null) {
      // grab parent element
      const parentElement = elementRef.current.parentElement;
      // grab parent element width
      const parentWidthInPx = parentElement.getBoundingClientRect().width;
      // grab element's left offset compared to parent (element.left - parent.left)
      const elementLeftOffsetRelativeToParentInPx = elementRef.current.offsetLeft;
      // calculate element's left percentage value based on parent (left offset / parent width)
      initialLeftPercentage.current = elementLeftOffsetRelativeToParentInPx / parentWidthInPx;
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // determine current left value, based on initial left value, ending left value, and animation progress
    const newLeftPercentage = calculateCurrentValue(initialLeftPercentage.current, endingLeftPercentage, animationProgressPercentage) * 100;

    // assign new left percentage value to element
    elementRef.current.style.left = `${newLeftPercentage}%`;

  }, [currentScrollCount]);

}

export function useScrollAnimateOpacity(
  elementRef,
  endingOpacityPercentage = 0,
  startAnimationAtScrollY = 0,
  endAnimationAtScrollY = 1,
) {

  const { currentScrollCount } = useVerticalScrollCount();

  const initialOpacityPercentage = useRef(null);

  useEffect(() => {

    // if element is not mounted (null), return early
    if (!elementRef.current) return;

    // if initial Opacity hasn't been retrieved/stored, determine and store initial Opacity
    if (initialOpacityPercentage.current === null) {
      // determine element's starting Opacity percentage (ie. 0.5 = 50%, 1 = 100%)
      initialOpacityPercentage.current = parseFloat(getComputedStyle(elementRef.current).opacity);
    }

    // determine animation progress, based on window.scrollY, and starting/ending animation points
    const animationProgressPercentage = calculateAnimationProgress(startAnimationAtScrollY, endAnimationAtScrollY);

    // determine current opacity, based on initial width, ending width, and animation progress
    const newOpacity = calculateCurrentValue(initialOpacityPercentage.current, endingOpacityPercentage, animationProgressPercentage);

    // assign current opacity to elementRef
    elementRef.current.style.opacity = `${newOpacity}`;

  }, [currentScrollCount]);

}