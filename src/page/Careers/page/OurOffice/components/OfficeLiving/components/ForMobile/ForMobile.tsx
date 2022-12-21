import React, { useCallback } from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import useOfficeLivingStore from "../../Provider/useOfficeLivingStore";
import { Link } from "react-router-dom";
import { TImgData } from "../../Provider/OfficeLivingProvider";

type Props = {};
const cx = classNames.bind(style);
const ForMobile = (props: Props) => {
    const { data } = useOfficeLivingStore();
    const renderSliderImg = useCallback((imgs: TImgData) => {
        const stringSrcImg: string[] = [];

        const handlePushStrToNewArr = (arr: ({} | string)[]) => {
            arr.forEach((e) => {
                if (typeof e === "string") {
                    stringSrcImg.push(e);
                    return;
                }
                handlePushStrToNewArr(Object.values(e));
            });
        };

        handlePushStrToNewArr(Object.values(imgs));

        return (
            <>
                {stringSrcImg.map((img) => {
                    const checkImgSize = (url: string) => {
                        if (!url) return;
                        const img = new Image();
                        img.src = url;
                        return img.height;
                    };
                    const h = checkImgSize(img);

                    if (h && h < 800)
                        return (
                            <li key={img}>
                                <img src={img} alt="" />
                            </li>
                        );
                })}
            </>
        );
    }, []);
    return (
        <div className={cx("wrapper")}>
            <ul>
                {Object.values(data).map((elem) => (
                    <li className={cx("")} key={elem.control.title}>
                        <div className={cx("info")}>
                            <div className={cx("title")}>
                                {elem.control.title}
                            </div>
                            <div className={cx("position")}>
                                {elem.control.position}
                            </div>
                            <p>{elem.content.text}</p>
                            {elem.content.link.map((a) => (
                                <Link key={a.text} to={a.link}>
                                    {a.text}
                                </Link>
                            ))}
                        </div>

                        <div className={cx("slider-img")}>
                            <ul>{renderSliderImg(elem.content.img)}</ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForMobile;
