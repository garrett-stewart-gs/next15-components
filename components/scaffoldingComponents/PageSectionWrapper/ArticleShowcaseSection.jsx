"use client";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";

import ArticleLink from "../ArticleWrapper/ArticleLink";

import styles from "./ArticleShowcaseSection.module.css";

export default function ArticleShowcaseSection({ title1, title2, articleArrObj }) {

  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
  } = useActiveIndex(articleArrObj.length);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h3>{title1}</h3>
        <h4>{title2}</h4>
      </TextStyleWrapper>

      <HorizontalCarouselWrapper
        parentActiveIndexState={activeIndex}
        handleBack={() => decrementActiveIndex()}
        handleNext={() => incrementActiveIndex()}
      >
        {
          articleArrObj.map((articleObj, index) => <ArticleLink key={`Home Page Article ${index}`} articleObj={articleObj} />)
        }
      </HorizontalCarouselWrapper>

    </PageSectionWrapper>
  );
}