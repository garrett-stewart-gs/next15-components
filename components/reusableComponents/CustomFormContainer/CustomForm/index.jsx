"use client";

import { useCustomFormContext } from "../CustomFormContext";
import { useActiveIndex } from "@/utils/hooks/useActiveIndex";

import HorizontalCarouselWrapper from "../../../scaffoldingComponents/HorizontalCarouselWrapper";
import CustomFormSection from "../FormSection";
import FormSubmissionResultsSection from "../FormSubmissionResultsSection";
import FormButton from "../../Buttons/FormButton";


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
  const validateFormSection = async (activeIndex) => {
    const currentSectionFields = activeSectionFields(activeIndex);
    const isSectionValid = await trigger(currentSectionFields);
    return isSectionValid;
  };

  // clear current section of form (occurs right before decrementing the active form section)
  const clearFormSection = (activeIndex) => activeSectionFields(activeIndex).map(activeSectionField => resetField(activeSectionField));

  // custom submission that appends custom submission action to default react-hook-form submission behavior
  const handleCustomSubmit = handleSubmit((data) => onCustomSubmit(data, setSubmissionResult)); // handle submit returns a function that can be called with handleCustomSubmit

  const validateSectionNext = async (activeIndex, numberOfItems) => {

    // if user is on final index / submission results page, don't try to validate and disable incrementing by returning false
    if (activeIndex === numberOfItems - 1) return false;
    // if user is on last page of form, before submission results page (numberOfItems - 1), validate current form page.
    // if section validation successful: submit form and return true to increment
    // if section validation unsuccessful: return false to prevent increment
    if (activeIndex === numberOfItems - 2) {
      const isSectionValid = await validateFormSection(activeIndex);
      return isSectionValid ? (handleCustomSubmit() && true) : false;
    };

    // if user is not on first or last form section/page, trigger partial validation and return the resulting boolean value
    // if partial validation successful, returned value: true
    // if partial validation unsuccessful, returned value: false
    const isSectionValid = await validateFormSection(activeIndex);
    return isSectionValid;
  };

  const clearSectionBack = (activeIndex, numberOfItems) => {
    // if user is on first form page or submission results page (index: numberOfItems - 1), disable decrementing by returning false value
    if (activeIndex === 0 || activeIndex === numberOfItems - 1) return false;
    // otherwise, clear the current section and allow decrementing by returning true value
    clearFormSection(activeIndex);
    return true;
  };

  return {
    clearSectionBack, // custom instructions to carousel component. carousel component provides activeIndex State value
    validateSectionNext, // custom instructions to carousel component. carousel component provides activeIndex State value
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

  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    currentArrayLength,
  } = useActiveIndex(activeSectionsArr.length + 1); // add 1 to include form section results
  const numberOfItems = currentArrayLength;

  // extract callback functions to give custom instructs to carousel
  const {
    validateSectionNext, // fn that returns boolean. custom instructions used to prepend incrementing active index (ie don't increment until action complete)
    clearSectionBack, // fn that returns boolean. custom instructions used to prepend decrementing active index (ie don't decrement until action complete)
  } = createFormActions(activeSectionsArr, handleSubmit, trigger, resetField, onCustomSubmit, setSubmissionResult);

  const formBack = async () => {
    if (! await clearSectionBack(activeIndex, numberOfItems)) return;
    decrementActiveIndex();
  };

  const formNext = async () => {
    if (! await validateSectionNext(activeIndex, numberOfItems)) return;
    incrementActiveIndex();
  };

  return (
    <form className={styles.customForm}>

      <HorizontalCarouselWrapper
        parentActiveIndexState={activeIndex}
        handleBack={formBack}
        handleNext={formNext}
        fitToParent={true}
        matchElementAndViewportWidths={true}
      >
        {

          activeSectionsArr.map((sectionObj, index) => {
            return <CustomFormSection key={`${formName} form section ${index}`} sectionObj={sectionObj} />;
          })

        }
        <FormSubmissionResultsSection />
      </HorizontalCarouselWrapper>

      <div className={styles.customFormButtonsContainer}>
        {
          activeIndex !== 0 && activeIndex !== numberOfItems - 1 && <FormButton buttonText={"Back"} onClick={formBack} />
        }
        {
          activeIndex < numberOfItems - 2 && <FormButton buttonText={"Next"} onClick={formNext} />
        }
        {
          activeIndex === numberOfItems - 2 && <FormButton buttonText={"Submit"} onClick={formNext} />
        }
      </div>

    </form >
  );
}