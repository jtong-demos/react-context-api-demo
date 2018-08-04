import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.toggleTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };    
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar toggleTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                  
            </div>
        );
    }
}

export default App;