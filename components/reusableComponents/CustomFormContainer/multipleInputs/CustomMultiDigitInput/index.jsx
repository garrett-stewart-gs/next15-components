"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import CustomDigitInput from "../../singleInputs/CustomDigitInput";

import styles from "./CustomMultiDigitInput.module.css";

// used for phone numbers and auth codes
export default function CustomMultiDigitInput({ inputObj }) {

  const {
    form: { register, getValues, setValue, formState: { errors } },
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


  const updateParentNumberInput = () => {
    const parentNumberString = inputOptions.map(option => getValues(option.optionName)).join('');
    setValue(name, parentNumberString, { shouldValidate: true });
  };


  const numberOfSections = Math.floor(inputOptions.length / 3);
  const inputOptionsBySection = [];

  for (let i = 0; i < numberOfSections; i++) {
    const currentIndex = i * numberOfSections;
    const endIndex = (i + 1 !== numberOfSections) ? (currentIndex + 3) : (inputOptions.length);
    inputOptionsBySection.push(inputOptions.slice(currentIndex, endIndex));
  }

  return (
    <div className={styles.customMultiDigitInputContainer}>

      {title && <h5 className={styles.customMultiDigitInputTitle}>{title}</h5>}

      <main className={styles.customMultiDigitInputBody}>
        {label && <span>{label}</span>}
        {/* <span>{label}label here</span> */}

        <input type="hidden" {...register(name, registerObj)} />

        <section className={styles.numberSectionContainer}>
          {

            inputOptionsBySection.map((inputOptionSection, sectionIndex) => {
              return (
                <div
                  key={`multi digit input section ${sectionIndex}`}
                  className={styles.digitContainer}
                >

                  {

                    inputOptionSection.map((optionObj, index) => {
                      const flatIndex = index + (sectionIndex * 3) + 1;
                      return (
                        <CustomDigitInput
                          key={`Custom ${type} Input #${flatIndex}`}
                          optionObj={optionObj}
                          nextInput={(index + 1 < inputOptions.length) ? (`${optionObj.optionName.slice(0, -1)}${flatIndex + 1}`) : ('')}
                          updateParentNumberInput={updateParentNumberInput}
                        />
                      );
                    })

                  }

                </div>
              );
            })

          }
        </section>
      </main>
      <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p>


    </div>
  );
}