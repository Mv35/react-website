import styled from "styled-components";

const NavBarTitle = styled.h1`
    font-size: 5vw;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 20vh;
`;

const NavBarLinks = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavBarLink = styled.li`
    color: block;
    padding: 2vw;
    font-size: 3vw;
    display: block;
`;

const NavBarLinkAncor = styled.a`
    text-decoration: none;
    color: inherit;
`;

export { NavBar, NavBarLinks, NavBarLink, NavBarLinkAncor, NavBarTitle };
