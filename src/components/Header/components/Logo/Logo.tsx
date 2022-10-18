import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={cx("logo")}>
      <Link to={"/"}></Link>
    </div>
  );
};

export default Logo;
