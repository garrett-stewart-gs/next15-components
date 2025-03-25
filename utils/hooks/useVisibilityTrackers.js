"use client";

import { useEffect, useRef } from "react";

const createIntersectionObserver = (viewportRef, threshold, styles = null) => {
  // creates observer
  return new IntersectionObserver(
    // If the child is intersecting, add the "active" class; otherwise, remove it.
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(`${styles ? styles.active : "active"}`);
        if (!entry.isIntersecting) entry.target.classList.remove(`${styles ? styles.active : "active"}`);
      });
    },
    {
      root: viewportRef.current,
      threshold,
    },
  );
};


// used to determine if 
export function useViewportVisibilityTracker(childrenArr, viewportRef, childRefs, styles = null, threshold = 0.1) {
  useEffect(() => {

    // create observer object that adds/removes active class from the child elements if they are "colliding"/visible in the viewport
    const viewportObserver = createIntersectionObserver(viewportRef, threshold, styles);

    // register all of the children refs with the viewportObserver object
    childRefs.current.forEach((childRef) => childRef && viewportObserver.observe(childRef));

    return () => viewportObserver.disconnect();
  }, [childrenArr, viewportRef, childRefs, threshold]);
}