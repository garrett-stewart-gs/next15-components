
import styles from "./RightArrowIcon.module.css";

export default function RightArrowIcon({ onClick }) {

  return (
    <svg
      className={styles.rightArrowIcon}
      onClick={
        (e) => {
          e.stopPropagation();
          onClick();
        }
      }
      viewBox="0 0 40 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path d="M15 100L28.3333 60L15 20" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  );
}