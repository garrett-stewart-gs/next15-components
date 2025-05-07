"use client";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";
import ArticleMosaicElement from "@/components/scaffoldingComponents/ArticleWrapper/ArticleMosaicElement";
import InfoPopUpWindow from "../InfoPopUpWindow";

import styles from "./HorizontalMosaic.module.css";

export default function HorizonatalMosaic({
  mosaicName = "Daylight Screen Options Mosaic",
  mosaicImage,
  mosaicArray,
  horizontalOffsetPercentage = 0,
  verticalOffsetPercentage = 0,
  zoomFactor = 1,
}) {

  const { activeIndex, toggleActiveIndex } = useActiveIndex(mosaicArray.length, null);

  return (
    <main
      className={`
        ${styles.horizontalMosaic}
      `}
    >

      <HorizontalCarouselWrapper>
        {
          mosaicArray.map((mosaicElement, index) => {
            return (
              <ArticleMosaicElement
                key={`${mosaicName} ${index}`}
                activeIndex={activeIndex}
                onClick={toggleActiveIndex}
                numberOfColumns={mosaicArray.length}
                mosaicImage={mosaicImage}
                currentIndex={index}
                size={mosaicElement.size}
                verticalOffsetPercentage={verticalOffsetPercentage}
                horizontalOffsetPercentage={horizontalOffsetPercentage}
                zoomFactor={zoomFactor}
              />
            );
          })
        }
      </HorizontalCarouselWrapper>


      <div
        className={`
          ${styles.screenOptionInformationWindow}
          ${activeIndex !== null ? styles.active : ""}
        `}
        onClick={() => toggleActiveIndex(activeIndex)}
      >
        {
          activeIndex !== null && 
          <InfoPopUpWindow
            {...mosaicArray[activeIndex]}
          />
        }

      </div>

    </main>
  );
}