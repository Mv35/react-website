import styled from "styled-components";

const MainBody = styled.body`
  background: green;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: red;
  flex-grow: 1;
  justify-content: center;
`;

export { MainWrapper, MainBody };
