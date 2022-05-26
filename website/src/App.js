import { useState } from "react";
import { MainWrapper } from "./App.styled";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import DownloadPdfButton from "./Components/DownloadPDFButton/DownloadPdfButton";
import ShowOverlayButton from "./Components/ShowOverlayButton/ShowOverlayButton";
import ExperiencesOverlay from "./Components/ExperiencesOverlay/ExperiencesOverlay";

const App = () => {
    const [showExperiencesOverlay, setShowExperiencesOverlay] = useState(false);

    const ShowOverlayButtonClicked = () => {
        setShowExperiencesOverlay(!showExperiencesOverlay);
    };
    return (
        <>
            <MainWrapper>
                hello This is me <ProfilePicture></ProfilePicture>
                <ShowOverlayButton
                    clicked={ShowOverlayButtonClicked}
                    text={"Show Experiences"}
                ></ShowOverlayButton>
                <ExperiencesOverlay
                    className="ExperienceOverlay"
                    show={showExperiencesOverlay}
                    clicked={ShowOverlayButtonClicked}
                />
                <DownloadPdfButton />
            </MainWrapper>
        </>
    );
};

export default App;
