
import defaultStyles from "./CircleIcon.module.css";

export default function CircleIcon({ isActive = false, onClick = null, parentStyles = null }) {

  return (
    <svg
      className={`
        ${defaultStyles.circleIcon}
        ${isActive ? defaultStyles.active : ""}
        ${parentStyles ? parentStyles.active : ""}
        ${parentStyles && isActive ? parentStyles.active : ""}
      `}
      onClick={onClick}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 12.389796,72.756905 A 49.290192,49.289551 0 0 1 47.229981,12.393333 49.290192,49.289551 0 0 1 107.60403,47.216269 49.290192,49.289551 0 0 1 72.797439,107.59922 49.290192,49.289551 0 0 1 12.404023,72.809882" />

    </svg>
  );
}