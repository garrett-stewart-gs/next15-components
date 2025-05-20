
import ListItemWrapper from ".";
import BulletWrapper from "../BulletWrapper";
import TextStyleWrapper from "../TextStyleWrapper";

import LinkButton from "@/components/reusableComponents/Buttons/LinkButton";

import styles from "./NumberedDescriptiveLinkItem.module.css";

export default function NumberedDescriptiveLinkItem({ bulletNumber, title, description, buttonText }) {

  return (
    <ListItemWrapper parentStyles={styles}>

      <BulletWrapper>{bulletNumber}</BulletWrapper>

      <div>

        <TextStyleWrapper parentStyles={styles}>
          <h5>{title}</h5>
          <h6>{description}</h6>
        </TextStyleWrapper>


        <LinkButton
          link={"/"}
          text={buttonText}
        />

      </div>
      
    </ListItemWrapper>
  );
}