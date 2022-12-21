import classNames from "classnames/bind";
import { IDataSliderFullScreenStory } from "../../Slider";

import style from "./style.module.scss";

type Props = {
    data: IDataSliderFullScreenStory;
};

const cx = classNames.bind(style);
const FullScreenThree = (props: Props) => {
    const { data } = props;
    const { top, bottom, id } = data;
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container", "shrink_web", "shrink_mobile")}>
                <div className={cx("top")}>
                    <div className={cx("left-info")}>
                        <h4 className={cx("name")}>{top.name}</h4>
                        <span>{top.part}</span>
                        <h2 className={cx("heading")}>{top.heading}</h2>
                    </div>
                    <div className={cx("right-thumb")}>
                        <img src={top.img} alt="" />
                    </div>
                </div>
                <div className={cx("bottom")}>
                    <div className={cx("web")}>
                        <div className={cx("left")}>{bottom.left}</div>
                        <div className={cx("right")}>{bottom.right}</div>
                    </div>
                    <div className={cx("mobile")}>
                        {bottom.dataForMobile}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenThree;
