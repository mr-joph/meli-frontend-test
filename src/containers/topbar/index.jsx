import { useRouter } from 'next/router'
import PropTypes from "prop-types";
import { useCallback } from "react";
import Layout, { Column } from "~/components/layout";
import Logo from "~/components/logo";
import Search from "~/components/search";
import styles from "./topbar.module.scss";

/** Header with the search included */
const TopBar = (props) => {
  const router = useRouter();
  const onSearch = useCallback((query) => {
    router.push("/items?search=" + query);
  });

  return (
    <header className={styles.topbar}>
      <Layout dir="row" justify="space-between">
        <Column className={styles.topbar__logoWrapper} justify="center">
          <Logo />
        </Column>
        <Column className={styles.topbar__searchWrapper} justify="center">
          <Search onSubmit={onSearch} value={props.searchValue} />
        </Column>
      </Layout>
    </header>
  );
}

TopBar.propTypes = {
  searchValue: PropTypes.string,
};

TopBar.defaultProps = {
  searchValue: "",
};

export default TopBar;
