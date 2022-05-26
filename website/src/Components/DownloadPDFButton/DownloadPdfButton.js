import React from "react";
import { Button } from "./DownloadPdfButton.styled";

const clicked = () => {
    console.log("button clicked will attempt to download cv");
};

const DownloadPdfButton = () => {
    return (
        <a
            href="/ProfilePicture.svg"
            download="milovolpicelli_cv.svg"
            style={{ textDecoration: "none", display: "contents" }}
        >
            <Button onClick={clicked}>Download CV</Button>
        </a>
    );
};

export default DownloadPdfButton;
