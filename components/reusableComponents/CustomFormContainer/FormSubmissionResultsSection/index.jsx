"use client";

import { useState, useEffect } from "react";
import { useCustomFormContext } from "../CustomFormContext";

import SubmissionResultsInfo from "./SubmissionResultsInfo";



import styles from "./FormSubmissionResultsSection.module.css";

const animationTimeout = (callback) => {
  const timer = setTimeout(callback, 4000);
  return () => clearTimeout(timer);
};

export default function FormSubmissionResultsSection() {

  const {
    form: formState,
    formConfigArr,
    isSubmissionServerActionComplete, // null = not submitted yet, true = successful, false = unsuccessful
  } = useCustomFormContext();

  const {
    submissionSuccessInfo,
    submissionFailureInfo,
    submissionLoadingInfo,
  } = formConfigArr[0];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if serveraction performed, set isloading to false, after timeout
    if (isSubmissionServerActionComplete !== null) return animationTimeout(() => setIsLoading(false));
  }, [isSubmissionServerActionComplete]);

  return (
    <section className={styles.formSectionContainer}>

      <section
        className={styles.formSubmissionResultsSection}
        style={{ width: "100%" }}
      >

        {
          isLoading && <SubmissionResultsInfo submissionResultsInfo={submissionLoadingInfo} isLoading={isLoading} />
        }

        {
          !isLoading && isSubmissionServerActionComplete === true && <SubmissionResultsInfo submissionResultsInfo={submissionSuccessInfo} />
        }

        {
          !isLoading && isSubmissionServerActionComplete === false && <SubmissionResultsInfo submissionResultsInfo={submissionFailureInfo} />
        }

      </section>
    </section>
  );
}