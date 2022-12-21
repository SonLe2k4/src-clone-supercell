import classNames from "classnames/bind";
import DefaultSize from "../../../../../components/common/DefaultSize";
import ICssProperty from "../../../../../style/style";
import style from "./style.module.scss";
import { useRef } from "react"
import useLazyLoadImage from "../../../../../components/lazyLoad/ForImage/ForImage";

const cx = classNames.bind(style);
type Props = {
    listAppDownload: { link: string; id: string; src: any }[];
    thumb: string;
    styleThumb?: string;
    title: string;
    des: string;

    backgroundWeb?: string;
    backgroundMobile?: string;

    whiteColorInfo?: boolean;
    titleLinks?: string;
};

const ArticlePageGame = (props: Props) => {
    const {
        listAppDownload,
        thumb,
        styleThumb,
        title,
        des,
        backgroundWeb,
        backgroundMobile,

        whiteColorInfo,
        titleLinks,
    } = props;
    const imgRef = useRef<HTMLImageElement>(null);

    useLazyLoadImage(imgRef, thumb)

    const renderAppDownload = () =>
        Object.values(listAppDownload).map((item) => (
            <li key={item.id}>
                <a
                    href={item.link}
                    style={{ backgroundImage: `url(${item.src})` }}
                >
                    {""}
                </a>
            </li>
        ));
    return (
        <div
            className={cx("wrapper")}
            style={
                {
                    "--background-web": `url(${backgroundWeb})`,
                    "--background-mobile": `url(${backgroundMobile})`,
                } as ICssProperty
            }
        >
            <DefaultSize>
                <div className={cx("container")}>
                    <div className={cx("item", "left")}>
                        <img ref={imgRef} alt="" className={cx(styleThumb)} />
                    </div>
                    <div
                        className={cx(
                            "item",
                            "right",
                            whiteColorInfo && "white-color"
                        )}
                    >
                        <h2>{title}</h2>
                        <p>{des}</p>
                        {titleLinks && <h4>{titleLinks}</h4>}
                        <ul className={cx(titleLinks && "isLinks")}>
                            {renderAppDownload()}
                        </ul>
                    </div>
                </div>
            </DefaultSize>
        </div>
    );
};

export default ArticlePageGame;
