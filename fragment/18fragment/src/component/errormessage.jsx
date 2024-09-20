function errormessage() {
  let fooditem = ["rice", "wheat", "Dal", "green vegetable", "milk", "ghee"];
  return <>
    {fooditem.length === 0 && <h3>I am hungry</h3>}
  </>;
}
export default errormessage;