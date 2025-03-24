import Image from "next/image";
import Link from "next/link";

import ArticleWrapper from ".";
import ImageWrapper from "../ImageWrapper";
import TextStyleWrapper from "../TextStyleWrapper";

import styles from "./ArticleLink.module.css";

export default function ArticleLink({ articleObj }) {

  const { h6, p, link, imageSrc } = articleObj;

  return (
    <ArticleWrapper parentStyles={styles} >
      <Link href={link}>

        <ImageWrapper parentStyles={styles}>
          <Image
            src={imageSrc}
            alt={"w/e"}
            fill="true"
          />
        </ImageWrapper >

        <TextStyleWrapper parentStyles={styles}>
          <h6>{h6}</h6>
          <p>{p}plus a little bit</p>
        </TextStyleWrapper>

      </Link>
    </ArticleWrapper>
  );
}