
import ListItemWrapper from ".";
import BulletWrapper from "../BulletWrapper";
import TextStyleWrapper from "../TextStyleWrapper";

import LinkButton from "@/components/reusableComponents/Buttons/LinkButton";

import styles from "./NumberedDescriptiveLinkItem.module.css";

export default function NumberedDescriptiveLinkItem({ bulletNumber, title, description, buttonText, buttonLink }) {

  return (
    <ListItemWrapper parentStyles={styles}>

      <div>

        <BulletWrapper>{bulletNumber}</BulletWrapper>

        <TextStyleWrapper parentStyles={styles}>
          <h5>{title}</h5>
          <h6>{description}</h6>
        </TextStyleWrapper>

      </div>

      <LinkButton
        parentStyles={styles}
        link={buttonLink}
        text={buttonText}
      />


    </ListItemWrapper>
  );
}