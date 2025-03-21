"use client";

import { useCustomFormContext } from "../../CustomFormContext";

import CustomTextInput from "../../singleInputs/CustomTextInput";

import styles from "./CustomMultiTextInput.module.css";

// used for locations and shipping/billing addresses
// you may want to use multiple multi-text inputs to compose a full shipping address or billing address, depending on grouping/styling
export default function CustomMultiTextInput({ inputObj }) {

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

  const updateParentTextInput = () => {
    const parentTextString = inputOptions.map(option => getValues(option.optionName)).join(', ');
    setValue(name, parentTextString, { shouldValidate: true });
  };

  return (
    <div className={styles.customMultiTextInputContainer}>

      {title && <h5 className={styles.customMultiTextInputTitle}>{title}</h5>}

      <input type="hidden" {...register(name, registerObj)} />
      <div className={styles.inputOptionsContainer}>
        {
          inputOptions.map((optionObj, index) => {
            return (
              <CustomTextInput
                key={`Custom ${type} Input #${index}`}
                optionObj={optionObj}
                nextInput={index + 1 < inputOptions.length ? `${optionObj.optionName.slice(0, -1)}${index + 2}` : ''}
                updateParentTextInput={updateParentTextInput} />
            );
          })
        }
      </div>

    </div>
  );
}