import React, {Component} from 'react'
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    text: '',
    textLength: ''
  }

  lengthHandler = (event) => {
    // console.log(event.target.value.length)
    let text = {...this.state.textLength}
    text = event.target.value.length
    this.setState({textLength: text})
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={(event) => this.lengthHandler(event)}/>
        <p>{this.state.textLength}</p>
        <Validation length={this.state.textLength}/>
      </div>
    );
  }
}

export default App;
