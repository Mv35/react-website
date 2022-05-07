import { MainWrapper } from "./App.styled";
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
  const textArray = [
    "this is for Turin",
    "this is for Thailand",
    "this is for Bournemouth1",
    "this is for Bournemouth2",
  ];
  const lastIndex = imagesArray.length - 1;
  console.log("aa ", lastIndex);
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

const App = () => {
  console.log("this is my react website with a svg pic of me");
  return (
    <MainWrapper>
      This is me <ProfilePicture></ProfilePicture>
      <div className="LifeGoalsDiv" style={{ width: "100%" }}>
        {LifeGoals()}
      </div>
      <DownloadPdfButton>click me</DownloadPdfButton>
    </MainWrapper>
  );
};

export default App;
