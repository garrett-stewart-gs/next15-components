"use client";

import ArticleWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import styles from "./ArticleMosaicElement.module.css";

export default function ArticleMosaicElement({
  // activeIndex,
  onClick,
  currentIndex,
  numberOfColumns,
  mosaicImage,
  size,
  horizontalOffsetPercentage = 0,
  verticalOffsetPercentage = 0,
  zoomFactor = 1,
}) {

  // determine how big to expand background image. percentage value (ie. 300%, 480%, etc.)
  const backgroundSizeWidth = numberOfColumns * 100 * zoomFactor;

  // determine how much this element's background image should be shifted left
  const offsetPercentagePerStep = numberOfColumns > 1 ?
    (100) / (numberOfColumns * zoomFactor - 1)
    :
    0;

  // determine current offset amount for nth mosaic element
  const currentOffsetPercentage = offsetPercentagePerStep * currentIndex + horizontalOffsetPercentage;

  return (
    <ArticleWrapper parentStyles={styles}>

      <main
        className={`
          ${styles.mosaicElementContainer}
          `}
        onClick={() => onClick(currentIndex)}
        style={{
          backgroundImage: `url(${mosaicImage})`,
          backgroundSize: `${(backgroundSizeWidth)}%`, // expand image to display correct percentage of full image
          backgroundPosition: `${currentOffsetPercentage}% ${verticalOffsetPercentage}%`, // slide image by correct offset amount to display correct section of full image
          backgroundRepeat: "no-repeat",
        }}
      >

        <TextStyleWrapper parentStyles={styles}>
          <p>{size}</p>
        </TextStyleWrapper>

      </main>

    </ArticleWrapper>
  );
}