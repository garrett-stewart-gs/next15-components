
import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";
import ArticleMosaicElement from "@/components/scaffoldingComponents/ArticleWrapper/ArticleMosaicElement";

import styles from "./HorizontalMosaic.module.css";

export default function HorizonatalMosaic({
  mosaicName = "Daylight Screen Options Mosaic",
  mosaicImage,
  mosaicArray,
  horizontalOffsetPercentage = 0,
  verticalOffsetPercentage = 0,
  zoomFactor = 1,
}) {

  return (
    <main
      className={styles.horizontalMosaic}
    >
      <HorizontalCarouselWrapper>
        {
          mosaicArray.map((mosaicElement, index) => {
            return (
              <ArticleMosaicElement
                key={`${mosaicName} ${index}`}
                numberOfColumns={mosaicArray.length}
                mosaicImageSrc={mosaicImage.src}
                currentIndex={index}
                {...mosaicElement}
                verticalOffsetPercentage={verticalOffsetPercentage}
                horizontalOffsetPercentage={horizontalOffsetPercentage}
                zoomFactor={zoomFactor}
              />
            );
          })
        }
      </HorizontalCarouselWrapper>
    </main>
  );
}