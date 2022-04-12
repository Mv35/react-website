import styled from "styled-components";
import { ReactComponent as ProfilePicture } from "../../Assets/ProfilePicture.svg";

const Picture = styled(ProfilePicture)`
  width: 50vw;
  height: 50vh;
  display:flex;
  flex-grow:1;
`;

const PictureWrapper = styled.div`
  width:50vw;
  height:50vh;
  display:flex;
  flex-grow:1;
  /* margin: auto; */
`;

export { Picture, PictureWrapper };
