import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);

const Living = (props: Props) => {
    return (
        <div className={cx("living-wrapper")}>
            <div className={cx("shrink_web", "shrink_mobile", "container")}>
                <div className={cx("item")}>
                    <h4 className={cx("title")}>JOINING SUPERCELL</h4>
                    <p className={cx("des")}>
                        Our hiring process is designed to let you showcase your
                        skills and get an understanding of what working with us
                        would be like.
                    </p>
                    <Link to="/">
                        SEE HOW TAKING YOUR NEXT CAREER STEP BEGINS »
                    </Link>
                </div>
                <div className={cx("item")}>
                    <h4 className={cx("title")}>MOVING ABROAD ?</h4>
                    <p className={cx("des")}>
                        We'll make your relocation as smooth as possible! Start
                        by picturing yourself in Helsinki or Shanghai:
                    </p>
                    <Link to="/">
                        FIGURE OUT IF YOU’D ENJOY LIFE UP NORTH »
                    </Link>
                    <Link to="/">
                        OR PERHAPS SHANGHAI IS JUST RIGHT FOR YOU »
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Living;
