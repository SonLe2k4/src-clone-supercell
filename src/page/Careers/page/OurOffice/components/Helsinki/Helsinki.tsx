import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Interested from "../../../../components/Interested/Interested";
import HorizontalScrollingImage from "../HorizontalScrollingImage/HorizontalScrollingImage";
import style from "./style.module.scss";
import OfficeLiving from "../OfficeLiving";

type Props = {};
const cx = classNames.bind(style);
const Helsinki = (props: Props) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("intro")}>
                <div className={cx('default-size-cls', 'shrink_web', 'shrink_mobile')}>
                    <h2>Helsinki</h2>
                    <h4>Game Studio and HQ</h4>
                    <p>
                        It’s a poorly kept secret that Supercell’s first office
                        was a snug 35m2 room that had to fit 15 people, their
                        laptops and a coffee-maker. Eventually the CEO moved his
                        desk (a cardboard box at the time) out into the hallway
                        to free up some space. In 2021, after outgrowing a
                        number of locations around Helsinki, we opened our own,
                        custom-designed office on the seafront, just south of
                        the city center.
                    </p>
                </div>

                <HorizontalScrollingImage />
                <div className={cx('default-size-cls', 'shrink_web', 'shrink_mobile')}>
                    <p>
                        The Helsinki office is home to over 250 passionate
                        professionals from various backgrounds and walks of
                        life. Arounds two thirds of us are directly involved
                        with making games. In addition to five live teams of
                        roughly 10-25 people each, we have numerous new game
                        teams at prototype stage working in pairs, trios and
                        more. We mostly stick to speaking in English for work,
                        but you’ll hear chatter in languages from all over the
                        world around the office.
                    </p>
                    <p>
                        Every week starts with a company breakfast while on
                        Fridays we get together for an all-hands gathering to
                        share game updates and company news. This often gives
                        way to refreshments, play sessions and casual
                        conversations.
                    </p>
                    <Link to="/">READ MORE ABOUT LIVING IN HELSINKI</Link>
                    <Link to="/">See open positions in Helsinki</Link>
                </div>
            </div>
            <OfficeLiving />

            <Interested />
        </div>
    );
};

export default Helsinki;
