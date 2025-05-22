
import Image from "next/image";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";
import ImageWrapper from "@/components/scaffoldingComponents/ImageWrapper";
import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";
import HorizontalCarouselArrowControls from "@/components/scaffoldingComponents/HorizontalCarouselArrowControls";
import HorizontalCarouselIndexSelectorControls from "@/components/scaffoldingComponents/HorizontalCarouselWrapper/HorizontalCarouselIndexSelectorControls";

import styles from "./InfoPopUpWindow.module.css";

export default function InfoPopUpWindow({
  size,
  useCase,
  audienceSize,
  footprint,
  height,
  diagram,
}) {

  const {
    activeIndex,
    decrementActiveIndex,
    incrementActiveIndex,
    setNewActiveIndex
  } = useActiveIndex(2);

  return (
    <main className={styles.infoPopUpWindow}>

      <TextStyleWrapper parentStyles={styles}>
        <p>{size}</p>
      </TextStyleWrapper>

      <section className={styles.infoWindowCarouselContainer}>

        <HorizontalCarouselArrowControls
          handleLeft={(e) => {
            e.stopPropagation();
            decrementActiveIndex();
          }}
          handleRight={(e) => {
            e.stopPropagation();
            incrementActiveIndex();
          }}
          parentStyles={styles}
        >
          <HorizontalCarouselWrapper
            parentActiveIndexState={activeIndex}
            handleBack={() => decrementActiveIndex()}
            handleNext={() => incrementActiveIndex()}
            parentStyles={styles}
          >

            <TextStyleWrapper parentStyles={styles}>
              <p>{useCase}</p>
              <p>{audienceSize}</p>
              <p>{footprint}</p>
              <p>{height}</p>
            </TextStyleWrapper>

            <ImageWrapper parentStyles={styles}>
              <Image
                src={diagram}
                alt="Screen Diagram"
                sizes="60em"
                fill
              />
            </ImageWrapper>


          </HorizontalCarouselWrapper>
        </HorizontalCarouselArrowControls>

        <HorizontalCarouselIndexSelectorControls
          numberOfElements={2}
          parentActiveIndexState={activeIndex}
          setNewActiveIndex={setNewActiveIndex}
          parentStyles={styles}
        />

      </section>

    </main>
  );
}