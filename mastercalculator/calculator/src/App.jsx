
import styles from "./App.module.css";
import Display from "./component/Display";
import buttoncontainer from "./buttoncontainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onbuttonclick = (buttontext) => {
    if (buttontext == c) {
      setCalValue("");
    }
    else if (buttontext === '=') {
      const result = eval(calValue);
      setCalValue(result);
    }
    else {
      const newdisplay = calValue + buttontext;
      setCalValue(newdisplay);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <buttoncontainer onbuttonclick={buttontext}></buttoncontainer>
    </div>
  )
}

export default App
