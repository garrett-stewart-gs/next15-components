import Image from "next/image";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ImageWrapper from "../ImageWrapper";




export default function PageSection({ sectionObj }) {

  const { h1, h2, p, imageSrc } = sectionObj;

  return (
    <PageSectionWrapper>

      <TextStyleWrapper>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        <p>{p}</p>
      </TextStyleWrapper>

      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={"w/e"}
          fill="true"
        />
      </ImageWrapper>

    </PageSectionWrapper>
  );
}