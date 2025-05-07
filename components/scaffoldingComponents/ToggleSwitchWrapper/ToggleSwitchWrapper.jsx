"use client";

import React from "react";

import styles from "./ToggleSwitchWrapper.module.css";

export default function ToggleSwitchWrapper({ activeParentIndex = 0, parentStyles = null, onClick = null, children }) {

  // grab 1st 2 children. ensures only 2 children are utilized
  const childrenArr = React.Children.toArray(children).slice(0, 2);


  return (
    <button
      className={`
        ${styles.toggleSwitchWrapper}
        ${parentStyles ? parentStyles.toggleSwitchWrapper : ""}
        ${activeParentIndex === 0 ? styles.left : ""}
        ${activeParentIndex === 1 ? styles.right : ""}
      `}
      onClick={() => onClick && onClick()}
    >
      <div
        className={`
          ${styles.slidingBackground}
          ${activeParentIndex === 0 ? styles.left : ""}
          ${activeParentIndex === 1 ? styles.right : ""}
        `}
      >
      </div>
      {childrenArr}
    </button>
  );
}