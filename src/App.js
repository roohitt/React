import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name:"Vishal", age:28},
      {name:"Shreyansh", age:29},
      {name:"Lokesh", age:29},
      {name:"Kapil", age:29}
    ]
  }

  switchNameHandler = (sukhayadavname) => {
    //dont do this: this.state.persons[0].name = 'Sukha';
    this.setState( {
      persons : [
        {name:sukhayadavname, age:28},
        {name:"Shreyansh Mamgain", age:29},
        {name:"Lokesh parmar", age:29},
        {name:"Kapil minda", age:29}
      ] 
    } )//takes object as an argument and sets the state (is a method in the react lib)
  }

    nameChangedHandler = (event) => {
      this.setState(
        {
          persons : [
            {name:"Vishal Yadav", age:28},
            {name: event.target.value, age:29},
            {name:"Lokesh parmar", age:29},
            {name:"Kapil minda", age:29}
          ] 
        }
      )
    }
  

  render() {

    const style = {
      backgroundColor: 'Red',
      font: 'inherit',
      border: '1px solid blue'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is a para</p>
        <button style={style} onClick={() => this.switchNameHandler("Sukha Vishal")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click = {this.switchNameHandler.bind(this,"Sukha")}>My hobbies: Racing</Person>
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} changed = {this.nameChangedHandler}>My hobbies: Cricket</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}>My hobbies: Football</Person>
        <Person name={this.state.persons[3].name}  age={this.state.persons[3].age}>My hobbies: BasketBall</Person>
      </div>
    );
  }
}

export default App;
