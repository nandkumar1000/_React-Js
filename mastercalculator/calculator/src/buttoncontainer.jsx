
import styles from "./Display.module.css";
const buttoncontainer = (onbuttonclick) => {
  let buttonnames = ['c', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', '.']
  return (

    <div className={styles.buttoncontainer}>
      {buttonnames.map(buttonames => <button className={styles.button} onClick={onbuttonclick}>{buttonames}</button>)}

    </div>
  );
};
export default buttoncontainer;