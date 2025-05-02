import Link from "next/link";

import FeatureSection from "@/components/scaffoldingComponents/PageSectionWrapper/FeatureSection";
import ArticleShowcaseSection from "@/components/scaffoldingComponents/PageSectionWrapper/ArticleShowcaseSection.index";
import SplashNavbar from "@/components/reusableComponents/Navbar";
import Navbar from "@/components/reusableComponents/Navbar/Navbar";

import InteractiveFaqItem from "@/components/scaffoldingComponents/ListItemWrapper/InteractiveFaqItem";
import SearchbarWrapper from "@/components/scaffoldingComponents/SearchbarWrapper";


import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";
import mosaicImage1 from "@/public/images/homePage/screenOptions/LRG-Daylight_Golf-Cart-Drive-In_FreshAirCinema_3.jpg";
import mosaicImage2 from "@/public/images/homePage/screenOptions/xlrg_regular_sunny_park.jpg";
import HorizonatalMosaic from "@/components/reusableComponents/HorizontalMosaic";

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

const mosaicArray1 = [
  {
    size: 'Small',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
  },
  {
    size: 'Medium',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
  },
  {
    size: 'Large',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
  },
];
const mosaicArray2 = [
  {
    size: 'Mini',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
  },
  {
    size: 'Small',
    useCase: 'Suitable for small parks, backyards, and some indoor venues.',
    audienceSize: '50-100 people',
    footprint: '20ft-30ft deep x 21-30ft wide',
    height: '10-17ft tall',
  },
  {
    size: 'Medium',
    useCase: 'Suitable for parks and other open areas.',
    audienceSize: '100-200 people',
    footprint: '40ft-55ft deep x 35ft wide',
    height: '19ft tall',
  },
  {
    size: 'Large',
    useCase: 'Suitable for parks and other open areas.',
    audienceSize: '100-300 people',
    footprint: '44ft-64ft deep x 42ft wide',
    height: '22ft tall',
  },
  {
    size: 'X-Large',
    useCase: 'Suitable for large parks and other large open areas.',
    audienceSize: '200-1000 people',
    footprint: '48ft-84ft deep x 49-58ft wide',
    height: '24-28ft tall',
  },
  {
    size: 'X-Large Drive-In',
    useCase: 'Suitable for large parking lots and other very large open areas',
    audienceSize: '100-200 vehicles',
    footprint: '64ft-100ft deep x 75ft wide',
    height: '32ft tall',
  },
  {
    size: 'Jumbo',
    useCase: 'Suitable for very large parks and other very large open areas.',
    audienceSize: '1000-5000 people',
    footprint: '64ft-100ft deep x 80ft wide',
    height: '36ft tall',
  },
  {
    size: 'Jumbo Drive-In',
    useCase: 'Suitable for very large parking lots and other very large open areas.',
    audienceSize: '200-500 vehicles',
    footprint: '80ft-110ft deep x 80ft wide',
    height: '40ft tall',
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

      <HorizonatalMosaic
        mosaicName={"Daylight Screen Options Mosaic 1"} // used for react key generation
        mosaicImage={mosaicImage1}
        mosaicArray={mosaicArray1}
        verticalOffsetPercentage={60}
        horizontalOffsetPercentage={0}
        zoomFactor={1}
      />

      <HorizonatalMosaic
        mosaicName={"Daylight Screen Options Mosaic 2"} // used for react key generation
        mosaicImage={mosaicImage2}
        mosaicArray={mosaicArray2}
        verticalOffsetPercentage={60}
        horizontalOffsetPercentage={0}
        zoomFactor={1}
      />

    </main>
  );
}
