import Link from 'next/link';
import styles from "./logo.module.scss";

import LogoImage from "url-loader!./assets/Logo_ML.png";

const Logo = () => (
  <Link href="/test">
    <a><img src={LogoImage} /></a>
  </Link>
);

export default Logo;
