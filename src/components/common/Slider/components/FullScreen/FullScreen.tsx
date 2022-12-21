import { useCallback, useRef } from "react";
import classNames from "classnames/bind";
import { IDataSlider } from "../../Slider";

import style from "./style.module.scss";
import useLazyLoadStyle from "../../../../lazyLoad/ForBackgroundImg/ForBackgroundImg";

export type Type = "1" | "2" | "3";

type Props = {
    data: IDataSlider[];
    type?: Type;
};

const cx = classNames.bind(style);

interface IPropsItem {
    e: IDataSlider;
}

const Item = (props: IPropsItem) => {
    const fullScreenRef = useRef<HTMLDivElement>(null);
    const { e } = props;
    useLazyLoadStyle(
        fullScreenRef,
        `background: #111
    url(${e.thumbSrc})
    no-repeat center center / cover`
    );
    return (
        <div
            className={cx("full-screen")}
            // style={{
            //     ,
            // }}
            ref={fullScreenRef}
        >
            <a href={e.link} className={cx("play-btn")}>
                {""}
            </a>
            <div className={cx("content", "shrink_web", "shrink_mobile")}>
                <h3 className={cx("h3")}>{e.title}</h3>
                <p>{e.des}</p>
            </div>
        </div>
    );
};

const FullScreen = (props: Props) => {
    const { data, type = "1" } = props;

    const renderItem = useCallback(() => {
        if (type === "1") return data.map((e) => <Item key={e.id} e={e} />);
        if (type === "2")
            return (
                <div className={cx("full-screen", "type-2")}>
                    <div className={cx("left")}>
                        <a href={"/"} className={cx("play-btn")}>
                            {""}
                        </a>
                    </div>

                    <div className={cx("right")}>
                        <img
                            src="https://supercell.com/_next/static/media/clash_pattern.3df52cd6.png"
                            alt=""
                        />
                        <div className={cx("content")}>
                            <h3>Clash of Clans: Bigger, Better Battle Pass</h3>
                            <p>
                                Game Lead Eino Joas runs through the design
                                thinking of the two-year journey the team took
                                to create the Battle Pass and finesse the game
                                fundamentals.
                            </p>
                        </div>
                    </div>
                </div>
            );
    }, [data, type]);
    return <>{renderItem()}</>;
};

export default FullScreen;
