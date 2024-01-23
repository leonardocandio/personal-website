import React, {Component, RefObject} from 'react';
import "../styles/Welcome.css"
import imgwebp from "../images/headshot.webp"
import imgjpeg from "../images/headshot.jpeg"
interface IProps {
    compRef: RefObject<any>,
}

class Welcome extends Component<IProps> {
    render() {
        return (
            <div ref={this.props.compRef} className={"welcome-content"}>
                <p>i'm a <b>computer science</b> undergrad currently focused on pursuing a phd in <b>artificial intelligence</b></p>
                <picture style={{display: "none"}}>
                    <source srcSet={imgwebp} />
                    <img src={imgjpeg} alt={"Leonardo Candio"}/>
                </picture>
            </div>
        );
    }
}

export default Welcome;