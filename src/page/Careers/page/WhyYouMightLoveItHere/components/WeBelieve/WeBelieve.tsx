import classNames from "classnames/bind";
import React from "react";
import { v4 } from "uuid";
import style from "./style.module.scss";
type Props = {};
const cx = classNames.bind(style);
const WeBelieve = (props: Props) => {
    const data = [
        {
            id: v4(),
            thumb: require("../../../../../../access/image/careers/whyYouMight/WeBelieve/zooka_pose.99b59bb5.png"),
            title: `INDEPENDENCE`,
            description: `You decide how you can have the biggest impact, and then you do it.`,
        },
        {
            id: v4(),
            thumb: require("../../../../../../access/image/careers/whyYouMight/WeBelieve/rascals.44439d90.png"),
            title: `RESPONSIBILiTY`,
            description: `Own your project, collaborate and share. See an issue? Speak up. We’re all in this together.`,
        },
        {
            id: v4(),
            thumb: require("../../../../../../access/image/careers/whyYouMight/WeBelieve/hayday_lumberjack.d07742a3.png"),
            title: `QUALITY`,
            description: `We do a few things, extremely well. There is no quality bar, there is only better.`,
        },
        {
            id: v4(),
            thumb: require("../../../../../../access/image/careers/whyYouMight/WeBelieve/poco.5f093d59.png"),
            title: `LEARNING`,
            description: `For us, quality comes from learning, and learning comes from failing. In order to learn faster, we fail faster.`,
        },
    ];
    return (
        <div className={cx("wrapper")}>
            <div className={cx("shrink_web", "shrink_mobile")}>
                <h2>WHAT WE BELIEVE</h2>

                <div className={cx("list", "container")}>
                    {data.map((e) => (
                        <div className={cx("item")} key={e.id}>
                            <div className={cx("item-thumb")}>
                                <img src={e.thumb} alt="" />
                            </div>
                            <div className={cx("item-info")}>
                                <h4 className={cx("info-title")}>{e.title}</h4>
                                <p className={cx("info-description")}>
                                    {e.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeBelieve;
