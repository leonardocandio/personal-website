import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="name">
                        <a href="#">Leonardo</a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;