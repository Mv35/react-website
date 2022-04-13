import styled from "styled-components";
import { ReactComponent as ProfilePicture } from "../../Assets/ProfilePicture.svg";

const Picture = styled(ProfilePicture)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  padding: 1rem;
`;

const PictureWrapper = styled.div``;

export { Picture, PictureWrapper };
