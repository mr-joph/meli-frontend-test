import styles from "./styles.module.scss";

import LogoImage from "url-loader!./assets/Logo_ML.png";

const Logo = () => (
  <div>
    <img src={LogoImage} />
  </div>
);

export default Logo;
