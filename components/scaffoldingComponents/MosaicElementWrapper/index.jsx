
import styles from "./MosaicElementWrapper.module.css";

export default function MosaicElementWrapper({ parentStyles = null, styleObj = null, onClick = () => { }, children }) {

  return (
    <article
      className={`
        ${styles.mosaicElementWrapper}
        ${parentStyles ? parentStyles.mosaicElementWrapper : ""}
      `}
      style={styleObj ? styleObj : {}}
      onClick={onClick}
    >
      {children}
    </article>
  );
}