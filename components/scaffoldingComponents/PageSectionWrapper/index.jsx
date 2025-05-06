
import styles from "./PageSectionWrapperDefault.module.css";

export default function PageSectionWrapper({parentStyles = null, children }) {

  return (
    <section className={`
      ${styles.pageSectionWrapper}
      ${parentStyles ? parentStyles.pageSectionWrapper : ""}
    `} >
      {children}
    </section>
  );
}