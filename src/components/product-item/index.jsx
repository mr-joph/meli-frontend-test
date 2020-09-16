import PropTypes from "prop-types";
import { Row, Column } from "../layout";
import styles from "./product-item.module.scss";

const ProductItem = (props) => {
  console.log("ITEM:",props);
  return (
    <Row className={styles.productItem} justify="space-between">

      <Row className={styles.productItem__detail}>
        <Column className={styles.productItem__detail__pic}>
          <img src={props.picture} />
        </Column>
        <Column className={styles.productItem__detail__info}>

          <div className={styles.productItem__detail__info__price}>
            $ {props.price ? props.price.amount : 0}
          </div>

          <div className={styles.productItem__detail__info__desc}>
            {props.title}
          </div>

        </Column>
      </Row>
      
      <Column className={styles.productItem__place}>
        Capital Federal
      </Column>

    </Row>
  );
}

ProductItem.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.objectOf({amount: PropTypes.number}),
  free_shipping: PropTypes.bool,
};

export default ProductItem;
