
import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";

import ArticleQuote from "../ArticleWrapper/ArticleQuote";

import styles from "./TestimonialCardSection.module.css";


export default function TestimonialCardSection({title1, title2, tesitmonialsArrObj}) {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </TextStyleWrapper>

      <HorizontalCarouselWrapper>
        {
          tesitmonialsArrObj.map((testimonialObj, index) => {
            return (
              <ArticleQuote
                key={`testimonial article quote ${index}`}
                {...testimonialObj}
              />
            );
          })
        }
      </HorizontalCarouselWrapper>

    </PageSectionWrapper >
  );
}