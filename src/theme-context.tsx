import {createContext} from "react";

interface IThemeContext {
    theme: string,
    setTheme: (theme: string) => void,
}

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
export const defaultState = {
    theme: isBrowserDefaultDark() ? 'dark' : 'light',
    setTheme: (theme: string) => {
    },
}
export const ThemeContext = createContext<IThemeContext>(defaultState);