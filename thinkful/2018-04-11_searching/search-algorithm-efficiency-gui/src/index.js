import React from 'react';
import { render } from 'react-dom';

import Form from './components/Form';

import { testLinearEfficiency, testBinaryEfficiency } from './utils';

import DATASET from './data'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numTries: null
    };

    this.searchMethods = {
      linear: testLinearEfficiency,
      binary: testBinaryEfficiency
    };
  }

  performSearch(method, num) {
    const searchMethod = this.searchMethods[method];
    let numTries = searchMethod(this.props.dataset, num);

    this.setState({ numTries });
  }

  render() {
    return (
      <div className="container">
        <Form
          availableMethods={Object.keys(this.searchMethods)}
          performSearch={(method, num) => this.performSearch(method, num)}
          numTries={this.state.numTries}
        />
      </div>
    );
  }
}

render(
  <App dataset={DATASET.sort((a, b) => a - b)} />,
  document.getElementById('root')
);
