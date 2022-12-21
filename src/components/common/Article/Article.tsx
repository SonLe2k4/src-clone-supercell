import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import useLazyLoadImage from "../../lazyLoad/ForImage/ForImage";
import Button from "../Button";
import style from "./style.module.scss";

const cx = classNames.bind(style);
type Props = {
    backgroundImage?: string;
    backgroundImageMobile?: string;
    thumb?: string;
    isReverse?: boolean;
    classNameWp?: string;
    brColor?: string;
    info?: {
        title?: string;
        des?: string | string[];
        JSXElementDes?: JSX.Element;
        textBtn?: string;
        iconRightBtn?: JSX.Element;
        iconLeftBtn?: JSX.Element;
        linkBtn?: string;
        colorTitle?: string;
        colorDes?: string;
    };
    elementInfo?: JSX.Element;
    elementThumb?: JSX.Element;
    reverseWhenMobile?: boolean;
    classNameInfo?: string;
    classNameBtn?: string;
    classNameContent?: string;
    classNameThumb?: string;
    classNameWrapper?: string;
};

const Article = (props: Props) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const {
        backgroundImage,
        thumb,
        backgroundImageMobile,
        info,
        classNameWp,
        classNameContent,
        brColor,
        elementInfo,
        elementThumb,
        reverseWhenMobile,
        classNameInfo,
        classNameThumb,
        classNameBtn,
        classNameWrapper,
    } = props;
    const [br, setBr] = useState<string>();

    useEffect(() => {
        function myFunction(x: any) {
            if (x.matches) {
                setBr(backgroundImageMobile);
            } else {
                setBr(backgroundImage);
            }
        }
        var x = window.matchMedia("(max-width: 767px)");

        myFunction(x);

        x.addListener(myFunction);

        return () => x.removeListener(myFunction);
    }, [backgroundImage, backgroundImageMobile]);

    const renderDes = () => {
        if (typeof info?.des === "string")
            return (
                <p
                    style={{
                        color: info ? info.colorDes : "#000",
                    }}
                >
                    {info?.des.trim()}
                </p>
            );
        return info?.des?.map((des) => (
            <p
                style={{
                    color: info ? info.colorDes : "#000",
                }}
                key={des}
            >
                {des.trim()}
            </p>
        ));
    };

    useLazyLoadImage(imgRef, thumb || "");

    return (
        <div className={cx("wrapper-article", classNameWrapper)}>
            <article
                style={{ background: `${brColor} url(${br}) no-repeat` }}
                className={cx("article", classNameWp)}
            >
                <div
                    className={cx(
                        "content",
                        classNameContent,
                        props.isReverse && "reverse",
                        reverseWhenMobile && "reverse-mobile"
                    )}
                >
                    <div
                        className={cx(
                            "item",
                            classNameInfo,
                            "info",
                            !thumb && "no-thumb"
                        )}
                    >
                        {elementInfo ? (
                            elementInfo
                        ) : (
                            <>
                                {info?.title && (
                                    <h3
                                        style={{
                                            color: info
                                                ? info.colorTitle
                                                : "#000",
                                        }}
                                    >
                                        {info?.title.trim()}
                                    </h3>
                                )}
                                {info?.JSXElementDes || renderDes()}
                                {info?.textBtn && (
                                    <Button
                                        type={["simple"]}
                                        className={cx("button", classNameBtn)}
                                        text={info?.textBtn || ""}
                                        to={info?.linkBtn}
                                        iconLeft={info?.iconLeftBtn}
                                        iconRight={info?.iconRightBtn}
                                    />
                                )}
                            </>
                        )}
                    </div>
                    <div className={cx("item", "thumb", classNameThumb)}>
                        {(elementThumb && elementThumb) || (
                            <img src={thumb} ref={imgRef} alt="" />
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article;
