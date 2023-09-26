import React, {Component, RefObject} from 'react';
import "../styles/NavBtn.css"

interface Props {
    name: string,
    compRef: RefObject<any>,
}

class NavBtn extends Component<Props> {

    render() {
        const scrollToSection = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            this.props.compRef.current.scrollIntoView({behavior: "smooth"})
        }
        return (
            <div className={"navigation-link"} onClick={scrollToSection}>
                {this.props.name}
            </div>
        );
    }
}

export default NavBtn;