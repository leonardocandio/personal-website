import React, {Component, RefObject} from 'react';
import "../styles/NavBtn.css"
import "../styles/MainPage.css"

interface Props {
    name: string,
    compRef: RefObject<any>,
}

class NavBtn extends Component<Props> {

    render() {
        const scrollToSection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            this.props.compRef.current.scrollIntoView({behavior: "smooth"})
        }
        return (
            <button className={"navigation-link"} onClick={scrollToSection}>
                {this.props.name}
            </button>
        );
    }
}

export default NavBtn;