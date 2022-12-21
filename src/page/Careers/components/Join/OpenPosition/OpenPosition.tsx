import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import UL from "./components/UL";
import { category, location } from "./data/open";
import style from "./style.module.scss";

type Props = {};

const cx = classNames.bind(style);

const OpenPosition = (props: Props) => {
    return (
        <div className={cx("wrapper")}>
            <h5 className={cx("heading")}>Open Positions</h5>
            <div className={cx("container")}>
                <div className={cx("wrapper-list")}>
                    <UL 
                        title="CATEGORY"
                        data={category}
                    />
                    <UL 
                        title="LOCATION"
                        data={location}
                    />
                    
                </div>
                <Link to="/" className={cx('show-all-btn')}>Show All Positions</Link>
            </div>
        </div>
    );
};

export default OpenPosition;
