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
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Work</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;