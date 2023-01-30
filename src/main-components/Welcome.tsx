import React, {Component} from 'react';
import logo from '../logo.svg';
import styles from '../main-stylesheets/Welcome.module.css';

class Welcome extends Component {
    render() {
        return (
            <div className={styles['main']}>
                <div className={styles["left"]}>
                    <h1>
                        Hi,<br/> I'm <span className={styles["name"]}>Leonardo</span>
                        <div>Software Developer</div>
                    </h1>
                    <button>Get in touch</button>
                </div>
                <div className={styles["right"]}>
                    <img
                        src={logo}
                        alt="Profile"/>
                </div>
            </div>
        );
    }
}


export default Welcome;