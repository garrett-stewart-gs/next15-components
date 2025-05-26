"use client";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";
import PageSectionWrapper from ".";
import ArticleFeatureMessageWithImage from "../ArticleWrapper/ArticleFeatureMessageWithImage";

import styles from "./SplashFeatureCarouselSection.module.css";

export default function SplashFeatureCarouselSection({ splashFeatureArrObj }) {

  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    setNewActiveIndex,
  } = useActiveIndex(splashFeatureArrObj.length);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <HorizontalCarouselWrapper
        loop={true}
        fitToParent={true}
        matchElementAndViewportWidths={true}
        enableArrowControls={true}
        parentActiveIndexState={activeIndex}
        handleBack={()=>decrementActiveIndex(true)}
        handleNext={()=>incrementActiveIndex(true)}
        setNewActiveIndex={setNewActiveIndex}
        enableSelectorControls={true}
        // disableAdaptiveHeight={true}
      >
        {

          splashFeatureArrObj.map((splashFeatureObj, index) => {
            return (
              <ArticleFeatureMessageWithImage
                parentStyles={styles}
                key={`splash feature carousel article# ${index}`}
                {...splashFeatureObj}
              />
            );
          })

        }
      </HorizontalCarouselWrapper>

    </PageSectionWrapper>
  );
}