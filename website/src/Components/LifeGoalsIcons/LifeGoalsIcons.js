import React from "react";
import {
    LifeGoalPicture,
    LifeGoalText,
    VerticalLine,
} from "./LifeGoalsIcons.styled";

const LifeGoalsIcon = (props) => {
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "100%" }}>
                {!props.isOdd && (
                    <LifeGoalText name={props.name} isOdd={props.isOdd}>
                        <h1>test</h1>
                        <div>{props.text}</div>
                    </LifeGoalText>
                )}
            </div>
            <div>
                <VerticalLine
                    width="1"
                    size="50"
                    color="red"
                    name={props.name}
                    isFirst={props.name === 0 ? true : false}
                />
                <LifeGoalPicture
                    src={props.src}
                    alt={props.alt}
                ></LifeGoalPicture>
                <VerticalLine
                    width="1"
                    size="50"
                    color="red"
                    name={props.name}
                    isLast={props.isLast}
                />
            </div>
            <div style={{ width: "100%" }}>
                {props.isOdd && (
                    <LifeGoalText name={props.name} isOdd={props.isOdd}>
                        <h1>test</h1>
                        <div>{props.text}</div>
                    </LifeGoalText>
                )}
            </div>
        </div>
    );
};

export default LifeGoalsIcon;
