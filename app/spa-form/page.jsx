"use client";

import CustomFormContainer from "@/components/reusableComponents/CustomFormContainer";

import { generateFormConfig } from "@/components/reusableComponents/CustomFormContainer/formConfig";

export default function SpaFormPage() {

  return (
    <CustomFormContainer generateFormConfig={generateFormConfig}/>
  );
}