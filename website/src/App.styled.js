import styled from "styled-components";

const MainBody = styled.body`
  background: green;
  width: 100vw;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Set rules to fill background */

  /* Set up proportionate scaling */
  width: 100%;
  height: 100vh;
  color: red;
  flex-grow: 1;
`;

export { MainWrapper, MainBody };
