"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import styles from "./CustomRadioOption.module.css";

export default function CustomRadioOption({ optionObj, parentValidation = null }) {

  const {
    form: { register, formState: { errors }, },
  } = useCustomFormContext();

  const {
    optionTitle: title,
    optionType: type,
    optionName: name,
    optionLabel: label,
    optionPlaceholder: placeholder,
    optionValue: value,
    optionRegisterObj,
  } = optionObj;

  const registerObj = parentValidation ? { ...optionRegisterObj, validate: parentValidation } : optionRegisterObj;

  return (
    <div className={styles.customRadioOptionContainer}>
      <input
        {...register(name, registerObj)}
        type="radio"
        value={value}
        onClick={(e) => e.target.blur()} // triggers validation immediately, if form mode set to 'onBlur' or 'onTouched'
      />
      {label && <span>{label}</span>}
    </div>
  );
}