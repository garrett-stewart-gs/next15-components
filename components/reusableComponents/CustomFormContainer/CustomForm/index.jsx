"use client";

import { useEffect } from "react";
import { useCustomFormContext } from "../CustomFormContext";
import { useActiveIndex } from "@/utils/hooks/useActiveIndex";
import { useHorizontalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";

import HorizontalCarouselWrapper from "../../HorizontalCarouselWrapper";
import CustomFormSection from "../FormSection";
import FormSubmissionResultsSection from "../FormSubmissionResultsSection";

import styles from "./CustomForm.module.css";

const createFormActions = (
  activeSectionsArr, // array of all form sections that should render (shouldRenderFn returns true)
  handleSubmit, // from react-hook-form
  trigger, // from react-hook-form
  resetField, // from react-hook-form
  onCustomSubmit, // from form config object (customFormContext)
  setSubmissionResult, // from customFormContext state (manages form submission state/results)
) => {

  

  // get all form fields in current section (which are registered with react-hook-form)
  const activeSectionFields = (activeIndex) => {
    return activeSectionsArr[activeIndex].sectionInputsArr.flatMap(sectionInputObj => {
      const inputName = sectionInputObj.inputName;
      const optionNames = sectionInputObj.inputOptions.map(optionObj => optionObj.optionName && optionObj.optionName !== inputName && optionObj.optionName);
      if (!optionNames[0]) return inputName;
      return [inputName, ...optionNames];
    });
  };

  // validate only the form fields that are currently displayed in the active form section
  // wrapper for trigger, renamed for clarity of purpose
  const validateFormSection = async (activeIndex) => await trigger(activeSectionFields(activeIndex));

  // clear current section of form (occurs right before decrementing the active form section)
  const clearFormSection = (activeIndex) => activeSectionFields(activeIndex).map(activeSectionField => resetField(activeSectionField));

  // custom submission that appends custom submission action to default react-hook-form submission behavior
  const handleCustomSubmit = handleSubmit((data) => onCustomSubmit(data, setSubmissionResult)); // handle submit returns a function that can be called with handleCustomSubmit

  const handleNext = async (activeIndex, numberOfItems) => {
    // if user is on final index / submission results page, don't try to validate and disable incrementing by returning false
    if (activeIndex === numberOfItems - 1) return false;

    // if user is on last page of form, before submission results page (numberOfItems - 1), validate current form page.
    // if section validation successful: submit form and return true to increment
    // if section validation unsuccessful: return false to prevent increment
    if (activeIndex === numberOfItems - 2) {
      const isSectionValid = await validateFormSection(activeIndex);
      console.log('isSectionValid:', isSectionValid);
      return isSectionValid ? handleCustomSubmit() && true : false;
    };

    // if user is not on first or last form section/page, trigger partial validation and return the resulting boolean value
    // if partial validation successful, returned value: true
    // if partial validation unsuccessful, returned value: false
    return await validateFormSection(activeIndex);

  };

  const handleBack = (activeIndex, numberOfItems) => {
    // if user is on first form page or submission results page (index: numberOfItems - 1), disable decrementing by returning false value
    if (activeIndex === 0 || activeIndex === numberOfItems - 1) return false;
    // otherwise, clear the current section and allow decrementing by returning true value
    clearFormSection(activeIndex);
    return true;
  };

  return {
    handleBack, // custom instructions to carousel component. carousel component provides activeIndex State value
    handleNext, // custom instructions to carousel component. carousel component provides activeIndex State value
  };
};


export default function CustomForm() {

  const {
    form: { trigger, resetField, handleSubmit },
    formConfigArr,
    setSubmissionResult,
  } = useCustomFormContext();

  const { formName, onCustomSubmit } = formConfigArr[0];

  // extract the form sections that have a shouldRender function that returns true
  const activeSectionsArr = formConfigArr.filter(sectionObj => sectionObj.shouldRenderFn && sectionObj.shouldRenderFn());

  // extract callback functions to give custom instructs to carousel
  const { handleBack, handleNext } = createFormActions(activeSectionsArr, handleSubmit, trigger, resetField, onCustomSubmit, setSubmissionResult);


  return (
    <form className={styles.customForm}>

      <HorizontalCarouselWrapper
        handleBack={handleBack} // provides custom behavior when decrementing (including clearing current section fields before decrement)
        handleNext={handleNext} // provides custom behavior when incrementing (including validating current section fields before increment)
      >
        {

          activeSectionsArr.map((sectionObj, index) => <CustomFormSection key={`${formName} form section ${index}`} sectionObj={sectionObj} />)

        }
        <FormSubmissionResultsSection />
      </HorizontalCarouselWrapper>

      {/* <div className={styles.customFormButtonsContainer}>
        { // if active index not referencing the last section (form submission message) and is not referencing the first elment (first page of form), show back button
          (activeIndex !== numberOfItems - 1 && activeIndex !== 0) && <button type="button" onClick={handleBack}>Back</button>
        }

        { // if active index is referencing an element BEFORE the 2nd last element (last page of form), show next button
          (activeIndex < numberOfItems - 2) && <button type="button" onClick={handleNext}>Next</button>
        }

        { // if active index is referencing the 2nd last element (last page of form), show submit button (instead of next button)
          (activeIndex === numberOfItems - 2 && activeIndex > 0 && numberOfItems > 1) && <button type="button" onClick={handleNext} >Submit</button>
        }
      </div> */}

    </form>
  );
}