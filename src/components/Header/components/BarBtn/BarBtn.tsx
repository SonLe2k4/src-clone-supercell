import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {
  isOpen?: boolean;
  setIsOpen?: () => void;
};

const BarBtn = (props: Props) => {
  const handleSetIsOpen = () => {
    if (props.setIsOpen) props.setIsOpen();
  };
  return (
    <div
      className={cx("BarBtn", props.isOpen && "open")}
      onClick={handleSetIsOpen}
    >
      <ul>
        <li className={cx("icon")}>
          <IoMdClose />
        </li>
        <li className={cx("icon")}>
          <FaBars />
        </li>
      </ul>
    </div>
  );
};

export default BarBtn;
