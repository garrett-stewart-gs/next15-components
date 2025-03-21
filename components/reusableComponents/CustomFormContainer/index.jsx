"use client";

import { CustomFormContextProvider } from "./CustomFormContext";
import CustomForm from "./CustomForm";

// takes call back functions
// generateFormConfig returns object, which is used to generate all form sections and inputs  
// customOnSubmit, which allows user to externally control what happens when the form is completed and submitted
export default function CustomFormContainer({ generateFormConfig }) {

  return (
    <CustomFormContextProvider generateFormConfig={generateFormConfig}>
      <CustomForm />
    </CustomFormContextProvider>
  );
}