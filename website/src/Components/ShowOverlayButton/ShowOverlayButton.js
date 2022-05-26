import React from "react";
import { Button } from "./ShowOverlayButton.styled";

const ShowOverlayButton = (props) => {
    return <Button onClick={props.clicked}>{props.text}</Button>;
};

export default ShowOverlayButton;
