import classNames from "classnames/bind";
import React from "react";
import OpenPosition from "./OpenPosition";
import style from "./style.module.scss";
import TableJoin from "./TableJoin";
type Props = {};

const cx = classNames.bind(style);

const Join = (props: Props) => {
    return (
        <div className={cx("join-wrapper")}>
            <div
                className={cx("shrink_web", "shrink_mobile", "container")}
            >
                <OpenPosition />
                <TableJoin />
            </div>
        </div>
    );
};

export default Join;
