import React, { Component } from 'react';

import {ThemeContext} from "./contexts"

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

export default Toolbar;