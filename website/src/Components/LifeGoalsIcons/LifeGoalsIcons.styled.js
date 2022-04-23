import styled from "styled-components";

// const LifeGoalsPictureWrapper = styled.span`
//   height: 50%;
//   width: 50%;
//   background-color: #bbb;
//   border: 5px solid red;
//   border-radius: 50%;
//   display: block;
//   position: relative;
//   flex-grow: 1;
//   float: top;
//   margin-bottom: 25%;
//   margin-top: 25%;
// `;

// const LifeGoalsPictureWrapperText = styled.div`
//   color: black;
//   top: 0%;
//   left: 40%;
//   position: absolute;
//   display: flex;
//   flex-grow: 1;
// `;

const LifeGoalPicture = styled.img`
  height: 100px;
  width: 100px;
  border: 5px solid red;
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
  display: flex;
  flex-grow: 1;
  margin-bottom: 25%;
  margin-top: 25%;
`;

export { LifeGoalPicture };
