import React from "react";

import { LifeGoalPicture } from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
  // this.setState = { first: 1, second: 2 };
  console.log("props", props);
  return props.name % 2 !== 10 ? (
    <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
  ) : (
    <></>
  );
};

export default LifeGoalsIcon;
