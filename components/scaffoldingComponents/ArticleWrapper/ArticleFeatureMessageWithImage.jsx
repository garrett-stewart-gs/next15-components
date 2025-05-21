
import Image from "next/image";

import ArticleWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ImageWrapper from "../ImageWrapper";

import styles from "./ArticleFeatureMessageWithImage.module.css";

export default function ArticleFeatureMessageWithImage({ title1, title2, paragraph, imageSrc }) {

  return (
    <ArticleWrapper
      parentStyles={styles}
    >
      <TextStyleWrapper parentStyles={styles}>
        <h1>{title1}</h1>
        <h2>{title2}</h2>
        <p>{paragraph}</p>
      </TextStyleWrapper>

      <ImageWrapper parentStyles={styles}>
        <Image
          src={imageSrc}
          alt={"article feature image"}
          fill="true"
        />
      </ImageWrapper>
    </ArticleWrapper>
  );
}