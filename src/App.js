import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id:"1", name:"Vishal", age:28},
      {id:"2", name:"Shreyansh", age:29},
      {id:"3", name:"Lokesh", age:29},
      {id:"4", name:"Kapil", age:29}
    ],
    otherState: "some other value",
    showPersons:false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
}


    nameChangedHandler = (event,id) => {

      const personIndex = this.state.persons.findIndex(p =>{
        return p.id ===id;
      });
      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState(
        {
          persons : persons
        }
      )
    }
    togglePersonHandler = () =>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow});
    }


  render(){

    const style = {
      backgroundColor: 'Red',
      font: 'inherit',
      border: '1px solid blue'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div> 
        {this.state.persons.map((person,index)=>{
          return <Person name={person.name} age={person.age}
           key={person.id} click={() =>this.deletePersonHandler(index)}
           changed={(event)=>this.nameChangedHandler(event,person.id)}/>})}
        </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is a para</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}
export default App;