import PropTypes from "prop-types";
import EmptyResult from "~/components/empty-result";
import Layout from "~/components/layout";
import ProductItem from "~/components/product-item";
import styles from "./list-result.module.scss";

const ListResult = (props) => {
  return (
    <Layout className={styles.listResult}>
      {
        props.items.length
          ? props.items.map(({item}, id) => <ProductItem key={id} {...item} />)
          : <EmptyResult>No Results ¯\_(ツ)_/¯</EmptyResult>
      }
    </Layout>
  );
}

ListResult.propTypes = {
  items: PropTypes.array,//.arrayOf(ProductItem.propTypes),
};

export default ListResult;
