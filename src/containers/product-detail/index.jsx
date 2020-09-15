import Layout, { Row, Column } from "~/components/layout";
import Button from "~/components/button";
import styles from "./product-detail.module.scss";

const ListResult = (props) => {
  return (
    <Layout className={styles.productDetail}>
      <Column className={styles.productDetail__breadcrumb}>
        Electronica, Audio y Video > iPod > Reproductores > iPod Touch > 32GB
      </Column>

      <Row className={styles.productDetail__content}>
        <Column className={styles.productDetail__content__main}>
          <Column className={styles.productDetail__content__main__image}>
            image
          </Column>
          <Column className={styles.productDetail__content__main__desc}>
            <h3 className={styles.productDetail__content__main__desc__title}>
              Descripcion del producto
            </h3>
            <p className={styles.productDetail__content__main__desc__paragraph}>
              asdf asdfasdf asdf asdfasdfasdf a asdfasdfasdfasdfasd
            </p>
          </Column>
        </Column>
        
        <Column className={styles.productDetail__content__details}>
          <div className={styles.productDetail__content__details__amount}>
            Nuevo - 234 vendidos
          </div>
          <div className={styles.productDetail__content__details__name}>
            Deco Reverse Sombrero Oxford
          </div>
          <div className={styles.productDetail__content__details__price}>
            $ 1.980<span>00</span>
          </div>
          <Button>
            Comprar
          </Button>
        </Column>
      </Row >

    </Layout>
  );
}

export default ListResult;
