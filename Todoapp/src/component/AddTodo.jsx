import { useState,useRef } from "react";

function AddTodo(onnewitem) {
  const [addtodoname, settodoname] = useState();
  const [duedate, setduedate] = useState();
  const [noofupdate]=useRef(0);

  const handlenamechange = (event) => {
    settodoname(event.target.value)
    noofupdate.current+=1;
  }
  const handledatechange = (event) => {
    setduedate(event.target.value)
    console.log(`no of update:${noofupdate.current}`);
  }
  const handlebuttonclicked = () => {
    onnewitem(todoname, duedate);
    setduedate("");
    settodoname("");
  };

  return (
    <div class="container">
      <div class="row n-row">
        <div class="col-6">
          <input type="text" placeholder="enter your todo here" value={todoname} onChange={handlenamechange} />
        </div>
        <div class="col-4">
          <input type="date" value={duedate} onChange={handledatechange} />
        </div>
        <div class="col-2"><button type="button" class="btn btn-primary n-button" onClick={() => onnewitem(handlebuttonclicked)}>Add</button></div>
      </div>
    </div>
  );
}
export default AppTodo;