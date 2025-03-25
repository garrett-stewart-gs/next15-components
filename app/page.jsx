
import FeatureSection from "@/components/scaffoldingComponents/PageSectionWrapper/FeatureSection";
import ArticleShowcaseSection from "@/components/scaffoldingComponents/PageSectionWrapper/ArticleShowcaseSection.index";

import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";
import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";

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


export default function Home() {


  return (
    <main >

      <TextStyleWrapper>
        <h1>excuse me, </h1>
        <h2>AFKAF</h2>
        <p>you are hereby requested to <span>provide</span> snacks forthright and without delay.</p>
      </TextStyleWrapper>

      {
        sectionObjArr.map((sectionObj, index) => <FeatureSection key={`home page feature section ${index}`} sectionObj={sectionObj} />)
      }

      <ArticleShowcaseSection />

    </main>
  );
}
