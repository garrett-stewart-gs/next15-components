
import styles from "./PopUpWindowWrapper.module.css";

export default function PopUpWindowWrapper({ isActive = false, parentStyles = null, onClick = () => { }, children }) {

  return (
    <main
      className={`
        ${styles.popUpWindowWrapper}
        ${isActive ? styles.active : ""}
        ${parentStyles ? parentStyles.popUpWindowWrapper : ""}
        ${parentStyles && isActive ? parentStyles.active : ""}
      `}
      onClick={onClick}
    >
      {children}
    </main>
  );
}