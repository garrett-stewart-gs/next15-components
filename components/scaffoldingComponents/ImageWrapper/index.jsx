

import defaultStyles from "./ImageWrapperDefault.module.css";

export default function ImageWrapper({ parentStyles, children }) {

  return (
    <div className={`
      ${defaultStyles.imageWrapper}
      ${parentStyles ? parentStyles.imageWrapper : ""}
    `}>
      {children}
    </div >
  );
}