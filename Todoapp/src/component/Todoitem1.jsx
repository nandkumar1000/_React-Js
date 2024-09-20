import { useContext } from "react";
import { todoitemstore } from "../store/todostore";
const todoitemsfromcontext=useContext(todoitemstore);

function Todoitem1(handlebuttonclicked,todoitem ){
  let todoname='Buy milk';
  let tododate='4/10/23';
  return (
    <div class="container text-center">

  <div class="row n-row">
    <div class="col-6">
     {todoname}
    </div>
    <div class="col-4">
     {tododate}
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger n-button" onDeleteclick={handledeleteitem}>delete</button></div>
  </div>
  </div>
  );
}
export default Todoitem1;