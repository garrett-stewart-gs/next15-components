"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import styles from "./CustomDigitInput.module.css";

export default function CustomDigitInput({ optionObj, updateParentNumberInput = null, nextInput = null }) {

  const {
    form: { register, getValues, setValue, setFocus, formState: { errors }, },
  } = useCustomFormContext();

  const {
    optionTitle: title,
    optionType: type,
    optionName: name,
    optionLabel: label,
    optionPlaceholder: placeholder,
    optionValue: value,
    optionRegisterObj: registerObj,
  } = optionObj;

  const handleChange = (e) => {

    // set form input value to last typed digit
    const value = e.target.value.length > 1 ? e.target.value.slice(-1) : e.target.value;
    setValue(name, value);

    // if digit belongs to parentNumberInput, update parentNumberInput using provided function
    if (updateParentNumberInput) updateParentNumberInput();

    // if next sibling digit input exists and current digit is not empty, shift focus to the next sibling digit input
    if (value.length === 1 && nextInput) setFocus(nextInput);

  };

  return (
    <div className={styles.customDigitInputContainer}>
        <input
          className={errors[name] && styles.errorHighlight}
          {...register(name, registerObj)}
          type="number"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
  );
}