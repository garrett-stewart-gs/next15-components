import React from 'react';

import styles from "./FormButton.module.css";

export default function FormButton({ buttonText, onClick }) {

  return (
    <button
      className={styles.formButton}
      type="button"
      onClick={onClick}
    >
      <p>
        {buttonText}
      </p>
    </button>
  );
}