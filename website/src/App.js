import { MainWrapper }  from "./App.styled";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import LifeGoalsIcon from "./Components/LifeGoalsIcons/LifeGoalsIcons";
import lifeGoalTurin from "./Assets/lifeGoal_turin.jpeg"
import styled from "styled-components"

const LifeGoals = () => {
  const test = [1,2,3,4,5]
  return test.map((e) => <LifeGoalsIcon name={e} src={lifeGoalTurin}>
</LifeGoalsIcon>)
}

const App = () => {
  console.log('this is my react website with a svg pic of me')
  return (
    <MainWrapper>This is me <ProfilePicture></ProfilePicture>
    
    <div>{LifeGoals()}</div>
    </MainWrapper>
    
  );
};

export default App;

