import classNames from "classnames/bind";
import ListCart from "./comonents/ListCart";
import style from "./style.module.scss";

type Props = {};

const cx = classNames.bind(style);

const Featured = (props: Props) => {
    // const render
    return (
        <div className={cx("wrapper", "over-hidden")}>
            <div className={cx("shrink_web", "shrink_mobile", "Featured")}>
                <div className={cx("heading")}>
                    <h4>Featured Positions</h4>
                </div>
                <ListCart />
            </div>
        </div>
    );
};

export default Featured;
