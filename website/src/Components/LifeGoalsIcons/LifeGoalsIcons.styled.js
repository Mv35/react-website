import styled from "styled-components";


const LifeGoalsPictureWrapper = styled.span`
height: 10vh;
width: 10vh;
background-color: #bbb;
border: 5px solid red;
border-radius: 50%;
display: flex;
position: relative;
flex-grow:1;
`;

const LifeGoalsPictureWrapperText = styled.div`
    color: black;
    top:0%;
    left: 40%;
    position: absolute;
    display:flex;
    flex-grow:1;
`;

const LifeGoalPicture = styled.img`
    height:100%;
    width:100%;
    clip-path: circle(50% at 50% 50%);
    display:flex;
    flex-grow:1;
`

export { LifeGoalsPictureWrapper, LifeGoalsPictureWrapperText, LifeGoalPicture };