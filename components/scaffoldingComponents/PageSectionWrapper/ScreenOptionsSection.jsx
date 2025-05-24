"use client";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ToggleSwitchWrapper from "../ToggleSwitchWrapper/ToggleSwitchWrapper";

import InteractiveHoriztonalMosaicWrapper from "@/components/scaffoldingComponents/InteractiveHorizontalMosaicWrapper";
import SlimMosaicElementWithTitle from "../MosaicElementWrapper/SlimMosaicElementWithTitle";
import InfoAndDiagramPopUp from "../PopUpWindowWrapper/InfoAndDiagramPopUp";
import LinkButton from "@/components/reusableComponents/Buttons/LinkButton";

import styles from "./ScreenOptionsSection.module.css";

import { screenOptionsSectionImages as images } from "../../../app/ImageImports";

const {
  daylightMosaicImage,
  inflatableMosaicImage,
} = images;

const {
  smlDaylightDiagram,
  medDaylightDiagram,
  lrgDaylightDiagram,
} = images.daylightDiagrams;

const {
  miniInflatableDiagram,
  smlInflatableDiagram,
  medInflatableDiagram,
  lrgInflatableDiagram,
  xlrgInflatableDiagram,
  jumboInflatableDiagram,
  xlrgDiInflatableDiagram,
  jumboDiInflatableDiagram,
} = images.inflatableDiagrams;

/* screen option mosaic format:
{
  title
  paragraphs [
    useCase
    audienceSize
    footprint
    height
  ]
  diagram
}, 
*/
const daylightArray = [
  {
    title: 'Small',
    paragraphs: [
      'Suitable for backyards and indoor venues.',
      '20-50 people',
      '20ft deep x 16ft wide',
      '8ft tall',
    ],
    diagram: smlDaylightDiagram,
  },
  {
    title: 'Medium',
    paragraphs: [
      'Suitable for backyards and indoor venues.',
      '20-50 people',
      '20ft deep x 16ft wide',
      '8ft tall',
    ],
    diagram: medDaylightDiagram,
  },
  {
    title: 'Large',
    paragraphs: [
      'Suitable for backyards and indoor venues.',
      '20-50 people',
      '20ft deep x 16ft wide',
      '8ft tall',
    ],
    diagram: lrgDaylightDiagram,
  },
];

const inflatableArray = [
  {
    title: 'Mini',
    paragraphs: [
      'Suitable for backyards and indoor venues.',
      '20-50 people',
      '20ft deep x 16ft wide',
      '8ft tall',
    ],
    diagram: miniInflatableDiagram,
  },
  {
    title: 'Small',
    paragraphs: [
      'Suitable for small parks, backyards, and some indoor venues.',
      '50-100 people',
      '20ft-30ft deep x 21-30ft wide',
      '10-17ft tall',
    ],
    diagram: smlInflatableDiagram,
  },
  {
    title: 'Medium',
    paragraphs: [
      'Suitable for parks and other open areas.',
      '100-200 people',
      '40ft-55ft deep x 35ft wide',
      '19ft tall',
    ],
    diagram: medInflatableDiagram,
  },
  {
    title: 'Large',
    paragraphs: [
      'Suitable for parks and other open areas.',
      '100-300 people',
      '44ft-64ft deep x 42ft wide',
      '22ft tall',
    ],
    diagram: lrgInflatableDiagram,
  },
  {
    title: 'X-Large',
    paragraphs: [
      'Suitable for large parks and other large open areas.',
      '200-1000 people',
      '48ft-84ft deep x 49-58ft wide',
      '24-28ft tall',
    ],
    diagram: xlrgInflatableDiagram,
  },
  {
    title: 'X-Large Drive-In',
    paragraphs: [
      'Suitable for large parking lots and other very large open areas',
      '100-200 vehicles',
      '64ft-100ft deep x 75ft wide',
      '32ft tall',
    ],
    diagram: xlrgDiInflatableDiagram,
  },
  {
    title: 'Jumbo',
    paragraphs: [
      'Suitable for very large parks and other very large open areas.',
      '1000-5000 people',
      '64ft-100ft deep x 80ft wide',
      '36ft tall',
    ],
    diagram: jumboInflatableDiagram,
  },
  {
    title: 'Jumbo Drive-In',
    paragraphs: [
      'Suitable for very large parking lots and other very large open areas.',
      '200-500 vehicles',
      '80ft-110ft deep x 80ft wide',
      '40ft tall',
    ],
    diagram: jumboDiInflatableDiagram,
  },
];

export default function ScreenOptionsSection() {

  const { activeIndex, decrementActiveIndex, incrementActiveIndex } = useActiveIndex(2, 0);

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>Endless Options:</h1>
        <h2>Different Screens For Different Scenes.</h2>
      </TextStyleWrapper>

      <ToggleSwitchWrapper
        parentStyles={styles}
        activeParentIndex={activeIndex}
        onClick={() => incrementActiveIndex(true)}
      >
        <TextStyleWrapper parentStyles={styles}>
          <h6>Daylight Screens</h6>
        </TextStyleWrapper>
        <TextStyleWrapper parentStyles={styles}>
          <h6>Inflatable Screens</h6>
        </TextStyleWrapper>
      </ToggleSwitchWrapper>

      <div
        className={`
          ${styles.screenOptionsSlider}
          ${activeIndex === 0 ? styles.left : ""}
          ${activeIndex === 1 ? styles.right : ""}
        `}
      >

        <InteractiveHoriztonalMosaicWrapper
          // mosaicName={"Daylight Screen Options Mosaic 1"} // used for react key generation
          mosaicImage={daylightMosaicImage}
          mosaicArray={daylightArray}
          verticalOffsetPercentage={60}
          horizontalOffsetPercentage={0}
          zoomFactor={1}
        >
          {
            daylightArray.map((daylightOption, index) => {
              return (
                <SlimMosaicElementWithTitle
                  key={`horizontal daylight screen options mosaic element ${index}`}
                  title={daylightOption.title}
                />
              );
            })
          }
          <InfoAndDiagramPopUp />
        </InteractiveHoriztonalMosaicWrapper>

        <InteractiveHoriztonalMosaicWrapper
          // mosaicName={"Inflatable Screen Options Mosaic 2"} // used for react key generation
          mosaicImage={inflatableMosaicImage}
          mosaicArray={inflatableArray}
          verticalOffsetPercentage={60}
          horizontalOffsetPercentage={0}
          zoomFactor={1}
        >
          {
            inflatableArray.map((inflatableOption, index) => {
              return (
                <SlimMosaicElementWithTitle
                  key={`horizontal inflatable screen options mosaic element ${index}`}
                  title={inflatableOption.title}
                />
              );
            })
          }

          <InfoAndDiagramPopUp />

        </InteractiveHoriztonalMosaicWrapper>

      </div>

      <div
        className={`
          ${styles.buttonLinksSlider}
          ${activeIndex === 0 ? styles.left : ""}
          ${activeIndex === 1 ? styles.right : ""}
        `}
      >
        <article>
          <LinkButton link={"/"} text={"Rentals"} />
          <LinkButton link={"/"} text={"Sales"} />
        </article>

        <article>
          <LinkButton link={"/"} text={"Rentals"} />
          <LinkButton link={"/"} text={"Sales"} />
        </article>
      </div>


    </PageSectionWrapper>
  );
}