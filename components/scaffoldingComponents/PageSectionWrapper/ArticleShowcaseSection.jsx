"use client";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";

import { articleShowcaseSectionImages as images } from "./ImageImports";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";
import HorizontalCarouselArrowControls from "../HorizontalCarouselArrowControls";
import HorizontalCarouselIndexSelectorControls from "../HorizontalCarouselIndexSelectorControls";

import ArticleLink from "../ArticleWrapper/ArticleLink";

import styles from "./ArticleShowcaseSection.module.css";

const articleObjArr = [
  {
    h6: "Inflatable Rentals",
    p: "Perfect for night-time events like outdoor movie screenings, community gatherings, or celebrations under the stars.",
    imageSrc: images.InflatableRentalImage,
    link: "/",
  },
  {
    h6: "Daylight Rentals",
    p: "Ideal for day-time events, livestreams, video gaming, and events requiring a compact and efficient setup.",
    imageSrc: images.DaylightRentalImage,
    link: "/",
  },
  {
    h6: "Screen Sales",
    p: "For those hosting events regularly, our customizable packages offer daylight or inflatable screens with all the equipment needed to run a show.",
    imageSrc: images.ScreenSalesImage,
    link: "/",
  },
  {
    h6: "Our Portfolio",
    p: "Browse our gallery and read more about what our clients think.",
    imageSrc: images.OurPortfolioImage,
    link: "/",
  },
  {
    h6: "FAQs",
    p: "Find the answers to all your questions, even the ones you didn't know you had!",
    imageSrc: images.FaqsImage,
    link: "/",
  },
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
  },
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
  },
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
  },
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
  },
];

export default function ArticleShowcaseSection() {

  const { activeIndex, currentArrayLength, incrementActiveIndex, decrementActiveIndex, setNewActiveIndex } = useActiveIndex(articleObjArr.length);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h3>Knowledge Is Power.</h3>
        <h4>Learn Everything You Need To Make Your Event Great!</h4>
        <p>activeIndex: {activeIndex}</p>
      </TextStyleWrapper>

      <div className={styles.carouselContainer}>

        <HorizontalCarouselArrowControls
          handleLeft={() => decrementActiveIndex()}
          handleRight={() => incrementActiveIndex()}
        >
          <HorizontalCarouselWrapper
            parentActiveIndexState={activeIndex}
            handleBack={() => decrementActiveIndex()}
            handleNext={() => incrementActiveIndex()}
          >
            {
              articleObjArr.map((articleObj, index) => <ArticleLink key={`Home Page Article ${index}`} articleObj={articleObj} />)
            }
          </HorizontalCarouselWrapper>
        </HorizontalCarouselArrowControls>

        <HorizontalCarouselIndexSelectorControls
          numberOfElements={currentArrayLength}
          parentActiveIndexState={activeIndex}
          setNewActiveIndex={setNewActiveIndex}
        />

      </div>

    </PageSectionWrapper>
  );
}