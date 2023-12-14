import React, {createRef, RefObject, useState} from 'react';

import './styles/App.css';
import {ThemeContext, defaultState} from "./theme-context";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";


export interface INavLink {
    name: string,
    compRef: RefObject<any>,
}

function App() {
    const [theme, setTheme] = useState(defaultState.theme);
    const [links] = useState<INavLink[]>(
        [{name: "work", compRef: createRef()},
            {name: "open source", compRef: createRef()},
            {name: "about me", compRef: createRef()},
            {name: "contact me", compRef: createRef()},
        ]
    )
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`theme-${theme}`}>
                <div className='App'>
                    <NavBar navLinks={links}/>
                    <MainPage navLinks={links}/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
