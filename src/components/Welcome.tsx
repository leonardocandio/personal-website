import React, {Component, RefObject} from 'react';

interface IProps {
    compRef: RefObject<any>,
}

class Welcome extends Component<IProps> {
    render() {
        return (
            <div style={{"fontSize": 100}} ref={this.props.compRef}>
                This is the welcome to this page <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                <br/> <br/> <br/>end welcome
            </div>
        );
    }
}

export default Welcome;