import styles from "./button.module.scss";

const Button = (props = {className: ""}) => (
  <button
    className={`${styles.button} ${props.className}`}
    onClick={props.onClick}
    type="button"
  >
    {props.children}
  </button>
);

export default Button;
