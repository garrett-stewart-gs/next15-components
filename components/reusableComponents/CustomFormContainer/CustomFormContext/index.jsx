"use client";

import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const CustomFormContext = createContext();

export function CustomFormContextProvider({ children, generateFormConfig }) {

  const form = useForm({ mode: "all" });
  const {
    getValues,
    setValue,
    clearErrors,
    watch,
    trigger,
  } = form;

  const [isSubmissionServerActionComplete, setSubmissionServerActionComplete] = useState(null);
  const setSubmissionResult = (value) => setSubmissionServerActionComplete(value);

  // form config array uses getValues and clearErrors from react-hook-forms
  const formConfigArr = generateFormConfig(getValues, setValue, clearErrors, watch, trigger);

  return (
    <CustomFormContext.Provider value={{ formConfigArr, form, isSubmissionServerActionComplete, setSubmissionResult }}>
      {children}
    </CustomFormContext.Provider>
  );

}

export function useCustomFormContext() {
  return useContext(CustomFormContext);
};