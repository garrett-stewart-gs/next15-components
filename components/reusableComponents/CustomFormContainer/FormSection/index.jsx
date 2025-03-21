"use client";

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
    <section
      className={styles.formSection}
      style={{ width: "100%" }}
    >
      <div className={styles.formSectionTitleContainer}>
        {sectionTitle && <h3>{sectionTitle}</h3>}
        {sectionSubTitle && <h4>{sectionSubTitle}</h4>}
      </div>

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

    </section>
  );
}