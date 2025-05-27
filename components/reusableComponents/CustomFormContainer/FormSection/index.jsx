"use client";


import TextStyleWrapper from "@/components/scaffoldingComponents/TextStyleWrapper";
import CustomTextInput from "../singleInputs/CustomTextInput";
import CustomMultiDigitInput from "../multipleInputs/CustomMultiDigitInput";
import CustomRadioInput from "../multipleInputs/CustomRadioInput";
import CustomMultiDateInput from "../multipleInputs/CustomMultiDateInput";
import CustomMultiTextInput from "../multipleInputs/CustomMultiTextInput";
import CustomCalendarInput from "../singleInputs/CustomCalendarInput";

import styles from "./FormSection.module.css";

export default function CustomFormSection({ sectionObj }) {

  const {
    sectionTitle,
    sectionSubTitle,
    sectionInputsArr,
  } = sectionObj;

  return (
    <section className={styles.formSectionContainer}>

      <main
        className={styles.formSection}
      >
        <TextStyleWrapper parentStyles={styles}>
          {sectionTitle && <h5>{sectionTitle}</h5>}
          {sectionSubTitle && <h6>{sectionSubTitle}</h6>}
        </TextStyleWrapper>
     

        {
          sectionInputsArr.map((inputObj, index) => {
            const key = `${sectionTitle} Form Section input# ${index + 1}`;

            if (['text', 'email', 'number'].includes(inputObj.inputType)) return <CustomTextInput key={key} inputObj={inputObj} />;
            if (['tel', 'auth'].includes(inputObj.inputType)) return <CustomMultiDigitInput key={key} inputObj={inputObj} />;
            if (inputObj.inputType === 'radio') return <CustomRadioInput key={key} inputObj={inputObj} />;
            if (inputObj.inputType === 'multi-date') return <CustomMultiDateInput key={key} inputObj={inputObj} />;
            if (inputObj.inputType === 'location') return <CustomMultiTextInput key={key} inputObj={inputObj} />;
            if (inputObj.inputType === 'calendar') return <CustomCalendarInput key={key} inputObj={inputObj} />;
          })
        }

      </main>
    </section>
  );
}