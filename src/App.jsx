import React from "react";
import Button from '@material-ui/core/Button';
import TypeAhead from './TypeAhead.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <h1>Hello {name}</h1>
        <TypeAhead />
      </React.Fragment>
    );
  }
}

export default App;