import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import classNames from "classnames";
import React from "react";
import { IDataSlider, IDataSliderFullScreenStory } from "../../Slider";
import { Type } from "../FullScreen/FullScreen";

type Props = {
    active: number;
    setActive: (value: React.SetStateAction<number>) => void;
    typeFullScreen: Type | "3" | undefined;
    cx: (...args: classNames.ArgumentArray) => string;
    data: IDataSlider[][] | IDataSliderFullScreenStory[];
};

const BtnControl = (props: Props) => {
    const { active, setActive, typeFullScreen, cx, data } = props;
    return (
        <>
            {active > 0 && (
                <div
                    onClick={() => {
                        setActive((prev) => prev - 1);
                    }}
                    className={cx(
                        "btn",
                        typeFullScreen === "2"
                            ? "type-2"
                            : typeFullScreen === "3"
                            ? "type-3"
                            : "",
                        "prev"
                    )}
                >
                    <MdArrowBackIosNew />
                </div>
            )}
            {active < data.length - 1 && (
                <div
                    onClick={() => {
                        setActive((prev) => prev + 1);
                    }}
                    className={cx(
                        "btn",
                        typeFullScreen === "2"
                            ? "type-2"
                            : typeFullScreen === "3"
                            ? "type-3"
                            : "",
                        "next"
                    )}
                >
                    <MdArrowForwardIos />
                </div>
            )}
        </>
    );
};

export default BtnControl;
