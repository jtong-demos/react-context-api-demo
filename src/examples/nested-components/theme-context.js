import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

//之所以加个toggleTheme函数是因为，在实际用的时候会传这个函数。
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});