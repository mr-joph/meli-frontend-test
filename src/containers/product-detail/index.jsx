import PropTypes from "prop-types";
import Layout, { Row, Column } from "~/components/layout";
import Button from "~/components/button";
import { formatDecimal } from "~/utils";
import styles from "./product-detail.module.scss";

/** Wrapper for Products info */
const ProductDetail = (props) => {
  const {amount, decimal = 0} = props.price || {};
  return (
    <Layout className={styles.productDetail}>
      <Column className={styles.productDetail__breadcrumb}>
        {/* Electronica, Audio y Video > iPod > Reproductores > iPod Touch > 32GB */}
      </Column>

      <Row className={styles.productDetail__content}>
        <Column className={styles.productDetail__content__main}>
          <Column className={styles.productDetail__content__main__image}>
            <img src={props.picture} alt={props.title}/> 
          </Column>
          <Column className={styles.productDetail__content__main__desc}>
            <h3 className={styles.productDetail__content__main__desc__title}>
              Descripcion del producto
            </h3>
            <p className={styles.productDetail__content__main__desc__paragraph}>
              {props.description}
            </p>
          </Column>
        </Column>
        
        <Column className={styles.productDetail__content__details}>
          <div className={styles.productDetail__content__details__amount}>
            { props.condition ? "Nuevo" : "Usado"} - {
              props.sold_quantity} {props.sold_quantity === 1 ? "vendido" : "vendidos"
            }
          </div>
          <div className={styles.productDetail__content__details__name}>
            {props.title}
          </div>
          <div className={styles.productDetail__content__details__price}>
            $ {formatDecimal(amount)}
            <span>
            {decimal >= 10 ? decimal : ("0" + decimal)}
            </span>
          </div>
          <Button>
            Comprar
          </Button>
        </Column>
      </Row >

    </Layout>
  );
}

ProductDetail.propTypes = {
  picture: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  decimal: PropTypes.number,
  price: PropTypes.object,
};



export default ProductDetail;
