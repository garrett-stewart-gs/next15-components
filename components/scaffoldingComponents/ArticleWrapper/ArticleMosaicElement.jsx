"use client";

import useActiveClass from "@/utils/hooks/useActiveClass";

import ArticleWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ImageWrapper from "../ImageWrapper";

import styles from "./ArticleMosaicElement.module.css";

export default function ArticleMosaicElement({
  currentIndex,
  numberOfColumns,
  mosaicImageSrc,
  size,
  useCase,
  audienceSize,
  footprint,
  height,
  horizontalOffsetPercentage = 0,
  verticalOffsetPercentage = 0,
  zoomFactor = 1,
}) {

  const { isActive, addActiveClass, removeActiveClass } = useActiveClass();

  // determine how big to expand background image. percentage value (ie. 300%, 480%, etc.)
  const backgroundSizeWidth = numberOfColumns * 100 * zoomFactor;

  // determine how much this element's background image should be shifted left
  // const offsetPercentagePerStep = numberOfColumns > 1 ?
  //   (100 * zoomFactor) / (numberOfColumns * zoomFactor - 1)
  //   :
  //   0;

  const offsetPercentagePerStep = numberOfColumns > 1 ?
  (100 ) / (numberOfColumns * zoomFactor - 1)
  :
  0;

  const currentOffsetPercentage = offsetPercentagePerStep * currentIndex + horizontalOffsetPercentage;

  return (
    <ArticleWrapper parentStyles={styles}>

      <main
        className={`
          ${styles.mosaicElementContainer}
          ${isActive ? styles.active : ""}
        `}
        
        style={{
          backgroundImage: `url(${mosaicImageSrc})`,
          backgroundSize: `${(backgroundSizeWidth)}%`, // expand image to display correct percentage of full image
          backgroundPosition: `${currentOffsetPercentage}% ${verticalOffsetPercentage}%`, // slide image by correct offset amount to display correct section of full image
          backgroundRepeat: "no-repeat",
        }}
      >

        <TextStyleWrapper parentStyles={styles}>
          <p>{size}</p>
        </TextStyleWrapper>

        <TextStyleWrapper parentStyles={styles}>
          <p>{useCase}</p>
          <p>{audienceSize}</p>
          <p>{footprint}</p>
          <p>{height}</p>
        </TextStyleWrapper>

      </main>

    </ArticleWrapper>
  );
}