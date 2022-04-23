import React from "react";

import {
  LifeGoalPicture,
  LifeGoalTextLeft,
  LifeGoalTextRight,
} from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
  console.log("props", props);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "100%" }}>
        <LifeGoalTextLeft name={props.name}>
          {props.isOdd ? props.name + "ciaostron \n sdasdasds" : ""}
        </LifeGoalTextLeft>
      </div>
      <div>
        <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
      </div>
      <div style={{ width: "100%" }}>
        <LifeGoalTextRight name={props.name}>
          {props.isOdd ? "" : props.name + "ciaostronzo \n asdasdsada"}
        </LifeGoalTextRight>
      </div>
    </div>
  );
};

export default LifeGoalsIcon;
