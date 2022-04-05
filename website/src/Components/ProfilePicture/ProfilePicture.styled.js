import styled from "styled-components";
import { ReactComponent as ProfilePicture } from "../../Assets/ProfilePicture.svg";

const Picture = styled(ProfilePicture)`
  width: 40rem;
  height: auto;
`;

const PictureWrapper = styled.div`
  padding: 1rem;
  padding-top: 2rem;
  /* margin: auto; */
`;

export { Picture, PictureWrapper };
