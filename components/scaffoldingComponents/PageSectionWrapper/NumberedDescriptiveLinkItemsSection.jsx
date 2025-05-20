
import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import NumberedDescriptiveLinkItem from "../ListItemWrapper/NumberedDescriptiveLinkItem";

import styles from "./NumberedDescriptiveLinkItemsSection.module.css";

export default function NumberedDescriptiveLinkItemsSection({ title1, title2, linkItemsArrObj }) {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </TextStyleWrapper>

      <div className={styles.numberedDescriptiveLinksContainer}>
        {
          linkItemsArrObj.map((linkItemObj, index) => {
            return (
              <NumberedDescriptiveLinkItem
                key={`Numbered Descriptive Link ${index}`}
                bulletNumber={index + 1}
                {...linkItemObj}
              />
            );
          })
        }
      </div>

    </PageSectionWrapper>
  );
}