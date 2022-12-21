import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import Point from "./Point";
import style from "./style.module.scss";
type Props = {};
const cx = classNames.bind(style);
const Office = (props: Props) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container", "shrink_web", "shrink_mobile")}>
                <div className={cx("content")}>
                    <h2>OUR OFFICES</h2>
                    <p>
                        Our global teams are home to individuals from over 40
                        nationalities. We believe in transparency, open
                        communication and spending time with one another. While
                        all teams have their own unique traits, it’s the
                        underlying culture, shared values and love for games
                        that keep us together.
                    </p>
                    <Link to="/">OUR OFFICES »</Link>
                </div>
                <div className={cx("location")}>
                    <Point
                        title="San Francisco, USA"
                        position={{ top: "25.9%", left: "9.1%" }}
                        positionMobile={{ top: "auto", left: "auto" }}
                        des="Game Studio & Marketing"
                    />
                    <Point
                        title="Helsinki, Finland"
                        position={{ top: "2.8%", left: "46.1%" }}
                        positionMobile={{ top: "auto", left: "auto" }}
                        des="Game Studio & HQ"
                    />
                    <Point
                        title="Shanghai, China"
                        position={{ top: "27.6%", left: "69.5%" }}
                        positionMobile={{ top: "auto", left: "auto" }}
                        des="Game Studio & Marketing"
                    />
                    <Point
                        title="Seoul, Korea"
                        position={{ top: "13.5%", left: "76.6%" }}
                        positionMobile={{ top: "auto", left: "auto" }}
                        des="Marketing"
                    />
                </div>
            </div>
        </div>
    );
};

export default Office;
