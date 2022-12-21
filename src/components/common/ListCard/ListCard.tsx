import { useCallback, useRef } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Button from "../Button";
import { Link } from "react-router-dom";
import useLazyLoadImage from "../../lazyLoad/ForImage/ForImage";

const cx = classNames.bind(style);
export interface ICard {
    thumbSrc: string;
    linkThumb: string;
    category: string;
    link: string;
    text: string;
    id: string;
}
type Props = {
    data: ICard[];
    btnBottom?: {
        link: string;
        text: string;
    };
};

interface IPropsItem {
    data: ICard;
}

const LiCard = (props: IPropsItem) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const { data } = props;
    useLazyLoadImage(imgRef, data.thumbSrc);
    return (
        <div className={cx("field-item")}>
            <Link to={data.linkThumb}>
                <img ref={imgRef} alt="" />
            </Link>
            <div className={cx("info")}>
                <div className={cx("category", "fs")}>{data.category}</div>
                <Link to={data.link} className={cx("h3")}>
                    {data.text}
                </Link>
            </div>
        </div>
    );
};

const ListCard = (props: Props) => {
    const { btnBottom } = props;
    const renderListCard = useCallback(() => {
        return props.data.map((listCard) => (
            <LiCard data={listCard} key={listCard.id} />
        ));
    }, [props.data]);

    return (
        <div
            className={cx("wrapper-field-items", "shrink_mobile", "shrink_web")}
        >
            <div className={cx("field-items")}>{renderListCard()}</div>
            {btnBottom && (
                <Button
                    type={["primary"]}
                    className={cx("btn-bottom")}
                    text={btnBottom.text}
                    to={btnBottom.link}
                />
            )}
        </div>
    );
};

export default ListCard;
