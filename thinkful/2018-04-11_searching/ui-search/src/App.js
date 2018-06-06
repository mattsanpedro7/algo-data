import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LinearSearch from './components/linearSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      searchTermB: null,
      array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85,   63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      value: null,
      iterations: null,
      valueB: null,
      interationsB: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeB = this.handleChange.bind(this);
    
    // this.handleChangeBinary = this.handleChangeBinary.bind(this);
    
    // this.handleChangeArr = this.handleChangeArr.bind(this);    
    this.handleSubmitLinear = this.handleSubmitLinear.bind(this);
    this.handleSubmitBinary = this.handleSubmitBinary.bind(this);
    this.binarySearchRecur = this.binarySearchRecur.bind(this);
  }

  handleChange(event) {
    // const num = event.target.value;
    // console.log(num);
    // console.log(event);
    // const num = event.target.value.parseInt();
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleChangeB(event) {
    // const num = event.target.value;
    // console.log(num);
    // console.log(event);
    // const num = event.target.value.parseInt();
    this.setState({
      searchTermB: event.target.value,
    });
  }

  // handleChangeBinary(event) {
  //   // const num = event.target.value;
  //   // console.log(num);
  //   // console.log(event);
  //   // const num = event.target.value.parseInt();
  //   this.setState({
  //     searchTerm: event.target.value,
  //   });
  // }

  // handleChangeArr(event) {
  //   // const num = event.target.value;
  //   // console.log(num);
  //   // console.log(event);
  //   this.setState({
  //     array: event.target.value,
  //   });
  // }
  
  linearSearch(value, array) {
    // console.log('type:', typeof value.parseInt());
    // console.log(num);
    // console.log(arr);
    // const num = value.parseInt();
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        this.setState({
          iterations: i,
        });
        return i;
      }
    }
    return -1;
  }

  binarySearchRecur(array, value, start, end) {
    // console.log(value);
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    
    // const start = 0;
    // const end = array.length;
    value = parseInt(value, 10);
    // console.log(array, value);
    // console.log(start);

    if (start > end) {
      return -1;
    }
    
    const index = Math.floor((start + end) / 2);
    console.log('index:', index);
    const item = array[index];
  
    let notificationValue;
    // console.log(start, end);
    console.log('item:', item, 'value:', value);
    if (item === value) {
      // console.log('hello');
      // notificationValue = index.toString();
      return index.toString();
      // break binarySearchRecur;
    } 
    else if (item < value) {
      return this.binarySearchRecur(array, value, index + 1, end);
    } 
    else if (item > value) {
      return this.binarySearchRecur(array, value, start, index - 1);
    }
    // console.log(notificationValue);
    // return notificationValue;
  };

  binarySearch(value, array) {
    // console.log(array);
    const arr = array.sort(function(a, b){return a - b});
    // console.log(value, arr);
    // console.log(arr);
    return this.binarySearchRecur(arr, value);

  }

  handleSubmitLinear(event) {
    event.preventDefault();
    // console.log(this.state.searchTerm);
    const num = this.state.searchTerm;
    // const array = this.state.array;
    const val = this.linearSearch(num, this.state.array);
    console.log(val);
  }

  handleSubmitBinary(event) {
    event.preventDefault();
    // console.log(this.state.searchTerm);
    const num = this.state.searchTerm;
    // console.log(num);
    // const array = this.state.array;
    const val = this.binarySearch(num, this.state.array);
    // console.log(val);
    this.setState({
      valueB: val
    })
  }

  render() {
    return (
      <div className="App">
        {/* <LinearSearch /> */}
        Value: {this.state.searchTerm}
        <br />
        <br />
        <form onSubmit={this.handleSubmitLinear}>
          <label>
            Linear Search:
            <input 
              type='text' name='search term'
              value={this.state.value} 
              onChange={this.handleChange}
            />
            {/* <br/>Array */}
            {/* <input 
              type='text' name='array'
              value={this.state.value} 
              onChange={this.handleChangeArr}
            /> */}
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        <br /> Linear Search Index: {this.state.iterations}
        <br />
        <br />
        <form onSubmit={this.handleSubmitBinary} key='binary'>
          <label>
            Binary Search:
            <input 
              type='text' name='search term binary'
              value={this.state.value} 
              onChange={this.handleChangeB}
            />
          </label>
          <input type="submit" value="Submit Binary" />
        </form>
        <br /> Binary Search Index: {this.state.valueB}
      </div> 
    );
  }
}

export default App;
