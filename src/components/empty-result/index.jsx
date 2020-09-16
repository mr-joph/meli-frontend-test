import Layout, { Row } from "../layout";
import styles from "./empty-result.module.scss";

const EmptyResult = ({children}) => (
  <Layout>
    <Row className={styles.empty} justify="center">{children}</Row>
  </Layout>
);

export default EmptyResult;
