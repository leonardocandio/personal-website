import React from 'react';
import {useState} from "react";

import './styles/App.css';
import {ThemeContext, defaultState} from "./theme-context";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";


function App() {
    const [theme, setTheme] = useState(defaultState.theme);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`theme-${theme}`}>
                <div className='App'>
                    <NavBar/>
                    <MainPage/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
