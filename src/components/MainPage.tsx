import React, {Component} from 'react';
import Repositories from "./Repositories";
import Welcome from "./Welcome";
import {INavLink} from "../App";

interface IProps {
    navLinks: INavLink[]
}

class MainPage extends Component<IProps> {

    render() {
        return (
            <div className={"main-content"}>
                <Welcome compRef={this.props.navLinks[2].compRef}/>
                <Repositories compRef={this.props.navLinks[1].compRef}/>
                <span>developed by leonardo candio</span>
            </div>
        );
    }
}

export default MainPage;
