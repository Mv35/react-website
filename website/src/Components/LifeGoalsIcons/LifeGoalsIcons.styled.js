import styled from "styled-components";

const LifeGoalPicture = styled.img`
  height: 100px;
  width: 100px;
  border: 5px solid red;
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
  display: flex;
  flex-grow: 1;
  margin-top: 25%;
  margin-bottom: 25%;
  float: ${(props) => (props.isOdd ? "left" : "right")};
`;

const LifeGoalText = styled.div`
  color: black;
  padding-top: 50px;
  margin: 25px;
  float: ${(props) => (props.isOdd ? "right" : "left")};
`;
export { LifeGoalPicture, LifeGoalText };
