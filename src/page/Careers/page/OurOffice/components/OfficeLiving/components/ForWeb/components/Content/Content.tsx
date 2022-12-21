import React from "react";
import style from "../../style.module.scss";
import classNames from "classnames/bind";
import useOfficeLivingStore from "../../../../Provider/useOfficeLivingStore";
import { Link } from "react-router-dom";
type Props = {};
const cx = classNames.bind(style);
const Content = (props: Props) => {
    const { dataContent } = useOfficeLivingStore();
    return (
        <div className={cx("wrapper-content")}>
            <div className={cx("info")}>
                <p>{dataContent.content.text}</p>
                {dataContent.content.link.map((e) => (
                    <Link key={e.text} to={e.link}>
                        {e.text}
                    </Link>
                ))}
            </div>
            <div className={cx("img")}>
                <div className={cx("left")}>
                    <div className={cx("top")}>
                        <img src={dataContent.content.img.left.top} alt="" />
                    </div>
                    <div className={cx("bottom")}>
                        <div className={cx("left")}>
                            <img
                                src={dataContent.content.img.left.bottom.left}
                                alt=""
                            />
                        </div>
                        <div className={cx("right")}>
                            <img
                                src={dataContent.content.img.left.bottom.right}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("right")}>
                    <img src={dataContent.content.img.right} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Content;
