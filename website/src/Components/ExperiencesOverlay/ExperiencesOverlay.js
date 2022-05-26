import React from "react";
import { Overlay } from "./ExperiencesOverlay.styled";
import LifeGoalsIcon from "../LifeGoalsIcons/LifeGoalsIcons";
import lifeGoalTurin from "../../Assets/lifeGoal_turin.jpeg";
import lifeGoalBournemouth1 from "../../Assets/lifeGoal_bournemouth.jpeg";
import lifeGoalBournemouth2 from "../../Assets/lifeGoal_bournemouth2.jpeg";
import lifeGoalThailand from "../../Assets/lifeGoal_thailand.jpeg";
import ShowOverlayButton from "../ShowOverlayButton/ShowOverlayButton";

const LifeGoals = () => {
    const imagesArray = [
        lifeGoalTurin,
        lifeGoalThailand,
        lifeGoalBournemouth1,
        lifeGoalBournemouth2,
    ];
    const textArray = [
        "this is for Turin",
        "this is for Thailand",
        "this is for Bournemouth1",
        "this is for Bournemouth2",
    ];
    const lastIndex = imagesArray.length - 1;
    return imagesArray.map((e, i) => (
        <LifeGoalsIcon
            key={i}
            name={i}
            src={e}
            isOdd={i % 2 !== 0 ? true : false}
            isLast={i === lastIndex ? true : false}
            text={textArray[i]}
        ></LifeGoalsIcon>
    ));
};

const ExperiencesOverlay = (props) => {
    return (
        <Overlay show={props.show} className="LifeGoalsOverlay">
            {LifeGoals()}
            <div style={{ margin: "10px" }}>
                <ShowOverlayButton
                    clicked={props.clicked}
                    text={"Close"}
                ></ShowOverlayButton>
            </div>
        </Overlay>
    );
};

export default ExperiencesOverlay;
