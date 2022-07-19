import styled from "styled-components";

const Overlay = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    margin: 1%;
    margin-top: 0;
    z-index: 3;
`;

export { Overlay };
