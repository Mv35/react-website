import { useState } from "react";
import { MainWrapper } from "./App.styled";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import DownloadPdfButton from "./Components/DownloadPDFButton/DownloadPdfButton";
import ShowOverlayButton from "./Components/ShowOverlayButton/ShowOverlayButton";
import ExperiencesOverlay from "./Components/ExperiencesOverlay/ExperiencesOverlay";
import NavBarComponent from "./Components/NavBar/NavBar";
import Carousel from "./Components/Carousel/Carousel";
const scrollToTop = () => {
    document.getElementById("LifeGoalsOverlay").scroll(0, 0);
};

const App = () => {
    const [showExperiencesOverlay, setShowExperiencesOverlay] = useState(false);

    const ShowOverlayButtonClicked = () => {
        setShowExperiencesOverlay(!showExperiencesOverlay);
        scrollToTop();
    };

    return (
        <>
            <NavBarComponent />
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
                <Carousel></Carousel>
            </MainWrapper>
        </>
    );
};

export default App;
