function Todoitem2(handledeleteclick,todoitem){
  let todoname='Go to school';
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
      <div class="col-2"><button type="button" class="btn btn-danger n-button" onDeleteclick={handledeleteclick}>delete</button></div>
    </div>
  </div>
  );
}
export default Todoitem2;