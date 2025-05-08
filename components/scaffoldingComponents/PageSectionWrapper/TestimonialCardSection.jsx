
import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import HorizontalCarouselWrapper from "../HorizontalCarouselWrapper";

import ArticleQuote from "../ArticleWrapper/ArticleQuote";

import styles from "./TestimonialCardSection.module.css";

const testimonials = [
  {
    paragraphs: [
      'Fresh Air is an extremely professional company to work with. Their communication is clear and they always deliver as promised.',
      'I would recommend them to anyone planning community events.',
    ],
    quotee: 'Bowness Community Association',
  },
  {
    paragraphs: [
      'Fantastic company with hardworking and professional crew. Thanks for bringing magic to our park!',
    ],
    quotee: 'Northstar Residents Association',
  },
  {
    paragraphs: [
      'This was our first time putting on an outdoor event.',
      'The onsite team and the equipment for the event was top notch. The quality of the daytime screen was amazing and everyone attending loved the movie.',
      'I would recommend Fresh Air Media to anyone holding a drive-in event, they are a great company to partner with.',
    ],
    quotee: 'Kaltire',
  },
  {
    paragraphs: [
      'I love working with Fresh Air Media. They are a relaxed team yet so professional in what they do. I never have to worry with my events when I know these people are behind the scenes.',
      'Thank you Fresh Air Media for always being so accommodating!',
    ],
    quotee: "Mahogany Homeowner's Association",
  },
];

export default function TestimonialCardSection() {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>Testimonials</h1>
        <h2>What Others Are Saying</h2>
      </TextStyleWrapper>

      <HorizontalCarouselWrapper>
        {
          testimonials.map((testimonial, index) => {
            return (
              <ArticleQuote
                key={`testimonial article quote ${index}`}
                {...testimonial}
              />
            );
          })
        }
      </HorizontalCarouselWrapper>

    </PageSectionWrapper >
  );
}