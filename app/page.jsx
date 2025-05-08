import Link from "next/link";

import FeatureSection from "@/components/scaffoldingComponents/PageSectionWrapper/FeatureSection";
import ArticleShowcaseSection from "@/components/scaffoldingComponents/PageSectionWrapper/ArticleShowcaseSection";
import ScreenOptionsSection from "@/components/scaffoldingComponents/PageSectionWrapper/ScreenOptionsSection";
import TestimonialCardSection from "@/components/scaffoldingComponents/PageSectionWrapper/TestimonialCardSection";
import SplashNavbar from "@/components/reusableComponents/Navbar";
import Navbar from "@/components/reusableComponents/Navbar/Navbar";

import InteractiveFaqItem from "@/components/scaffoldingComponents/ListItemWrapper/InteractiveFaqItem";
import SearchbarWrapper from "@/components/scaffoldingComponents/SearchbarWrapper";


import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";




const sectionObjArr = [
  {
    h1: "Host Your Event,",
    h2: "Anytime!",
    p: "Outdoor media has always struggled in the sun, but our daylight screens are changing the game. Enjoy the freedom and flexibility to host events seamlessly, even under the brightest of skies!",
    imageSrc: image,
  },
  {
    h1: "No Space?",
    h2: "No Problem.",
    p: "Unlock your venue's potential. Our daylight screens fit to your venue, not the other way around.",
    imageSrc: image2,
  },

];

const faqObjArr = [
  {
    question: "Does the weather affect how early we can start the presentation?",
    answer: "Sometimes. Cloudy days usually reduce the amount of ambient light in the area, making dark images look brighter allowing for an earlier start time. Sunny days without obstacles to cast shade on the screen can delay the presentation start time.",
  },
  {
    question: "Does the weather affect how early we can start the presentation?",
    answer: "Sometimes. Cloudy days usually reduce the amount of ambient light in the area, making dark images look brighter allowing for an earlier start time. Sunny days without obstacles to cast shade on the screen can delay the presentation start time.",
  },
  {
    question: "Does the weather affect how early we can start the presentation?",
    answer: "Sometimes. Cloudy days usually reduce the amount of ambient light in the area, making dark images look brighter allowing for an earlier start time. Sunny days without obstacles to cast shade on the screen can delay the presentation start time.",
  },


];





export default function Home() {


  return (
    <main >

      <Navbar />

      {
        sectionObjArr.map((sectionObj, index) => <FeatureSection key={`home page feature section ${index}`} sectionObj={sectionObj} />)
      }

      <SearchbarWrapper>
        <input type="search" placeholder={"Search..."} />
      </SearchbarWrapper>

      <div>
        {
          faqObjArr.map((faqObj, index) => <InteractiveFaqItem key={`interactive faq #${index}`} index={index} faqObj={faqObj} />)
        }
      </div>

      <ArticleShowcaseSection />

      <ScreenOptionsSection/>

      <TestimonialCardSection/>

    </main>
  );
}
