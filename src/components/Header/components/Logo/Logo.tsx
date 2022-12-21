import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import RouteActiveStore from "../../../../routes/RouteActiveStore";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {
  className?: string;
};

const Logo = (props: Props) => {
    const { setActiveRoute } = RouteActiveStore();
    return (
    <div className={cx("logo", props.className)}>
      <Link to={"/"} onClick={() => setActiveRoute('/')}></Link>
    </div>
  );
};

export default Logo;
