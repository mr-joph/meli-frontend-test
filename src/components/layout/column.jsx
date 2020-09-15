import styles from "./column.module.scss";
import Flex from "./flex";

const Column = (props) => (
  <Flex {...props} dir="column" />
);

export default Column;
