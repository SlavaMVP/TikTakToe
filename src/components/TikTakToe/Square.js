import styles from "./Square.module.css"

function square(props) {
    return (
      <button className={styles.Square} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default square;