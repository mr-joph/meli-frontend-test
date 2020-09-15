import Layout from "~/components/layout";
import ProductItem from "~/components/product-item";
import styles from "./list-result.module.scss";

const ListResult = (props) => {
  return (
    <Layout className={styles.listResult}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Layout>
  );
}

export default ListResult;
