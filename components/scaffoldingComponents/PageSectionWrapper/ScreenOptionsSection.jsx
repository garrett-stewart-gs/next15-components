
import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import HorizonatalMosaic from "@/components/reusableComponents/HorizontalMosaic";

import styles from "./ScreenOptionsSection.module.css";

import { screenOptionsSectionImages as images } from "./ImageImports";

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

const daylightArray = [
  {
    size: 'Small',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
    diagram: smlDaylightDiagram,
  },
  {
    size: 'Medium',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
    diagram: medDaylightDiagram,
  },
  {
    size: 'Large',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
    diagram: lrgDaylightDiagram,
  },
];

const inflatableArray = [
  {
    size: 'Mini',
    useCase: 'Suitable for backyards and indoor venues.',
    audienceSize: '20-50 people',
    footprint: '20ft deep x 16ft wide',
    height: '8ft tall',
    diagram: miniInflatableDiagram,
  },
  {
    size: 'Small',
    useCase: 'Suitable for small parks, backyards, and some indoor venues.',
    audienceSize: '50-100 people',
    footprint: '20ft-30ft deep x 21-30ft wide',
    height: '10-17ft tall',
    diagram: smlInflatableDiagram,
  },
  {
    size: 'Medium',
    useCase: 'Suitable for parks and other open areas.',
    audienceSize: '100-200 people',
    footprint: '40ft-55ft deep x 35ft wide',
    height: '19ft tall',
    diagram: medInflatableDiagram,
  },
  {
    size: 'Large',
    useCase: 'Suitable for parks and other open areas.',
    audienceSize: '100-300 people',
    footprint: '44ft-64ft deep x 42ft wide',
    height: '22ft tall',
    diagram: lrgInflatableDiagram,
  },
  {
    size: 'X-Large',
    useCase: 'Suitable for large parks and other large open areas.',
    audienceSize: '200-1000 people',
    footprint: '48ft-84ft deep x 49-58ft wide',
    height: '24-28ft tall',
    diagram: xlrgInflatableDiagram,
  },
  {
    size: 'X-Large Drive-In',
    useCase: 'Suitable for large parking lots and other very large open areas',
    audienceSize: '100-200 vehicles',
    footprint: '64ft-100ft deep x 75ft wide',
    height: '32ft tall',
    diagram: xlrgDiInflatableDiagram,
  },
  {
    size: 'Jumbo',
    useCase: 'Suitable for very large parks and other very large open areas.',
    audienceSize: '1000-5000 people',
    footprint: '64ft-100ft deep x 80ft wide',
    height: '36ft tall',
    diagram: jumboInflatableDiagram,
  },
  {
    size: 'Jumbo Drive-In',
    useCase: 'Suitable for very large parking lots and other very large open areas.',
    audienceSize: '200-500 vehicles',
    footprint: '80ft-110ft deep x 80ft wide',
    height: '40ft tall',
    diagram: jumboDiInflatableDiagram,
  },
];

export default function ScreenOptionsSection() {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>Endless Options:</h1>
        <h2>Different Screens For Different Scenes.</h2>
      </TextStyleWrapper>

      <div>inflatable vs daylight selector here</div>

      <HorizonatalMosaic
        mosaicName={"Daylight Screen Options Mosaic 1"} // used for react key generation
        mosaicImage={daylightMosaicImage}
        mosaicArray={daylightArray}
        verticalOffsetPercentage={60}
        horizontalOffsetPercentage={0}
        zoomFactor={1}
      />

      <HorizonatalMosaic
        mosaicName={"Inflatable Screen Options Mosaic 2"} // used for react key generation
        mosaicImage={inflatableMosaicImage}
        mosaicArray={inflatableArray}
        verticalOffsetPercentage={60}
        horizontalOffsetPercentage={0}
        zoomFactor={1}
      />

    </PageSectionWrapper>
  );
}