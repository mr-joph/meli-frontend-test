import PropTypes from "prop-types";
import { formatDecimal } from "~/utils";
import { Row, Column } from "../layout";
import styles from "./product-item.module.scss";

const ProductItem = (props) => {
  const productUrl = `/items/${props.id}`;

  return (
    <Row className={styles.productItem} justify="space-between">

      <a href={productUrl}>
      <Row className={styles.productItem__detail}>
        <Column className={styles.productItem__detail__pic}>
          <img src={props.picture} />
        </Column>
        <Column className={styles.productItem__detail__info}>

          <div className={styles.productItem__detail__info__price}>
            $ {props.price ? formatDecimal(props.price.amount) : 0}
          </div>

          <div className={styles.productItem__detail__info__desc}>
            {props.title}
          </div>

        </Column>
      </Row>
      </a>
      
      <Column className={styles.productItem__place}>
        Capital Federal
      </Column>

    </Row>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.object,
  free_shipping: PropTypes.bool,
};

export default ProductItem;
