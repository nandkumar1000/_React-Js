import AppTodo from "./component/AddTodo"
import Appname from "./component/Appname"
import Todoitem1 from "./component/Todoitem1"
import Todoitem2 from "./component/Todoitem2"
import welcomemessage from "./component/welcomemessage"
import "./App.css";
import { useState,useReducer } from "react";
const todoitemReducer=(action)=>{
  reduce [];
}

function App() {
  // const [todoitem, settodoitem] = useState([]);
const [todoitem,dispatchtodoitems]=useReducer(todoitemReducer,[]);
const addnewitem=(itemname,itemduedate)=>{
  const newaction={
    type:"newitem",
    payload:{
      itemname,
      itemduedate
    }
  };
  dispatchtodoitems(newaction);
}
  const handlenewitem = (itemname, itemduedate) => {
    console.log(`new item added: ${itemname} Date:${itemduedate}`);
    const newtodoitem=[...todoitem,{name:itemname, duedat:itemduedate}];
    settodoitem(newtodoitem);

    const handledeleteitem =(todoitemname)=>{
      console.log(`item deleted${todoitemname}`)

    }
  }
  return  <todoitemstore.provider value={[]}>
    <center class="todo-container">placeholder
    <Appname></Appname>
    <AppTodo onnewitem={handlenewitem}></AppTodo>
    {todoitem.length===0 && <welcomemessage></welcomemessage>}
    <Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2>
  </center>
  </todoitemstore.provider>

}

export default App
