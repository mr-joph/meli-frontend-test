import Column from "./column";
import Flex from "./flex.module.scss";
import styles from "./layout.module.scss";
import Row from "./row";

/** Basic Layout for the max width window and center content */
const Layout = (props) => (
  <div 
   className={`${styles.layout} ${props.className ? props.className : ''}`}
  >
    {
      (props.dir === "row")
      ? <Row {...props} />
      : <Column {...props}/>
    }    
  </div>
);

export default Layout;
export {
  Column,
  Flex,
  Row,
};
