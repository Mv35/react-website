import React from "react";

import { LifeGoalPicture, LifeGoalText } from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
  console.log("props", props);
  return (
    <div>
      <LifeGoalPicture
        isOdd={props.isOdd}
        src={props.src}
        alt={props.alt}
      ></LifeGoalPicture>
      <LifeGoalText name={props.name}>{props.name}ciao</LifeGoalText>
    </div>
  );
};

export default LifeGoalsIcon;
