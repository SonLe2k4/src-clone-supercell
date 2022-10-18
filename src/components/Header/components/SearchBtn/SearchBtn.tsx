import { GoSearch } from "react-icons/go";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);
type Props = {
    className?: string;
    text?: string;
    isMobile?: boolean;
};

const SearchBtn = (props: Props) => {
    return (
        <div className={cx("SearchBtn", props.className)}>
            <div className={cx("icon", props.text && "hasText")}>
                <GoSearch />
                {props.text}
            </div>
        </div>
    );
};

export default SearchBtn;
