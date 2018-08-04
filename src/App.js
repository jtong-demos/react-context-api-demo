import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Simple from './examples/simple'
import CrossFile from "./examples/cross-files"
import DefaultValue from "./examples/default-value"
class App extends Component {
  render() {
    
    return (
      <div>
        Simple: <Simple />
        CrossFile: <CrossFile /> 
        Default Value: <DefaultValue />
      </div>
    );
  }
}



export default App;


//扩展问题： 只能用于theme吗？还能用于什么场景？