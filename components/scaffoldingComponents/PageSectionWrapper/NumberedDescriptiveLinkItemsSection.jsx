
import PageSectionWrapper from ".";
import TextStyleWrapper from "../TextStyleWrapper";

import NumberedDescriptiveLinkItem from "../ListItemWrapper/NumberedDescriptiveLinkItem";

import styles from "./NumberedDescriptiveLinkItemsSection.module.css";

export default function NumberedDescriptiveLinkItemsSection({ linkItemsArrObj }) {

  return (
    <PageSectionWrapper parentStyles={styles}>

      <TextStyleWrapper parentStyles={styles}>
        <h1>What Now?</h1>
        <h2>Let's Get Started</h2>
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