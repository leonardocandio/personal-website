import React, {Component} from 'react';
import ToggleThemeBtn from "./ToggleThemeBtn";
import NavBtn from "./NavBtn";
import "../styles/NavBar.css"

interface NavLink {
    name: string,
    ref: string,
}

class NavBar extends Component {

    smoothScroll(target: number) {
        window.scrollTo({
            top: target,
            left: 0,
            behavior: "smooth",
        })
    };


    render() {

        const navLinks: NavLink[] = [
            {
                name: "work", ref: "test"
            }, {
                name: "open source", ref: "test2"
            }, {
                name: "about me", ref: "fefa"
            }, {
                name: "contact me", ref: "feasd"
            }
        ]

        return (
            <header className="navigation-bar">
                <div className="navigation-bar-content">
                    <div className={"logo-section"}>
                        <span>leonardo candio</span>
                    </div>
                    <div className={"navigation-link-section"}>
                        {navLinks.map((link: NavLink) => (
                            <NavBtn {...link}/>
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
