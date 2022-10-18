import { GoSearch } from "react-icons/go";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {
  className?: string;
};

const SearchBtn = (props: Props) => {
  return (
    <div className={cx("SearchBtn", props.className)}>
      <div className={cx("icon")}>
        <GoSearch />
      </div>
    </div>
  );
};

export default SearchBtn;
