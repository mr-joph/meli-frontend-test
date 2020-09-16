import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./search.module.scss";

import icon from "url-loader!./assets/ic_Search.png";
import icon2x from "url-loader!./assets/ic_Search@2x.png";

const Search = ({onSubmit, value}) => {
  const [query, setQuery] = useState(value);
  const onSearch = useCallback(() => {
    if (onSubmit) {
      onSubmit(query);
    }
  })
  const onChange = useCallback((event) => {
    const input = event.target.value;
    console.log("test: ", input);
    setQuery(input);
  });
  const onKeyPress = useCallback((event) => {
    if(event.key === "Enter") {
      onSearch();
    }
  });

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Nunca dejes de buscar"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className={styles.search__btn} onClick={onSearch}>
        <img src={icon} />
      </div>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

Search.defaultProps = {
  value: ""
};

export default Search;
