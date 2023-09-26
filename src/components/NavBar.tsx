import React, {Component, createRef, MouseEventHandler, RefObject, useRef} from 'react';
import ToggleThemeBtn from "./ToggleThemeBtn";
import NavBtn from "./NavBtn";
import {INavLink} from "../App";
import "../styles/NavBar.css"

interface IProps {
    navLinks: INavLink[]
}

class NavBar extends Component<IProps> {

    render() {
        let id = 0;
        return (
            <header className="navigation-bar">
                <div className="navigation-bar-content">
                    <div className={"logo-section"} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                        <span>leonardo candio</span>
                    </div>
                    <div className={"navigation-link-section"}>
                        {this.props.navLinks.map((link) => (
                            <NavBtn key={id++} name={link.name} compRef={link.compRef}/>
                        ))}
                    </div>
                    <div className="toggle-theme-section">
                        <ToggleThemeBtn/>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;
