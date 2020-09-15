import styles from "./search.module.scss";

import icon from "url-loader!./assets/ic_Search.png";
import icon2x from "url-loader!./assets/ic_Search@2x.png";

const Search = (props) => (
  <div className={styles.search}>
    <input className={styles.search__input} placeholder="Nunca dejes de buscar"/>
    <div className={styles.search__btn}><img src={icon} /></div>
  </div>
);

export default Search;
