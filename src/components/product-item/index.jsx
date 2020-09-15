import { Row, Column } from "../layout";
import styles from "./product-item.module.scss";

const ProductItem = (props) => {
  return (
    <Row className={styles.productItem} justify="space-between">

      <Row className={styles.productItem__detail}>
        <Column className={styles.productItem__detail__pic}>
          <img src="" />
        </Column>
        <Column className={styles.productItem__detail__info}>

          <div className={styles.productItem__detail__info__price}>
            $ 1.980
          </div>

          <div className={styles.productItem__detail__info__desc}>
            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
          </div>

        </Column>
      </Row>
      
      <Column className={styles.productItem__place}>
        Capital Federal
      </Column>

    </Row>
  );
}

export default ProductItem;
