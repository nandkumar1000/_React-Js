//import React from 'react';
import './App.css'
import fooditem from './component/fooditem';
import errormessage from './component/errormessage';
import foodinput from './component/foodinput';
import { useState } from 'react';

function App() {

  //fragment method.
  //return <React.Fragment>
  //<h1>heathy food</h1>
  //<ul class="list-group">
  //<li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  //<li class="list-group-item">A second item</li>
  //<li class="list-group-item">A third item</li>
  //<li class="list-group-item">A fourth item</li>
  //<li class="list-group-item">And a fifth one</li>
  //</ul>
  //</React.Fragment>

  //map method:it is use to add data dynamically.
  // let fooditem = ["rice", "wheat", "Dal", "green vegetable", "milk", "ghee"];
  //condititonal rendering;
  //if -else statement;
  // let fooditem = [];
  // if (fooditem.lenght === 0) {
  //   return <h1>no food item</h1>
  // }
  //let fooditem = ["rice", "wheat", "Dal", "green vegetable", "milk", "ghee"];
  let [fooditem, setfooditem] = useState("food item entered by user");
  // let texttoshow=textStateArr[0];
  // let settextstae = textStateArr[1];
  // console.log(`current value of: ${texttoshow}`)


  const onkeydown = (event) => {
    if (event.key === 'enter') {
      let newfooditem = event.target.value;
      event.target.value = "";
      let newfooditem = [...fooditem, newfooditem];
      setfooditem(newitem);
    }
    console.log(event.target.value);
    settextstae = event.target.value;
  };
  return <>
    <h1>heathy food</h1>

    <errormessage item={fooditem}></errormessage>
    <fooditem></fooditem>
    <foodinput></foodinput>

  </>
}

export default App;
