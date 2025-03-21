"use client";

import { useRef, useEffect } from "react";
import { useCustomFormContext } from "../../CustomFormContext";

import { DayPicker } from "react-day-picker";

import styles from "./CustomCalendarInput.module.css";
import "react-day-picker/style.css";
import "./custom-day-picker-styles.css";

// props: {
//   inputObj: {} || null,
//   optionObj: {} || null,
// }
export default function CustomCalendarInput(props) {

  const containerRef = useRef(null);

  const {
    form: { register, watch, setValue, formState: { errors }, },
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
    [`${prefix}CalendarMode`]: calendarMode,
    [`${prefix}CalendarStartDate`]: calendarStartDate,
    [`${prefix}CalendarDisabledBeforeDate`]: calendarDisabledBeforeDate,
    [`${prefix}CalendarEndDate`]: calendarEndDate,
  } = props[`${prefix}Obj`];

  const todaysDate = new Date(); // todays date used as reference for generating meaningful dates
  const finalStartDate = calendarStartDate || new Date(todaysDate.getFullYear(), 0, 1); // if destructured start date is falsey, set start date to 1st of current year
  const finalDisabledBeforeDate = calendarDisabledBeforeDate || new Date().setDate(todaysDate.getDate() + 1); // if destructured disabled before date is falsey, default to tomorrow's date
  const finalEndDate = calendarEndDate || new Date(finalStartDate.getFullYear() + 5, 11); // if destructured calendar end date is falsey, default to 5 years in the future

  return (
    <div className={styles.customCalendarInputContainer}>

      {title && <h5 className={styles.customCalendarInputTitle}>{title}</h5>}

      <main className={styles.customCalendarInputBody}>

        <input type="hidden" {...register(name, registerObj)} />

        <DayPicker
          mode={calendarMode || "multiple"} // sets calendar mode if present, or allows multiple date selections by default
          selected={watch(name) || []}
          onSelect={(dates) => setValue(name, dates) || []}
          captionLayout="dropdown" // creates dropdown menu for month and year selection
          startMonth={finalStartDate} // sets lower limit on all date selection
          endMonth={finalEndDate} // sets upper limit on all date selection
          disabled={{ before: finalDisabledBeforeDate }} // disables selecting dates prior to today's date
          showOutsideDays // shows days outside of the current month, pairs well with fixedWeeks property
          fixedWeeks // ensures 6 weeks are always shown, stabilizing calendar size for styling 
          animate
        />

      </main>

      <p className={styles.inputErrorMessage}>{errors[name] && errors[name].message}</p>

    </div>
  );
}