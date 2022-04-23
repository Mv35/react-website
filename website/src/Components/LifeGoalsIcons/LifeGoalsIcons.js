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
      <div style={{ width: "50px" }}>
        <LifeGoalTextRight name={props.name}>
          {props.isOdd ? props.name : ""}
        </LifeGoalTextRight>
      </div>
      <div>
        <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
      </div>
      <div style={{ width: "50px" }}>
        <LifeGoalTextLeft name={props.name}>
          {props.isOdd ? "" : props.name}
        </LifeGoalTextLeft>
      </div>
    </div>
  );
};

export default LifeGoalsIcon;
