import { useState } from "react";
import item from "./item";
 const fooditem=()=>{
  let [activeitems, setactiveitems]=useState([]);
  let onbuybutton=(item,event)=>{
     let newitem=[...activeitems,item];
     let setactiveitems(newitem);
    }
  }
  return (
    <ul className="list-group nlist">
      {fooditem.map(
        (item) => (
          <item>
            key={item}
            fooditem={item}
            bought={activeitems.includes(item)}
            handlebutton={(event)=>onbuybutton(item,event)}
        )
      )}
    </ul>
  );

 }
export default fooditem;