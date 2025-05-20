

import styles from "./TextStyleWrapperDefault.module.css";

export default function TextStyleWrapper({ parentStyles = null, mouseEventHandlers = {}, children }) {

  return (
    <div 
      className={`
        ${styles.textStyleWrapper}
        ${parentStyles ? parentStyles.textStyleWrapper : ""}
      `}
      {...mouseEventHandlers}
    >
      {children}
    </div>
  );
}