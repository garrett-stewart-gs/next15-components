"use client";

import { useCustomFormContext } from "../CustomFormContext";

import HorizontalCarouselWrapper from "../../../scaffoldingComponents/HorizontalCarouselWrapper";
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

  const childStateMethods = {
    completeHandleBack: null,
    completeHandleNext: null,
  };

  const retrieveChildMethods = (completeHandleBack, completeHandleNext) => {
    childStateMethods.completeHandleBack = completeHandleBack;
    childStateMethods.completeHandleNext = completeHandleNext;
  };

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

  const customHandleNext = async (activeIndex, numberOfItems) => {
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

  const customHandleBack = (activeIndex, numberOfItems) => {
    // if user is on first form page or submission results page (index: numberOfItems - 1), disable decrementing by returning false value
    if (activeIndex === 0 || activeIndex === numberOfItems - 1) return false;
    // otherwise, clear the current section and allow decrementing by returning true value
    clearFormSection(activeIndex);
    return true;
  };

  return {
    childStateMethods,
    retrieveChildMethods,
    customHandleBack, // custom instructions to carousel component. carousel component provides activeIndex State value
    customHandleNext, // custom instructions to carousel component. carousel component provides activeIndex State value
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
  const {
    childStateMethods, // contains 2 methods: complete versions of handleBack and handleNext (they are composed of the child carousel's default handleNext/Back behavior + customHandleNext/Back behavior)
    retrieveChildMethods, // allows child to update childStateMethods on mount (childStateMethods need to be applied to parent elements so they can control child state)
    customHandleBack, // parent instructions for appending custom handleNext/Back behavior to the carousel's default handleNext/Back behavior
    customHandleNext // parent instructions for appending custom handleNext/Back behavior to the carousel's default handleNext/Back behavior
  } = createFormActions(activeSectionsArr, handleSubmit, trigger, resetField, onCustomSubmit, setSubmissionResult);


  return (
    <form className={styles.customForm}>

      <HorizontalCarouselWrapper
        handleBack={customHandleBack} // provides custom behavior when decrementing (including clearing current section fields before decrement)
        handleNext={customHandleNext} // provides custom behavior when incrementing (including validating current section fields before increment)
        sendChildStateMethods={retrieveChildMethods}
      >
        {

          activeSectionsArr.map((sectionObj, index) => <CustomFormSection key={`${formName} form section ${index}`} sectionObj={sectionObj} />)

        }
        <FormSubmissionResultsSection />
      </HorizontalCarouselWrapper>
      
      <div className={styles.customFormButtonsContainer}>
        <button type="button" onClick={() => childStateMethods.completeHandleBack()}>Back</button>
        <button type="button" onClick={() => childStateMethods.completeHandleNext()}>Next</button>
      </div>

    </form>
  );
}