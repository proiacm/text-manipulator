import React, {Component} from 'react'
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {

  state = {
    text: '',
    textLength: ''
  }

  lengthHandler = (event) => {
    let textLength = {...this.state.textLength}
    let text = {...this.state.text}
    textLength = event.target.value.length
    text = event.target.value
    this.setState({text: text, textLength: textLength})
  }

  deleteHandler = (index) => {
    let textArr = [...this.state.text.split('')]
    textArr.splice(index, 1);
    let newText = textArr.join('')
    
    this.setState({text: newText})
  }

  render() {

    let textArr =  this.state.text.split('')
    let charBlock = textArr.map((char, i) => {
      return <Char key={i} char={char} click={() => this.deleteHandler(i)}/>
    });

    return (
      <div className="App">
        <input type='text' onChange={(event) => this.lengthHandler(event)} value={this.state.text}/>
        <p>{this.state.textLength}</p>
        <Validation length={this.state.textLength} />
       {charBlock}
      </div>
    );
  }
}

export default App;
