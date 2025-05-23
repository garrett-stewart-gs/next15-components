
import Image from "next/image";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";
import ImageWrapper from "@/components/scaffoldingComponents/ImageWrapper";
import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";

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

        <HorizontalCarouselWrapper
          parentActiveIndexState={activeIndex}
          setNewActiveIndex={setNewActiveIndex}
          handleBack={() => decrementActiveIndex()}
          handleNext={() => incrementActiveIndex()}
          enableArrowControls={true}
          enableSelectorControls={true}
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

      </section>

    </main>
  );
}