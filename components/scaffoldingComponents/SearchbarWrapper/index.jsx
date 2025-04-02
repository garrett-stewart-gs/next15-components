
import defaultStyles from "./SearchbarWrapper.module.css";

export default function SearchbarWrapper({ parentStyles, children }) {

  return (
    <div
      className={`
        ${defaultStyles.searchbarWrapper}
        ${parentStyles?.searchbarWrapper}  
      `}
    >
      {children}
    </div>
  );
}