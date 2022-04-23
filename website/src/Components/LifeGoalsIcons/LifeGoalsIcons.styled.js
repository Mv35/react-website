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
`;

const LifeGoalTextLeft = styled.div`
  color: black;
  padding-top: 75px;
  margin-left: 25%;
`;
const LifeGoalTextRight = styled.div`
  color: black;
  padding-top: 75px;
`;
export { LifeGoalPicture, LifeGoalTextLeft, LifeGoalTextRight };
