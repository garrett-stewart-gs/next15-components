import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";

import Image from "next/image";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";
import ImageWrapper from "../ImageWrapper";
import LinkButton from "@/components/reusableComponents/Buttons/LinkButton";

import styles from "./FeatureSection.module.css";



export default function FeatureSection({sectionObj }) {

  const { h1, h2, p, imageSrc } = sectionObj;

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        <p>{p}</p>
        <LinkButton link={"/"} text={"Button"}/>
      </TextStyleWrapper>

      <ImageWrapper parentStyles={styles}>
        <Image
          src={imageSrc}
          alt={"w/e"}
          fill="true"
        />
      </ImageWrapper>

    </PageSectionWrapper>
  );
}