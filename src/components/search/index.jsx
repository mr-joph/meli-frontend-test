import styles from "./search.module.scss";

import icon from "url-loader!./assets/ic_Search.png";
import icon2x from "url-loader!./assets/ic_Search@2x.png";

const Search = (props) => (
  <div className={styles.search}>
    <input className={styles.input}/>
    <img src={icon} />
  </div>
);

export default Search;
