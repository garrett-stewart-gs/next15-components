
import CircleIcon from "@/components/reusableComponents/ShapeIcons/CircleIcon";

import defaultStyles from "./HorizontalCarouselIndexSelectorControls.module.css";

export default function HorizontalCarouselIndexSelectorControls({ numberOfElements, parentActiveIndexState, setNewActiveIndex, parentStyles }) {

  const indexArray = [...Array(numberOfElements).keys()];

  return (
    <div
      className={`
        ${defaultStyles.indexSelectorControls}  
        ${parentStyles ? parentStyles.indexSelectorControls : ""}
      `}
    >
      {

        indexArray.map(elementNumber => {
          return (
            <CircleIcon
              key={`horizontal carousel index selector ${elementNumber}`}
              isActive={elementNumber === parentActiveIndexState ? true : false}
              onClick={() => setNewActiveIndex(elementNumber)}
            />
          );
        })

      }
    </div>
  );
}