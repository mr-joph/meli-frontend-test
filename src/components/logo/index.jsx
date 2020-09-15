import Link from 'next/link';
import styles from "./logo.module.scss";

import LogoImage from "url-loader!./assets/Logo_ML.png";
import LogoImage2x from "url-loader!./assets/Logo_ML@2x.png";

const Logo = () => (
  <Link href="/test">
    <a><img className={styles.logo} src={LogoImage2x} /></a>
  </Link>
);

export default Logo;
