import Layout, { Column, Row } from "~/components/layout";
import Logo from "~/components/logo";
import Search from "~/components/search";
import styles from "./topbar.module.scss";

const TopBar = (props) => {
  return (
    <header className={styles.topbar}>
      <Layout dir="row" justify="space-between">
        <Column className={styles.topbar__logoWrapper} justify="center">
          <Logo />
        </Column>
        <Column className={styles.topbar__searchWrapper} justify="center">
          <Search />
        </Column>
      </Layout>
    </header>
  );
}

export default TopBar;
