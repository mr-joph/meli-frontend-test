import Layout from "~/components/layout";
import Logo from "~/components/logo";
import Search from "~/components/search";
import styles from "./topbar.module.scss";

const TopBar = (props) => {
  return (
    <header className={styles.topbar}>
      <Layout dir="row">
        <div className={styles.topbar__logoWrapper}>
          <Logo />
        </div>
        <div className={styles.topbar__searchWrapper}>
          <Search />
        </div>
      </Layout>
    </header>
  );
}

export default TopBar;
