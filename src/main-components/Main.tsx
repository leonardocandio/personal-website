import React, {Component} from 'react';
import Welcome  from "./Welcome";
import styles from '../main-stylesheets/Main.module.css';
import About from "./About";
class Main extends Component {
    render() {
        return (
            <div className={styles['page']}>
                <Welcome/>
                <About/>
            </div>
        );
    }
}

export default Main;