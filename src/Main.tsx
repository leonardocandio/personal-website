import React, {Component} from 'react';
import Welcome  from "./Welcome";
import styles from './Main.module.css';
class Main extends Component {
    render() {
        return (
            <div className={styles['page']}>
                <Welcome/>
            </div>
        );
    }
}

export default Main;