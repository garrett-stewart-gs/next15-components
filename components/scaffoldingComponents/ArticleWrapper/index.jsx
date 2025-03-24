
import styles from "./DefaultWrapperStyles.module.css";

export default function ArticleWrapper({ parentStyles, children }) {

  return (
    <article className={`
      ${styles.articleWrapper}
      ${parentStyles?.articleWrapper}
    `}>
      {children}
    </article>
  );
}