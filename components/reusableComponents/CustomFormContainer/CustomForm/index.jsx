"use client";

import { useEffect } from "react";
import { useCustomFormContext } from "../CustomFormContext";
import { useActiveIndex } from "@/utils/hooks/useActiveIndex";
import { useHorizontalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";

import HorizontalCarouselWrapper from "../../HorizontalCarouselWrapper";
import CustomFormSection from "../FormSection";
import FormSubmissionResultsSection from "../FormSubmissionResultsSection";

import styles from "./CustomForm.module.css";

// collects all the unique input names in the provided form section, which are registered with react-hook-form
// used in conjunction with trigger to validate the single page 
const extractActiveSectionFields = (sectionInputsArr) => {
  return sectionInputsArr.flatMap(sectionInputObj => {
    const inputName = sectionInputObj.inputName;
    const optionNames = sectionInputObj.inputOptions.map(optionObj => optionObj.optionName && optionObj.optionName !== inputName && optionObj.optionName);
    if (!optionNames[0]) return inputName;
    return [inputName, ...optionNames];
  });
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

  // create state for tracking which element is active and which carousel section should be currently displayed
  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    currentArrayLength: numberOfSections,
    updateCurrentArrayLength: updateNumberOfSections
  } = useActiveIndex(activeSectionsArr.length + 1);

  // create state for tracking how many elements to display in the carousel
  useEffect(() => {
    updateNumberOfSections(activeSectionsArr.length + 1); // plus 1 adds spot for form submission message section
  }, [activeSectionsArr]);

  // create array of input names (registered react-hook-form fields) that belong to the current/active section
  const activeSectionFields = activeIndex <= numberOfSections - 2 && extractActiveSectionFields(activeSectionsArr[activeIndex].sectionInputsArr);

  // create sectional form validation 
  const validateFormSection = async () => trigger(activeSectionFields);// await trigger();

  // clear formdata of current section (triggers before decrementing to previous section)
  const clearFormSectionData = () => activeSectionFields.map(activeSectionField => resetField(activeSectionField));

  // 
  const handleCustomSubmit = handleSubmit((data) => onCustomSubmit(data, setSubmissionResult)); // handle submit returns a function that can be called with handleCustomSubmit

  // handle next button clicks and touch swipes
  // pass function to swipe tracker, to customize behaviour to swipe handlers, like validating and incrementing state
  const handleNext = async () => {
    // if form at beginning, validate before
    if (activeIndex === 0) {
      return await validateFormSection() && incrementActiveIndex(false);
    }
    //  block incrementing index/section if current index is referencing first last section (form submission results section)
    if (activeIndex === numberOfSections - 1) {
      return;
    }
    // if current index is referencing 2nd last element (final page of form), then trigger full form validation and sumbission
    if (activeIndex === numberOfSections - 2 && await validateFormSection()) {
      incrementActiveIndex(false); // turn page to submission results section before submission is complete
      handleCustomSubmit(); // trigger form submission and necessary/custom server actions (via formConfig.js), 
      return;
    }
    // otherwise, validate the current section and increment to next section if partial validation successful
    return await validateFormSection() && incrementActiveIndex(false);
  };

  const handleBack = () => {
    // block decrementing index/section if at first or last sections
    if (activeIndex === 0 || activeIndex === numberOfSections - 1) {
      return;
    }
    // if clearing current section fields successful, decrement index/section
    if (clearFormSectionData()) {
      decrementActiveIndex(false); // false disables section array looping
    }
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHorizontalSwipeTracker(handleBack, handleNext); // cb function arguments instruct swipe handler to act like back/next buttons

  return (
    <form className={styles.customForm}>

      <HorizontalCarouselWrapper
        activeIndex={activeIndex}
        numberOfItems={numberOfSections}
        handleTouchStart={handleTouchStart} // enables swiping forward/backwards unless displaying final section (form submission message)
        handleTouchMove={handleTouchMove} // enables swiping forward/backwards unless displaying final section (form submission message)
        handleTouchEnd={handleTouchEnd} // enables swiping forward/backwards unless displaying final section (form submission message)
      >
        {

          activeSectionsArr.map((sectionObj, index) => <CustomFormSection key={`${formName} form section ${index}`} sectionObj={sectionObj} />)

        }
        <FormSubmissionResultsSection />
      </HorizontalCarouselWrapper>

      <div className={styles.customFormButtonsContainer}>
        { // if active index not referencing the last section (form submission message) and is not referencing the first elment (first page of form), show back button
          (activeIndex !== numberOfSections - 1 && activeIndex !== 0) && <button type="button" onClick={handleBack}>Back</button>
        }

        { // if active index is referencing an element BEFORE the 2nd last element (last page of form), show next button
          (activeIndex < numberOfSections - 2) && <button type="button" onClick={handleNext}>Next</button>
        }

        { // if active index is referencing the 2nd last element (last page of form), show submit button (instead of next button)
          (activeIndex === numberOfSections - 2 && activeIndex > 0 && numberOfSections > 1) && <button type="button" onClick={handleNext} >Submit</button>
        }
      </div>

    </form>
  );
}