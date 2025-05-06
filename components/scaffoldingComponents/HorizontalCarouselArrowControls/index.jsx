
import LeftArrowIcon from "@/components/reusableComponents/ArrowIcons/LeftArrowIcon";
import RightArrowIcon from "@/components/reusableComponents/ArrowIcons/RightArrowIcon";

import defaultStyles from "./HorizontalCarouselArrowControls.module.css";

export default function HorizontalCarouselControls({ handleLeft, handleRight, parentStyles = null, children }) {

  return (
    <main
      className={`
        ${defaultStyles.horizontalCarouselControlsWrapper}
        ${parentStyles ? parentStyles.horizontalCarouselControlsWrapper : ""}
      `}
    >
      
      <LeftArrowIcon onClick={handleLeft} />
      {children}
      <RightArrowIcon onClick={handleRight} />

    </main>
  );
}