

import ArticleWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import BulletWrapper from "../BulletWrapper";

import styles from "./ArticleQuote.module.css";

export default function({ paragraphs, quotee }) {

  return (
    <ArticleWrapper parentStyles={styles}>

      <BulletWrapper parentStyles={styles}>
        "
      </BulletWrapper>

      <TextStyleWrapper parentStyles={styles}>
        {
          paragraphs.map((paragraph, index) => <p key={`article quote ${index}`}>{paragraph}</p>)
        }
      </TextStyleWrapper>

      <TextStyleWrapper>
        <span>
          — {quotee}
        </span>
      </TextStyleWrapper>

    </ArticleWrapper>
  );
}