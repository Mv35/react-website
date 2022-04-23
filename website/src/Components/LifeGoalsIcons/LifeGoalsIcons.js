import React from "react";

import { LifeGoalPicture } from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
  // this.setState = { first: 1, second: 2 };
  console.log("props", props);
  return props.name % 2 === 0 ? (
    <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
  ) : (
    // <LifeGoalsPictureWrapperText>{props.name}</LifeGoalsPictureWrapperText>
    <>ciao</>
  );
};

export default LifeGoalsIcon;
