
import defaultStyles from "./AnimatedPlusMinus.module.css";

export default function AnimatedPlusMinusIcon({ parentIsActive, parentStyles }) {

  return (
    <svg
      className={`
        ${defaultStyles.animatedPlusMinusIcon}
        ${parentStyles?.animatedPlusMinusIcon}  
        ${parentIsActive ? defaultStyles.active : ""}
      `}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path
        d="M86.25 63.75H33.75C32.7554 63.75 31.8016 63.3549 31.0984 62.6516C30.3951 61.9484 30 60.9946 30 60C30 59.0054 30.3951 58.0516 31.0984 57.3484C31.8016 56.6451 32.7554 56.25 33.75 56.25H86.25C87.2446 56.25 88.1984 56.6451 88.9017 57.3484C89.6049 58.0516 90 59.0054 90 60C90 60.9946 89.6049 61.9484 88.9017 62.6516C88.1984 63.3549 87.2446 63.75 86.25 63.75Z"
      />

      <path
        d="M86.25 63.75H33.75C32.7554 63.75 31.8016 63.3549 31.0984 62.6516C30.3951 61.9484 30 60.9946 30 60C30 59.0054 30.3951 58.0516 31.0984 57.3484C31.8016 56.6451 32.7554 56.25 33.75 56.25H86.25C87.2446 56.25 88.1984 56.6451 88.9017 57.3484C89.6049 58.0516 90 59.0054 90 60C90 60.9946 89.6049 61.9484 88.9017 62.6516C88.1984 63.3549 87.2446 63.75 86.25 63.75Z"
      />

    </svg>
  );
}