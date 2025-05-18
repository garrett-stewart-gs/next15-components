
import styles from "./PageSectionWrapperDefault.module.css";

export default function PageSectionWrapper({ parentStyles = null, mouseEventHandlers = {}, children }) {

  return (
    <section
      className={`
        ${styles.pageSectionWrapper}
        ${parentStyles ? parentStyles.pageSectionWrapper : ""}
      `}
      {...mouseEventHandlers}
    >
      {children}
    </section>
  );
}