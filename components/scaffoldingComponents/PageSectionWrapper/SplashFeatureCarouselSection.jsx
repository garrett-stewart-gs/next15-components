

import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";

import PageSectionWrapper from ".";
import ArticleFeatureMessageWithImage from "../ArticleWrapper/ArticleFeatureMessageWithImage";

import styles from "./SplashFeatureCarouselSection.module.css";

export default function SplashFeatureCarouselSection({ splashFeatureArrObj }) {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <HorizontalCarouselWrapper
        loop={true}
        fitToParent={true}
        matchElementAndViewportWidths={true}
        enableArrowControls={true}
        // enableSelectorControls={true}
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