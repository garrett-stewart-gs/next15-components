
import PageSectionWrapper from ".";

import ArticleFeatureMessageWithImage from "../ArticleWrapper/ArticleFeatureMessageWithImage";

import styles from "./FeatureSection.module.css";

export default function FeatureSection({ title1, title2, paragraph, imageSrc }) {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <ArticleFeatureMessageWithImage
        title1={title1}
        title2={title2}
        paragraph={paragraph}
        imageSrc={imageSrc}
      />

    </PageSectionWrapper>
  );
}