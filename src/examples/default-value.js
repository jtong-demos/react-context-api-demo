import React, { Component } from 'react';

const ThemeContext = React.createContext('light');

class DefaultValue extends Component {
    render() {

        return (
                <Toolbar  />
           );

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

export default DefaultValue;
