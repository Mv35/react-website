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
          {!props.isOdd ? props.name + "ciaostron \n sdasdasds" : ""}
        </LifeGoalTextLeft>
      </div>

      <div>
        <hr width="1" size="50" color="red"></hr>
        <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
        <hr width="1" size="50" color="red"></hr>
      </div>
      <div style={{ width: "100%" }}>
        <LifeGoalTextRight name={props.name}>
          {props.isOdd ? props.name + "ciaostron \n sdasdasds" : ""}
        </LifeGoalTextRight>
      </div>
    </div>
  );
};

export default LifeGoalsIcon;
