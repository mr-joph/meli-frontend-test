import PropTypes from "prop-types";
import styles from "./flex.module.scss";
/**
 * 
 * @param {Object} props - Flex properties
 * 
 * @return string with all the classes
 *         they are going to apply in Flex comp.
 */
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

Flex.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  dir: PropTypes.string,
};

export default Flex;
