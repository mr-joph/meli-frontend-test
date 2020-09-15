import styles from "./flex.module.scss";

function getCSSClasses(props) {
  const keys = Object.keys(props);
  const classes = [styles.flex];

  for(let itr = 0; itr < keys.length; itr++) {
    const key = keys[itr];
    const value = props[key];
    
    if(key !== "children" && value) {
      classes.push(styles[`flex--${value}`]);
    }
  }

  return classes.join(" ");
}

const Flex = (props) => {
  const classes = getCSSClasses(props);
  const className = props.className ? props.className : '';

  return (
    <div className={`${classes} ${className}`}>
      {props.children}
    </div>
  );
};

export default Flex;
