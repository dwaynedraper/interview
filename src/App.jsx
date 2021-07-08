import React from "react";
import Button from '@material-ui/core/Button';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <h1>Hello {name}</h1>
        <Button variant="contained">Material UI connected and working</Button>
      </React.Fragment>
    );
  }
}

export default App;