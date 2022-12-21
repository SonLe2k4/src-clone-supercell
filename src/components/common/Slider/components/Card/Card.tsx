import classNames from "classnames/bind";
import { useCallback, useRef } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import useLazyLoadImage from "../../../../lazyLoad/ForImage/ForImage";
import style from "./style.module.scss";
const cx = classNames.bind(style);

type Props = {
    srcThumb?: string;
    title?: string;
    des?: string;
    link?: string;

    isVideoCard?: boolean;
};

const Card = (props: Props) => {
    const { srcThumb, title, des, link, isVideoCard } = props;
    const imgRef = useRef<HTMLImageElement>(null);
    // handle lazy loading
    useLazyLoadImage(imgRef, srcThumb || '');
    // 
    const renderContent = useCallback(() => {
        if (!isVideoCard)
            return (
                <>
                    <div className={cx("thumb")}>
                        <img ref={imgRef} alt="" />
                    </div>
                    <div className={cx("info")}>
                        <h4>{title}</h4>
                        <p className={cx("des")}>{des}</p>
                        <Link to={link || "/"}>
                            {link && "read article"}
                            {link && (
                                <AiOutlineDoubleRight className={cx("icon")} />
                            )}
                        </Link>
                    </div>
                </>
            );
        return (
            <Link to={link || "/"} className={cx("isVideoCard")}>
                <div className={cx("thumb")}>
                    <img ref={imgRef} alt="" />
                </div>
                <h2>{title}</h2>
            </Link>
        );
    }, [isVideoCard, des, link, title]);
    return (
        <div className={cx("card", isVideoCard && "isVideoCard")}>
            {renderContent()}
        </div>
    );
};

export default Card;
