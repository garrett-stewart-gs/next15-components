
import defaultStyles from "./ListItemWrapper.module.css";

export default function ListItemWrapper({ parentIsActive, parentStyles, onClick, children }) {

  return (
    <article
      className={`
        ${defaultStyles.listItemWrapper}
        ${parentStyles?.listItemWrapper}
        ${parentIsActive ? parentStyles.active : ""}
      `}
      onClick={onClick}
    >
      {children}
    </article>
  );
}