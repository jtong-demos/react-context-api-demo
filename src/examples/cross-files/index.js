import React, { Component } from 'react';

import {ThemeContext} from "./contexts"
import Toolbar from './consumer'

class Provider extends Component{
    render() {

        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider >);

    }
}




export default Provider;
