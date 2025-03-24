
import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";


import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";

import ArticleLink from "../ArticleWrapper/ArticleLink";

import styles from "./ArticleShowcaseSection.module.css";

const articleObjArr = [
  {
    h6: "Our Portfolio",
    p: "Browse our gallery and read more about what our clients think.",
    imageSrc: image,
    link: "/",
  },
  {
    h6: "FAQs",
    p: "Find the answers to all your questions, even the ones you didn't know you had!",
    imageSrc: image2,
    link: "/",
  }
];

export default function ArticleShowcaseSection() {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h3>Knowledge Is Power.</h3>
        <h4>Learn Everything You Need To Make Your Event Great!</h4>
      </TextStyleWrapper>

      <div>

        <HorizontalCarouselWrapper itemsPerSection={2} >
          {
            articleObjArr.map((articleObj, index) => <ArticleLink key={`Home Page Article ${index}`} articleObj={articleObj} />)
          }
        </HorizontalCarouselWrapper>
      </div>

    </PageSectionWrapper>
  );
}