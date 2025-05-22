"use client";

import CustomFormContainer from "@/components/reusableComponents/CustomFormContainer";

import { generateFormConfig } from "@/components/reusableComponents/CustomFormContainer/formConfig";

import PageSectionWrapper from "@/components/scaffoldingComponents/PageSectionWrapper";

export default function SpaFormPage() {

  return (
    <PageSectionWrapper
    
    >
      <CustomFormContainer generateFormConfig={generateFormConfig} />
    </PageSectionWrapper>
  );
}