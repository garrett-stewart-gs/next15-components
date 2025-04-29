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

  // abstracted onclick handler for modified/cloned 1st child element (for disabling onclicks when dropdown is inactive for mobile users)
  const modifiedOnClick = (e) => {
    if (!isDropdownActive) {
      e.preventDefault();
      e.stopPropagation();
      addActiveClass();
    }
    if (childArray[0].props.onClick) {
      childArray[0].props.onClick(e);
    }
  };

  // modified 1st child element for disabling its click handler if dropdown is not active
  // allows mobile user to click to open the dropdown and then click again to trigger the regular click event
  // designed with links in mind
  const modifiedFirstChild = React.isValidElement(childArray[0]) ? React.cloneElement(childArray[0], { onClick: modifiedOnClick }) : childArray[0];

  return (
    <div
      onMouseLeave={removeActiveClass}
      className={`
        ${defaultStyles.dropdownMenuWrapper}
        ${isDropdownActive ? defaultStyles.active : ""}
        ${parentStyles ? parentStyles.dropdownMenuWrapper : ""}
        ${(parentStyles && isDropdownActive) ? parentStyles.active: ""}
      `}
    >
      <header
        className={`
          ${defaultStyles.dropdownTitle}
          ${parentStyles ? parentStyles.dropdownTitle : ""}
        `}
        onMouseEnter={addActiveClass}
      >
        {modifiedFirstChild}
      </header>
      <div className={`
          ${defaultStyles.dropdownContent}
          ${parentStyles ? parentStyles.dropdownContent : ""}
        `}
      >
        {childArray.slice(1)}
      </div>
    </div>
  );
}