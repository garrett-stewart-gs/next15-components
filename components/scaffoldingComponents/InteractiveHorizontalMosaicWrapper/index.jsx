"use client";

import React from "react";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";

import styles from "./InteractiveHorizontalMosaicWrapper.module.css";

// creates closure and concise function for grabbing each element's mosaic properties
const initializeMosaicProperties = (
  mosaicImage,
  numberOfColumns,
  horizontalOffsetPercentage,
  verticalOffsetPercentage,
  zoomFactor,
) => {

  // determine how big to expand background image. percentage value (ie. 300%, 480%, etc.)
  const backgroundSizeWidth = numberOfColumns * 100 * zoomFactor;

  // determine how much this element's background image should be shifted left
  const offsetPercentagePerStep = numberOfColumns > 1 ?
    (100) / (numberOfColumns * zoomFactor - 1)
    :
    0;

  const getCurrentMosaicElementProperties = (currentIndex) => {

    // determine current offset amount for nth mosaic element
    const currentOffsetPercentage = offsetPercentagePerStep * currentIndex + horizontalOffsetPercentage;

    return {
      backgroundImage: `url(${mosaicImage})`,
      backgroundSize: `${(backgroundSizeWidth)}%`, // expand image to display correct percentage of full image
      backgroundPosition: `${currentOffsetPercentage}% ${verticalOffsetPercentage}%`, // slide image by correct offset amount to display correct section of full image
      backgroundRepeat: "no-repeat",
    };
  };

  return getCurrentMosaicElementProperties;

};

export default function InteractiveHorizonatalMosaicWrapper({
  mosaicImage,
  mosaicArray,
  horizontalOffsetPercentage = 0,
  verticalOffsetPercentage = 0,
  zoomFactor = 1,
  children, // all children must be html mosaic elements, EXCEPT LAST CHILD which must be an interactive pop-up html element
}) {

  const childrenArr = React.Children.toArray(children);
  const mosaicElements = childrenArr.slice(0, -1);
  const interactivePopUp = childrenArr[childrenArr.length - 1];

  const {
    activeIndex, // for toggling interactive popup visibility
    toggleActiveIndex, // takes index or null argument. index determines which data is displayed, null deactivates the element entirely
  } = useActiveIndex(mosaicArray.length, null);  // null argument stops interactive pop-up from being rendered on first load

  const getCurrentMosaicElementProperties = initializeMosaicProperties(
    mosaicImage,
    mosaicElements.length,
    horizontalOffsetPercentage,
    verticalOffsetPercentage,
    zoomFactor
  );

  // contains the detailed info corresponding to the active mosaic element, unless activeIndex is null, in which case, it defaults to the first mosaic element
  // the pop up display is hidden when it is not active. 
  // populating with first mosaic element info prevents crash on null condition and ensures compatibility with various mosaic element formats
  const popUpDisplayInfo = activeIndex !== null ? mosaicArray[activeIndex] : mosaicArray[0];

  return (
    <main
      className={`
        ${styles.mosaicContainer}
        ${activeIndex !== null ? styles.active : ""}
      `}
    >
      <HorizontalCarouselWrapper>
        {
          mosaicElements.map((mosaicElement, index) => {
            return (
              // must clone the extracted child to pass it new arguments (specific mosaic element data)
              React.cloneElement(
                mosaicElement,
                {
                  // key: `horizontal mosaic element ${index}`,
                  onClick: () => toggleActiveIndex(index),
                  styleObj: getCurrentMosaicElementProperties(index), // runs and obtains style properties object immediately
                }
              )
            );
          })
        }
      </HorizontalCarouselWrapper>

      {
        // must clone the extracted child to pass it new arguments (specific mosaic element data)
        React.cloneElement(
          interactivePopUp,
          {
            isActive: activeIndex !== null, // applies .active class to mosaic wrapper when index is not null
            ...popUpDisplayInfo, // contains correct properties with empty values when active index is null
            onClick: () => toggleActiveIndex(activeIndex),
          }
        )
      }

    </main >
  );
}