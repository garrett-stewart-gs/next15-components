"use client";

import React from "react";

import useActiveClass from "@/utils/hooks/useActiveClass";

import defaultStyles from "./DropdownMenuWrapper.module.css";

export default function DropdownMenuWrapper({ parentStyles = null, children }) {

  const {
    isActive: isDropdownActive,
    addActiveClass,
    removeActiveClass,
  } = useActiveClass();

  const childArray = React.Children.toArray(children);

  return (
    <div
      onMouseEnter={addActiveClass}
      onMouseLeave={removeActiveClass}
      onClick={
        () => {
          if (!isDropdownActive) return addActiveClass();

        }
      }
      className={`
        ${defaultStyles.dropdownMenuWrapper}
        ${isDropdownActive ? defaultStyles.active : ""}
        ${parentStyles ? parentStyles.dropdownMenuWrapper : ""}
        ${(parentStyles && isDropdownActive) ? parentStyles.active : ""}
      `}
    >
      <header className={defaultStyles.dropdownTitle}>
        {childArray[0]}
      </header>
      <div className={defaultStyles.dropdownContent}>
        {childArray.slice(1)}
      </div>
    </div>
  );
}