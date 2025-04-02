"use client";

import { useState } from "react";

import ListItemWrapper from ".";
import BulletWrapper from "../BulletWrapper";
import TextStyleWrapper from "../TextStyleWrapper";
import AnimatedPlusMinusIcon from "@/components/reusableComponents/DropdownIcons/AnimatedPlusMinus";

import styles from "./InteractiveFaqItem.module.css";

export default function InteractiveFaqItem({ index, faqObj }) {

  const [isActive, setIsActive] = useState(false);


  const { question, answer} = faqObj;
  const bulletLabel = index + 1;

  return (
    <ListItemWrapper
      parentIsActive={isActive}
      parentStyles={styles}
      onClick={() => setIsActive(prev => !prev)}
    >

      <BulletWrapper parentStyles={styles}>{bulletLabel}</BulletWrapper>

      <TextStyleWrapper parentStyles={styles}>
        <h5>{question}</h5>
        <h6>{answer}</h6>
      </TextStyleWrapper>

      <AnimatedPlusMinusIcon
        parentIsActive={isActive}
        parentStyles={styles}
      />

    </ListItemWrapper>
  );
}