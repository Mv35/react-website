import React from "react";

import {
  LifeGoalsPictureWrapper,
  LifeGoalsPictureWrapperText,
  LifeGoalPicture,
} from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
  // this.setState = { first: 1, second: 2 };
  console.log("props", props);
  return props.name % 2 === 0 ? (
    <LifeGoalsPictureWrapper>
      <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
      <LifeGoalsPictureWrapperText>{props.name}</LifeGoalsPictureWrapperText>
    </LifeGoalsPictureWrapper>
  ) : (
    <></>
  );
};

export default LifeGoalsIcon;
