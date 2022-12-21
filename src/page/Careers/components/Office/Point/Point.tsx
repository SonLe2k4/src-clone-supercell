import classNames from "classnames/bind";
import React from "react";
import ICssProperty from "../../../../../style/style";
import style from "./style.module.scss";

type Props = {
    title?: string;
    des?: string;

    position: {
        top: string;
        left: string;
    };
    positionMobile?: {
        top: string;
        left: string;
    };
};

const cx = classNames.bind(style);

const Point = (props: Props) => {
    const { position, title, des, positionMobile } = props;
    return (
        <div
            className={cx("point")}
            style={
                {
                    "--top": position.top,
                    "--left": position.left,
                    "--top-mobile": positionMobile && positionMobile.top,
                    "--left-mobile": positionMobile && positionMobile.left,
                } as ICssProperty
            }
        >
            <strong>{title}</strong>
            <p>{des}</p>
        </div>
    );
};

export default Point;
