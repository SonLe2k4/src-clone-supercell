import classNames from "classnames/bind";
import { useState, useEffect, useCallback } from "react";
import style from "./style.module.scss";
import { Type } from "./components/FullScreen/FullScreen";
import Control from "./components/Control/Control";
import BtnControl from "./components/BtnControl/BtnControl";
import UlSlider from "./components/UlSlider/UlSlider";

const cx = classNames.bind(style);

export interface IDataSlider {
    id: string;
    thumbSrc: string;
    backgroundRight?: string;
    link?: string;
    title: string;
    des?: string;
}

export interface IDataSliderFullScreenStory {
    id: string;
    top: {
        img: string;
        name: string;
        part: string;
        heading: string;
    };
    bottom: {
        left: JSX.Element;
        right: JSX.Element;
        dataForMobile: JSX.Element;
    };
}

type Props = {
    itemIsVideoYtb?: boolean;
    classNameWrapper?: string;
    classNameAll?: string;
    classNameUlTag?: string;
    classNameControl?: string;

    controlKeyboard?: 'none'

    data?: IDataSlider[][];
    dataFullScreenStory?: IDataSliderFullScreenStory[];

    type?: optionRenderCart;
    typeFullScreen?: Type | "3";
};

export type optionRenderCart = "fullScreen";
const Slider = (props: Props) => {
    const {
        itemIsVideoYtb,
        data,
        dataFullScreenStory,
        controlKeyboard,
        type,
        typeFullScreen,
        classNameWrapper,
        classNameAll,
        classNameUlTag,
        classNameControl,
    } = props;

    const [active, setActive] = useState<number>(0);

    const dataArray = useCallback(() => {
        if (dataFullScreenStory) return dataFullScreenStory;
        return data || [];
    }, [data, dataFullScreenStory]);

    useEffect(() => {
        const listenEvent = (event: KeyboardEvent) => {
            const arrowLeft = 37;
            const arrowRight = 39;

            if (event.keyCode === arrowLeft) {
                setActive((prev) => {
                    if (prev === 0) {
                        return dataArray().length - 1;
                    }
                    return prev - 1;
                });
            }

            if (event.keyCode === arrowRight) {
                setActive((prev) => {
                    if (prev === dataArray().length - 1) {
                        return 0;
                    }
                    return prev + 1;
                });
            }
        };

        
        window.addEventListener("keydown", listenEvent);

        if(controlKeyboard === 'none') window.removeEventListener("keydown", listenEvent);

        return () => {
            window.removeEventListener("keydown", listenEvent);
        };
    }, [dataArray, controlKeyboard]);

    return (
        <div
            className={cx(
                "wrapper-all",
                classNameAll,
                type === "fullScreen" && "fullScreen",
                typeFullScreen === "3" && "typeFullScreen-3"
            )}
        >
            <div
                className={cx(
                    "wrapper",
                    classNameWrapper,
                    type !== "fullScreen" && "shrink_mobile",
                    type !== "fullScreen" && "shrink_web"
                )}
            >
                <UlSlider
                    active={active}
                    cx={cx}
                    data={dataArray()}
                    type={type}
                    typeFullScreen={typeFullScreen}
                    itemIsVideoYtb={itemIsVideoYtb}
                    classNameUlTag={classNameUlTag}
                />
            </div>
            <BtnControl
                active={active}
                cx={cx}
                data={dataArray()}
                setActive={setActive}
                typeFullScreen={typeFullScreen}
            />
            <ul
                className={cx(
                    "control",
                    classNameControl,
                    typeFullScreen === "2" && "type-2",
                    typeFullScreen === "3" && "type-3",
                )}
            >
                <Control
                    active={active}
                    cx={cx}
                    data={dataArray()}
                    setActive={setActive}
                />
            </ul>
        </div>
    );
};

export default Slider;
