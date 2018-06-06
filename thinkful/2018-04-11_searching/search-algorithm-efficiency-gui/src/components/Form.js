import React from 'react';

import './Form.css';

export default class Form extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { number, method } = e.target;

    const userNum = parseInt(number.value, 10);
    const searchMethod = method.value;

    this.props.performSearch(searchMethod, userNum);
  }

  render() {
    const { numTries, availableMethods } = this.props;
    let feedback = numTries > -1 ? `Found in ${numTries} tries` : 'Not found';

    const searchMethodRadios = availableMethods.map((method, idx) => {
      const uniqueKey = `method-${idx}`;
      return (
        <div className="control-group" key={uniqueKey}>
          <label htmlFor={uniqueKey}>{method}</label>
          <input
            type="radio"
            id={uniqueKey}
            name="method"
            value={method}
            required
            /**
             * Since we must select a radio for this to work,
             * we should have React check a radio for us.
             * See: https://ux.stackexchange.com/q/37037
             * In JSX, `checked` becomes `defaultChecked`.
             * See: https://reactjs.org/docs/uncontrolled-components.html#default-values
             *
             */
            defaultChecked={idx === 0}
          />
        </div>
      );
    });

    return (
      <form action="#" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="num">Enter a number</label>
        <input type="number" name="number" id="num" required />
        <fieldset>
          <legend>Pick a search method</legend>
          {searchMethodRadios}
        </fieldset>
        <button type="submit">Search</button>
        {/**
        * Output elements take on ARIA live under the hood & convey changes to 
        * assistive technologies, no extra markup needed.
        * Note that the output MUST be rendered and empty first
        * for changes to be conveyed.
        * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output 
        */}
        <output name="result" htmlFor="num method-0 method-1">
          {/* if `numTries` is not null, we want to see our feedback. */}
          {numTries !== null && feedback}
        </output>
      </form>
    );
  }
}
