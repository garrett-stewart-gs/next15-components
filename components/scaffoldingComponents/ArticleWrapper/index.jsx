
import styles from "./ArticleWrapperStyles.module.css";

export default function ArticleWrapper({ parentStyles = null, children }) {

  return (
    <article
      className={`
        ${styles.articleWrapper}
        ${parentStyles ? parentStyles.articleWrapper : ""}
      `}
    >
      {children}
    </article>
  );
}