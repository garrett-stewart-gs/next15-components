
import Image from "next/image";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";


import PopUpWindowWrapper from ".";
import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";
import ImageWrapper from "@/components/scaffoldingComponents/ImageWrapper";
import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";

import styles from "./InfoAndDiagramPopUp.module.css";

export default function InfoAndDiagramPopUp({
  isActive,
  title,
  paragraphs,
  diagram,
  onClick = () => { },
}) {

  const {
    activeIndex,
    decrementActiveIndex,
    incrementActiveIndex,
    setNewActiveIndex
  } = useActiveIndex(2);

  return (
    <PopUpWindowWrapper parentStyles={styles} isActive={isActive} onClick={onClick}>

      <TextStyleWrapper parentStyles={styles}>
        <p>{title}</p>
      </TextStyleWrapper>



      <HorizontalCarouselWrapper
        parentActiveIndexState={activeIndex}
        setNewActiveIndex={setNewActiveIndex}
        handleBack={() => decrementActiveIndex()}
        handleNext={() => incrementActiveIndex()}
        isCarouselDisplayed={isActive}
        fitToParent={true}
        // matchElementAndViewportWidths={true}
        enableArrowControls={true}
        enableSelectorControls={true}
        parentStyles={styles}
      >

        <TextStyleWrapper parentStyles={styles}>
          {
            paragraphs.map((paragraph, index) => <p key={`Pop Up Information paragraph ${index}`}>{paragraph}</p>)
          }
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



    </PopUpWindowWrapper>
  );
}