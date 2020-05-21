import React, { Component } from 'react';

class App extends Component {
 render() {
  return (
    //divで囲う必要があるが、不要なdivを排除するためには React.Fragment がでいける
    <React.Fragment>
      <label htmlFor="bar">bar </label>
      <input type="text" onChange={() => {console.log("Click!!")}}/>
    </React.Fragment>
  )
 }
}

export default App;
