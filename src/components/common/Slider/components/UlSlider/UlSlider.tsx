import { useMemo } from "react";
import classNames from "classnames";
import ICssProperty from "../../../../../style/style";
import {
    IDataSlider,
    IDataSliderFullScreenStory,
    optionRenderCart,
} from "../../Slider";
import Card from "../Card";

import FullScreen, { Type } from "../FullScreen/FullScreen";
import FullScreenThree from "../FullScreenThree";
import FullScreenTwo from "../FullScreenTwo";

type Props = {
    data: IDataSlider[][] | IDataSliderFullScreenStory[];
    itemIsVideoYtb?: boolean;
    type: "fullScreen" | undefined;
    typeFullScreen: Type | "3" | undefined;
    active: number;
    classNameUlTag?: string;

    cx: (...args: classNames.ArgumentArray) => string;
};

interface ILISliderProps {
    data: IDataSlider[][] | IDataSliderFullScreenStory[];
    typeFullScreen: Type | "3" | undefined;
    itemIsVideoYtb: boolean | undefined;

    type: "fullScreen" | undefined;
    cx: (...args: classNames.ArgumentArray) => string;
}

interface ICardSliderProps {
    slider: IDataSlider[] | IDataSliderFullScreenStory;
    option?: optionRenderCart;
    typeFullScreen?: Type | "3";
    itemIsVideoYtb: boolean | undefined;
    cx: (...args: classNames.ArgumentArray) => string;
}

const LiSlider = (props: ILISliderProps) => {
    const { typeFullScreen, data, itemIsVideoYtb, type, cx } = props;
    return (
        <>
            {data.map((slider) => {
                if (Array.isArray(slider)) {
                    return (
                        <li
                            key={slider[0].id}
                            className={cx(
                                "item",
                                "shrink_web",
                                "shrink_mobile",
                                "no-m",
                                typeFullScreen === "2" && "full-screen-2",
                                itemIsVideoYtb && "itemIsVideoYtb"
                            )}
                        >
                            <CardSlider
                                cx={cx}
                                itemIsVideoYtb={itemIsVideoYtb}
                                slider={slider}
                                option={type}
                                typeFullScreen={typeFullScreen}
                            />
                        </li>
                    );
                }

                return (
                    <li
                        key={slider.id}
                        className={cx(
                            "item",
                            "shrink_web",
                            "shrink_mobile",
                            "no-m",
                            "full-screen-3",
                            itemIsVideoYtb && "itemIsVideoYtb"
                        )}
                    >
                        <CardSlider
                            cx={cx}
                            itemIsVideoYtb={itemIsVideoYtb}
                            slider={slider}
                            option={type}
                            typeFullScreen={"3"}
                        />
                    </li>
                );
            })}
        </>
    );
};

const CardSlider = (props: ICardSliderProps) => {
    const { slider, option, typeFullScreen, cx, itemIsVideoYtb } = props;

    if (Array.isArray(slider)) {
        if (option === "fullScreen") {
            switch (typeFullScreen) {
                case "2": {
                    return (
                        <>
                            {slider.map((data) => (
                                <FullScreenTwo
                                    data={{
                                        link: data.link || "",
                                        backgroundRight:
                                            data.backgroundRight || "",
                                        des: data.des || "",
                                        thumbSrc: data.thumbSrc || "",
                                        title: data.title || "",
                                    }}
                                    key={data.id}
                                />
                            ))}
                        </>
                    );
                }
                default:
                    return (
                        <div className={cx("wrapper-cart")}>
                            <FullScreen data={slider} type={typeFullScreen} />
                        </div>
                    );
            }
        }

        return (
            <>
                {slider.map((data) => (
                    <Card
                        key={data.id}
                        des={data.des}
                        link={data.link}
                        srcThumb={data.thumbSrc}
                        title={data.title}
                        isVideoCard={itemIsVideoYtb}
                    />
                ))}
            </>
        );
    }

    return <FullScreenThree data={slider} />;
};

const UlSlider = (props: Props) => {
    const {
        itemIsVideoYtb,
        cx,
        data,
        type,
        typeFullScreen,
        active,
        classNameUlTag,
    } = props;

    const stylingTranslateXUl = useMemo(() => {
        const spacing: number = (100 / data.length) * -1 * active;

        return `translateX(${spacing}%)`;
    }, [active, data]);

    return (
        <ul
            style={
                {
                    "--item-count": data.length,
                    transform: stylingTranslateXUl,
                } as ICssProperty
            }
            className={cx(classNameUlTag)}
        >
            <LiSlider
                cx={cx}
                data={data}
                itemIsVideoYtb={itemIsVideoYtb}
                type={type}
                typeFullScreen={typeFullScreen}
            />
        </ul>
    );
};

export default UlSlider;
