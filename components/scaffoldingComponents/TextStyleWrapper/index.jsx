

import defaultStyles from "./TextStyleWrapperDefault.module.css";

export default function TextStyleWrapper({ parentStyles, children }) {

  return (
    <div className={`
      ${defaultStyles.textStyleWrapper}
      ${parentStyles?.textStyleWrapper}
    `}>
      {children}
    </div>
  );
}