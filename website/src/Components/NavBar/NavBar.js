import React from "react";
import {
    NavBar,
    NavBarLinks,
    NavBarLink,
    NavBarLinkAncor,
    NavBarTitle,
} from "./NavBar.styled";

const NavBarComponent = () => {
    return (
        <NavBar className="navbar">
            <NavBarTitle className="navbar-logo">Milo Volpicelli</NavBarTitle>
            <div className="menu-icon"> </div>
            <NavBarLinks>
                <NavBarLink>
                    <NavBarLinkAncor href="/experiences">
                        Experiences
                    </NavBarLinkAncor>
                </NavBarLink>
                <NavBarLink>
                    <NavBarLinkAncor href="/projects">Projects</NavBarLinkAncor>
                </NavBarLink>
                <NavBarLink>
                    <NavBarLinkAncor href="/contacts">Contact</NavBarLinkAncor>
                </NavBarLink>
            </NavBarLinks>
        </NavBar>
    );
};

export default NavBarComponent;
