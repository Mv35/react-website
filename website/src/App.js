import { MainBody, MainWrapper } from "./App.styled";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import LifeGoalsIcon from "./Components/LifeGoalsIcons/LifeGoalsIcons";
import lifeGoalTurin from "./Assets/lifeGoal_turin.jpeg";
import lifeGoalBournemouth1 from "./Assets/lifeGoal_bournemouth.jpeg";
import lifeGoalBournemouth2 from "./Assets/lifeGoal_bournemouth2.jpeg";
import lifeGoalThailand from "./Assets/lifeGoal_thailand.jpeg";
import DownloadPdfButton from "./Components/DownloadPDFButton/DownloadPdfButton";

const LifeGoals = () => {
  const imagesArray = [
    lifeGoalTurin,
    lifeGoalThailand,
    lifeGoalBournemouth1,
    lifeGoalBournemouth2,
  ];
  return imagesArray.map((e, i) => (
    <LifeGoalsIcon key={i} name={i} src={e}></LifeGoalsIcon>
  ));
};

const App = () => {
  console.log("this is my react website with a svg pic of me");
  return (
    <MainBody>
      <MainWrapper>
        This is me <ProfilePicture></ProfilePicture>
        <div>{LifeGoals()}</div>
        <DownloadPdfButton>click me</DownloadPdfButton>
      </MainWrapper>
    </MainBody>
  );
};

export default App;
