import styled from "styled-components";
import { ReactComponent as ProfilePicture } from "../../Assets/ProfilePicture.svg";

const Picture = styled(ProfilePicture)`
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-grow: 1;
    padding: 1%;
    margin-bottom: 3%;
`;

export { Picture };
