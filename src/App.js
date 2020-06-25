import React, { Component } from 'react';
import './App.scss';

import AdminMode from "./AdminMode";

class App extends Component {
  state = {}
  
  render() {

    return (
      <div className="App container">
        <AdminMode/>
      </div>
     );
  }
}

export default App;
