
import styles from "./SearchbarWrapper.module.css";

export default function SearchbarWrapper({ parentStyles =  null, children }) {

  return (
    <div
      className={`
        ${styles.searchbarWrapper}
        ${parentStyles ? parentStyles.searchbarWrapper : ""}  
      `}
    >
      {children}
    </div>
  );
}