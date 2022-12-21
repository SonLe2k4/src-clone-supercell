import { useCallback } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import ICssProperty from "../../../../../style/style";

const cx = classNames.bind(style);
type Props = {
    title: string;
    des: string;
    thumb: string;
    timeline: ITimelines[];
    classNameThumb?: string;
};
export interface ITimelines {
    id?: string;
    title?: string;
    year?: string;
    icon?: JSX.Element;
    background?: "";
}
const Timeline = (props: Props) => {
    const { title, des, timeline, thumb, classNameThumb } = props;

    const renderTimeLineBlock = useCallback(() => {
        return timeline.map((timeline) => (
            <div className={cx("timeline-item")} key={timeline.id}>
                <div className={cx("icon")}>{timeline.icon}</div>
                <div className={cx("title", "medium")}>{timeline.title}</div>
                <div className={cx("time")}>{timeline.year}</div>
            </div>
        ));
    }, [timeline]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("shrink_mobile", "shrink_web", "container")}>
                <div className={cx("cluster")}>
                    <h2>{title}</h2>
                    <p>{des} </p>
                </div>

                <div className={cx("chart")}>
                    <div className={cx("scroll-container")}>
                        {renderTimeLineBlock()}
                    </div>
                </div>
                <p className={cx("sw-navigate")}>Swipe to navigate ›</p>
                <div
                    className={cx("thumb", classNameThumb)}
                    style={
                        {
                            background: `url(${thumb}) no-repeat`,
                        } as ICssProperty
                    }
                ></div>
            </div>
        </div>
    );
};

export default Timeline;
