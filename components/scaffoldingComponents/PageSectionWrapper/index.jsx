
import styles from "./PageSectionWrapperDefault.module.css";

export default function PageSectionWrapper({parentStyles, children }) {

  return (
    <section className={`
      ${styles.pageSectionWrapper}
      ${parentStyles?.pageSectionWrapper}
    `} >
      {children}
    </section>
  );
}