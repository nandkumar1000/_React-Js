import style from "./item.module.css";
// function item(props) {
//   const item = ({ fooditem }) => {
//     const handlebutton = (event) => {
//       console.log(event);
//       console.log(`${fooditem}being bought`);
//     };
//   }
const item =({fooditem,bought,handlebutton})>{
  return <>
  <li key={props.fooditem} className={`${style.nitems} list-group-item ${bought && 'active'}`}>
    {props.fooditem}
    <button className={`{styles.button} btn btn-info`}
      onClick={(event) => handlebutton(event)}
    >Buy</button>
  </li>
</>;
}
 

export default item;