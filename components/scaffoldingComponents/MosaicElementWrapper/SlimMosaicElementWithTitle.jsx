
import MosaicElementWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import styles from "./SlimMosaicElementWithTitle.module.css";

export default function SlimMosaicElementWithTitle({ title, styleObj, onClick = () => { } }) {

  return (
    <MosaicElementWrapper parentStyles={styles} styleObj={styleObj} onClick={ onClick }>

      <TextStyleWrapper parentStyles={styles}>
        <p>{title}</p>
      </TextStyleWrapper>

    </MosaicElementWrapper>
  );
}