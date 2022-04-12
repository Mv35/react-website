import React from "react";

import {LifeGoalsPictureWrapper, LifeGoalsPictureWrapperText, LifeGoalPicture} from './LifeGoalsIcons.styled'

const LifeGoalsIcon = (props) => {
  return (
        <LifeGoalsPictureWrapper>
            <LifeGoalPicture src={props.src} alt={props.alt}></LifeGoalPicture>
            <LifeGoalsPictureWrapperText>{props.name}</LifeGoalsPictureWrapperText>
        </LifeGoalsPictureWrapper>

  );
};

export default LifeGoalsIcon;