import { MainWrapper }  from "./App.styled";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import styled from "styled-components"

const AppWrapper = styled.div`
margin: 20px;
background-color: yellow;
`;
const App = () => {
  console.log('this is my react website with a svg pic of me')
  return (
    <MainWrapper>This is me <ProfilePicture></ProfilePicture></MainWrapper>
    
  );
};

export default App;

