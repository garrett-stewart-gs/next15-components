"use client";

import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import { generateFormConfig } from "./CustomFormConfig";
import CustomFormContainer from "@/components/reusableComponents/CustomFormContainer";

import styles from "./CustomFormPageSection.module.css";

export default function CustomFormPageSection() {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h3>Ready To Get Started?</h3>
        <h4>Request A Quote</h4>
        <p>In order for us to better understand your needs, please submit the request for quote form below. Once completed, we review your information and send you a quote! We may also contact for additional information prior to sending you a quote.</p>
      </TextStyleWrapper>

      <CustomFormContainer generateFormConfig={generateFormConfig} />

    </PageSectionWrapper>
  );
}