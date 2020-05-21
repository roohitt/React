//useState is a react hook to manage state in a functional component
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  //usestate returns an array with two elements: 1st element is the current state and 2nd is a function to update the state
  //below is jut=st latest js code in which the array elements are pulled out from the returned arraya nd passed to personstate and setstate 
  const [ personState , setPersonsState ] = useState({
    persons : [
      {name:"Vishal", age:28},
      {name:"Shreyansh", age:29},
      {name:"Lokesh", age:29},
      {name:"Kapil", age:29}
    ]
  });

  const [otherState, setOtherState]  = useState('otherstate component');

  const switchNameHandler = () => {
    //dont do this: this.state.persons[0].name = 'Sukha';
    //below will overwrite the persons.
    setPersonsState( {
      persons : [
        {name:"Vishal Yadav", age:28},
        {name:"Shreyansh Mmmgain", age:29},
        {name:"Lokesh Parmar", age:29},
        {name:"Kapil Minda", age:29}
      ] 
    } );//takes object as an argument and sets the state (is a method in the react lib)
  };

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is a para</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name}  age={personState.persons[0].age}>My hobbies: Racing</Person>
        <Person name={personState.persons[1].name}  age={personState.persons[1].age}>My hobbies: Cricket</Person>
        <Person name={personState.persons[2].name}  age={personState.persons[2].age}>My hobbies: Football</Person>
        <Person name={personState.persons[3].name}  age={personState.persons[3].age}>My hobbies: BasketBall</Person>
      </div>
    );
  };


export default app;





