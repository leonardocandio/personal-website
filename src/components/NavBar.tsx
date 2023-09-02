import React, {Component} from 'react';
import {ThemeContext} from "../theme-context";


class NavBar extends Component {
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
            <header className="header">
                <div className="header-content">
                    <a href="/" className="logo-section">
                        <span>Light/Dark mode app</span>
                    </a>
                    <div className="toggle-btn-section">
                        <div className={`toggle-checkbox m-vertical-auto`}>
                            <input
                                className="toggle-btn__input"
                                type="checkbox"
                                name="checkbox"
                                onChange={handleThemeChange}
                                checked={theme === 'light'}
                            />
                            <button type="button" className={`toggle-btn__input-label`}
                                    onClick={handleThemeChange}></button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;
