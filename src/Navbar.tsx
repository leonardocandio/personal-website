import React, {Component} from 'react';
import styles from './Navbar.module.css';
import logo from './logo.svg';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className={styles["logo"]}>
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;