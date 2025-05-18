

import defaultStyles from "./TextStyleWrapperDefault.module.css";

export default function TextStyleWrapper({ parentStyles = null, mouseEventHandlers = {}, children }) {

  return (
    <div 
      className={`
        ${defaultStyles.textStyleWrapper}
        ${parentStyles ? parentStyles.textStyleWrapper : ""}
      `}
      {...mouseEventHandlers}
    >
      {children}
    </div>
  );
}