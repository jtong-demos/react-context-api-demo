import React, { Component } from 'react';

const ThemeContext = React.createContext('light');

class Simple extends Component{
    render() {

        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider >);

    }
}


function Toolbar(props) {
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton(props) {
    return (<ThemeContext.Consumer>
        {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>

    );
}

function Button(props) {
    return (<button>{props.theme}</button>)
}

export default Simple;
