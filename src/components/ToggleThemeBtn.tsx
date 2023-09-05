import React, {Component} from 'react';
import {ThemeContext} from "../theme-context";
import "../styles/ToggleThemeBtn.css";

class ToggleThemeBtn extends Component {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;


    render() {
        const {theme, setTheme} = this.context;
        const handleThemeChange = () => {
            const isCurrentDark = theme === 'dark';
            setTheme(isCurrentDark ? 'light' : 'dark');
            localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark')
        };
        return (
            <input
                className="toggle-theme-btn"
                type="checkbox"
                onChange={handleThemeChange}
                checked={theme === 'light'}
            />
        );
    }
}

export default ToggleThemeBtn;