import styled from "styled-components";

const MainBody = styled.body`
  background: green;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: red;
  flex-grow: 1;
`;

export { MainWrapper, MainBody };
