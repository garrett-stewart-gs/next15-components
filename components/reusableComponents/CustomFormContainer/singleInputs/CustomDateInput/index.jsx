"use client";

import { useFormContext } from "../../CustomFormContext";

import styles from "./CustomDateInput.module.css";


// props: {
//   inputObj: {} || null,
//   optionObj: {} || null,
// }
export default function CustomDateInput(props) {

  const {
    form: { register, watch, formState: { errors }, },
  } = useFormContext();

  const prefix = props.optionObj ? 'option' : 'input';
  const {
    [`${prefix}Title`]: title,
    [`${prefix}Type`]: type,
    [`${prefix}Name`]: name,
    [`${prefix}Label`]: label,
    [`${prefix}Placeholder`]: placeholder,
    [`${prefix}Value`]: value,
    [`${prefix}RegisterObj`]: registerObj,
  } = props[`${prefix}Obj`];

  return (
    <div className={styles.customDateInputContainer}>

      {title && <h5 className={styles.customDateInputTitle}>{title}</h5>}

      <main className={styles.customDateInputBody}>
        {label && <span>{label}</span>}
        <input
          {...register(name, registerObj)}
          type={type}
          placeholder={placeholder}
        />
      </main>
      <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p>

    </div>
  );
}