import styled from "styled-components";

const LifeGoalPicture = styled.img`
  height: 150px;
  width: 150px;
  border: 5px solid red;
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
  display: flex;
  flex-grow: 1;
`;

const LifeGoalText = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  position: relative;
  top: 55%;
  margin-left: ${(props) => (props.isOdd ? "15" : "25")}%;
  margin-right: ${(props) => (props.isOdd ? "25" : "15")}%;
`;

const VerticalLine = styled.hr`
  margin-bottom: 0;
  margin-top: 0;
  opacity: ${(props) => (props.isFirst || props.isLast ? 0 : 1)};
`;

export { LifeGoalPicture, LifeGoalText, VerticalLine };
