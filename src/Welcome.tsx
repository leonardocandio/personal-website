import React, {Component} from 'react';
import logo from './logo.svg';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <h1>
                        Hi,<br/> I'm <span className="name">Leonardo</span>
                        <div>Software Developer</div>
                    </h1>
                    <button>Get in touch</button>
                </div>
                <div className="right">
                    <img
                        src={logo}
                        alt="Profile"/>
                </div>
            </div>
        );
    }
}


export default Welcome;