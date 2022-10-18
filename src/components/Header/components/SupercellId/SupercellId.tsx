import classNames from "classnames/bind";
import style from "./style.module.scss";
type Props = {
  className?: string;
};
const cx = classNames.bind(style);
const SupercellId = (props: Props) => {
  return (
    <ul className={cx("list-SupercellId", props.className)}>
      <li>
        <a href="#"></a>
      </li>
      <li>
        <a href="#"></a>
      </li>
      <li>
        <a href="#"></a>
      </li>
    </ul>
  );
};

export default SupercellId;
