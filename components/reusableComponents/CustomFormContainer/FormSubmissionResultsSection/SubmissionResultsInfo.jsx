import Image from "next/image";



import styles from "./SubmissionResultsInfo.module.css";

export default function SubmissionResultsInfo({ submissionResultsInfo }) {

  const { title, subTitle, message, imageSrc } = submissionResultsInfo;

  return (
    <main className={styles.submissionResultsInfo}>

      <h3>{title}</h3>
      <h4>{subTitle}</h4>

      <div className={styles.loadingSpinnerContainer}>
        <Image
          src={imageSrc}
          alt="submission results image"
        />
      </div>

      <p>{message}</p>

    </main>
  );
}