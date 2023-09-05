import React, {Component} from 'react';
import "../styles/NavBtn.css"
type Props = {
    name: string;
}

class NavBtn extends Component<Props> {
    render() {
        return (
            <div className={"navigation-link"}>
                {this.props.name}
            </div>
        );
    }
}

export default NavBtn;