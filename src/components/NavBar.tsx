import React, {Component} from 'react';
import ToggleThemeBtn from "./ToggleThemeBtn";
import NavBtn from "./NavBtn";
import {INavLink} from "../App";
import "../styles/NavBar.css"

interface IProps {
    navLinks: INavLink[]
}

interface IState {
    show: boolean,
    scrollPos: number
}

class NavBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {

        const {scrollPos} = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: (scrollPos < 100 && scrollPos > -15)? true: (document.body.getBoundingClientRect().top > scrollPos)
        });
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        let id = 0;
        return (
            <header className={"navigation-bar " +(this.state.show? "active" : "hidden")}>
                <div className="navigation-bar-content">
                    <div className={"logo-section"} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                        <span>leonardo candio</span>
                    </div>
                        {this.props.navLinks.map((link) => (
                            <NavBtn key={id++} name={link.name} compRef={link.compRef}/>
                        ))}
                    <div className="toggle-theme-section">
                        <ToggleThemeBtn/>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;
