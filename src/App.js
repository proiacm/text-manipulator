import React, {Component} from 'react'
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {

  state = {
    text: ''
  }

  lengthHandler = (event) => {
    let text = {...this.state.text}
    text = event.target.value
    this.setState({text: text})
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
        <p>{this.state.text}</p>
        <Validation length={this.state.text.length} />
       {charBlock}
      </div>
    );
  }
}

export default App;
