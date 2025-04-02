

import styles from "./LeftArrowIcon.module.css";

export default function LeftArrowIcon({ onClick }) {

  return (
    <svg
      className={styles.leftArrowIcon}
      onClick={onClick}
      viewBox="0 0 40 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path d="M25 100L11.6667 60L25 20" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  );
}