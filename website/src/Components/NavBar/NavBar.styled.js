import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;

const NavBarLinks = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavBarLink = styled.li`
    color: block;
    padding: 1rem;
    display: block;
`;

const NavBarLinkAncor = styled.a`
    text-decoration: none;
    color: inherit;
`;

export { NavBar, NavBarLinks, NavBarLink, NavBarLinkAncor };
