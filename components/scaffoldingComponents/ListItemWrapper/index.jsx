
import styles from "./ListItemWrapper.module.css";

export default function ListItemWrapper({ parentIsActive = null, parentStyles = null, onClick = null, children }) {

  return (
    <article
      className={`
        ${styles.listItemWrapper}
        ${parentStyles ? parentStyles.listItemWrapper : ""}
        ${parentIsActive ? parentStyles.active : ""}
      `}
      onClick={onClick}
    >
      {children}
    </article>
  );
}