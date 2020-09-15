import styles from "./row.module.scss";
import Flex from "./flex";

const Row = (props) => (
  // <div className={styles.row}>{ children }</div>
  <Flex {...props} dir="row" />
);

export default Row;
