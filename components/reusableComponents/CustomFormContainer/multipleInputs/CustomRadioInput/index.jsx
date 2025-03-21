"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import CustomRadioOption from "./CustomRadioOption";

import styles from "./CustomRadioInput.module.css";


// props: {
//   inputObj: {} || null,
//   optionObj: {} || null,
// }
export default function CustomRadioInput({ inputObj }) {

  const {
    form: { register, formState: { errors } },
  } = useCustomFormContext();

  const {
    inputTitle: title,
    inputType: type,
    inputName: name,
    inputLabel: label,
    inputPlaceholder: placeholder,
    inputValue: value,
    inputRegisterObj: registerObj,
    inputOptions,
  } = inputObj;

  return (
    <div className={styles.customRadioInputContainer}>

      {title && <h5 className={styles.customRadioInputTitle}>{title}</h5>}

      <main className={styles.customRadioInputBody}>
        {
          inputOptions.map((optionObj, index) => <CustomRadioOption key={`Custom ${type} Input #${index}`} optionObj={optionObj} parentValidation={registerObj.validate} />)
        }
      </main>

      <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p>

    </div>
  );
}