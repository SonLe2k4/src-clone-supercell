import classNames from "classnames";
import React from "react";
import { IDataSlider, IDataSliderFullScreenStory } from "../../Slider";

type Props = {
    data: IDataSlider[][] | IDataSliderFullScreenStory[];
    cx: (...args: classNames.ArgumentArray) => string;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
};

const Control = (props: Props) => {
    const { data, cx, active, setActive } = props;
    return (
        <>
            {data.map((item, i) => {
                if (Array.isArray(item))
                    return (
                        <li
                            onClick={() => setActive(i)}
                            className={cx(i === active ? "active" : "")}
                            key={item[0].id}
                        ></li>
                    );
                return (
                    <li
                        onClick={() => setActive(i)}
                        className={cx(i === active ? "active" : "")}
                        key={item.id}
                    ></li>
                );
            })}
        </>
    );
};

export default Control;
