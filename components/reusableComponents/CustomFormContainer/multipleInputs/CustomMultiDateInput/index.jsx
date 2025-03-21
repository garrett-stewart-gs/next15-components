"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import CustomCalendarInput from "../../singleInputs/CustomCalendarInput";
import CustomTextInput from "../../singleInputs/CustomTextInput";

import styles from "./CustomMultiDateInput.module.css";

export default function CustomMultiDateInput({ inputObj }) {

  const {
    form: { register, formState: { errors }, },
  } = useCustomFormContext();

  const {
    inputTitle: title,
    inputType: type, // 'multi-date', only used for key property (using hardcoded type instead)
    inputName: name,
    inputLabel: label,
    inputPlaceholder: placeholder,
    inputValue: value,
    inputRegisterObj: registerObj,
    inputOptions,
  } = inputObj;

  return (
    <div className={styles.customMultiDateInputContainer}>

      {/* {title && <h5 className={styles.customMultiDateInputTitle}>{title}</h5>}

      <main className={styles.customMultiDateInputBody}>
        {label && <span>{label}</span>}
        <input
          {...register(name, registerObj)}
          type="number"
          placeholder={placeholder}
        />
      </main>

      <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p> */}

      <CustomTextInput inputObj={inputObj} />

      <CustomCalendarInput optionObj={inputOptions[0]} />

    </div>
  );
}