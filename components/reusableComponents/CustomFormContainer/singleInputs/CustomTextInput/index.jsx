"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import styles from "./CustomTextInput.module.css";


// props: {
//   inputObj: {} || null,
//   optionObj: {} || null,
// }
export default function CustomTextInput(props) {

  const {
    form: { register, setValue, setFocus, formState: { errors }, },
  } = useCustomFormContext();

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

  const { updateParentTextInput, nextInput } = props;

  const handleChange = (e) => {

    // set form input value to last typed digit
    const value = e.target.value;
    setValue(name, value);

    // if digit belongs to parentTextInput, update parentTextInput using provided function
    if (updateParentTextInput) updateParentTextInput();

    // if next sibling digit input exists and current digit is not empty, shift focus to the next sibling digit input
    if (value.length === 1 && nextInput) setFocus(nextInput);

  };

  return (
    <div className={styles.customTextInputContainer}>

      {title && <h5 className={styles.customTextInputTitle}>{title}</h5>}

      <main className={styles.customTextInputBody}>
        {label && <span>{label}</span>}
        <div className={styles.inputWrapper} >
          <input
            {...register(name, registerObj)}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
          />
          <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p>
        </div>
      </main>

    </div>
  );
}