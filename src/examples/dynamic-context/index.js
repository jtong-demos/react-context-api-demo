import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.toggleTheme}>
            Change Theme
        </ThemedButton>
    );
}

class Index extends Component {
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
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar toggleTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                  
            </div>
        );
    }
}

export default Index;