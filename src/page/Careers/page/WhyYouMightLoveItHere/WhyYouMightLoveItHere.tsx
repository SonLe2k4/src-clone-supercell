import classNames from "classnames/bind";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Panel from "../../../../components/Panel";
import style from "./style.module.scss";
import Article from "../../../../components/common/Article";
import WeBelieve from "./components/WeBelieve";
import Slider from "../../../../components/common/Slider";
import { v4 } from "uuid";
import Story from "./components/Story";
import Interested from "../../components/Interested/Interested";

type Props = {};
const cx = classNames.bind(style);
const WhyYouMightLoveItHere = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <Panel
                    heroHeading={{
                        colorTitle: "#fff",
                        colorDes: "#fff",
                        title: "WHY YOU MIGHT LOVE IT HERE",
                        des: "Best teams. Biggest impact. Nothing in your way.",
                        noBtn: true,
                    }}
                    backgroundImage={{
                        forWeb: require("../../../../access/image/careers/whyYouMight/sliderMain/why_you_might_hero.0c002515.webp"),
                        forMobile: require("../../../../access/image/careers/whyYouMight/sliderMain/why_you_might_hero.0c002515.webp"),
                    }}
                    classNameWrapper={cx("wrapper-panel")}
                />
                <Article
                    classNameContent={cx("content-why")}
                    classNameInfo={cx("content-info-why")}
                    classNameThumb={cx("thumb-why")}
                    classNameBtn={cx("content-btn-why")}
                    info={{
                        colorDes: "#000",
                        colorTitle: "#000",
                        title: "We default to trust",
                        des: [
                            `Supercell is made up of small, independent teams trusted to work together in pursuit of our dream: to create games for as many people as possible that are played for years and remembered forever. Each team has the freedom to pursue this dream as they see fit. It’s up to them to decide what is best for Supercell, and for our players. We trust each other, even when we disagree.`,

                            `To make five games, we’ve killed over a dozen, like Smash Land, Rush Wars and Hay Day Pop. In the end, only our game teams can make the decision to launch or shut down their project.`,

                            `We encourage people to use their talents where they have the most impact. As well as helping us remain small, it means you may have the opportunity to work on a project you weren't originally hired for. Of course you'll always be consulted first and play an active part in the decision (and likely even moving your own desk).`,

                            `Your colleagues will trust you to do what makes sense and what is right for Supercell.`,
                        ],
                        JSXElementDes: (
                            <>
                                <p className={cx("p-elem-why")}>
                                    Supercell is made up of small, independent
                                    teams trusted to work together in pursuit of
                                    our dream: to create games for as many
                                    people as possible that are played for years
                                    and remembered forever. Each team has the
                                    freedom to pursue this dream as they see
                                    fit. It’s up to them to decide what is best
                                    for Supercell, and for our players. We trust
                                    each other, even when we disagree.
                                </p>
                                <p className={cx("p-elem-why")}>
                                    To make five games, we’ve killed over a
                                    dozen, like <i>Smash Land</i>,{" "}
                                    <i>Rush Wars</i> and <i>Hay Day Pop</i>. In
                                    the end, only our game teams can make the
                                    decision to launch or shut down their
                                    project.
                                </p>
                                <p className={cx("p-elem-why")}>
                                    We encourage people to use their talents
                                    where they have the most impact. As well as
                                    helping us remain small, it means you may
                                    have the opportunity to work on a project
                                    you weren't originally hired for. Of course
                                    you'll always be consulted first and play an
                                    active part in the decision (and likely even
                                    moving your own desk).
                                </p>
                                <p className={cx("p-elem-why")}>
                                    Your colleagues will trust you to do what
                                    makes sense and what is right for Supercell.
                                </p>
                            </>
                        ),
                    }}
                    thumb={require("../../../../access/image/careers/whyYouMight/DefaultToTrust/princess_red_bow.b71a660b.png")}
                />
                <WeBelieve />
                <Slider
                    type="fullScreen"
                    typeFullScreen="2"
                    classNameWrapper={cx("wp-slider-feecsd")}
                    classNameAll={cx("sdfs")}
                    classNameControl={cx("control-sdfg")}
                    data={[
                        [
                            {
                                id: v4(),
                                thumbSrc: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/video_eino.ec3285bb.jpg"),
                                backgroundRight: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/clash_pattern.acb81af0.webp"),
                                title: "Clash of Clans: Bigger, Better Battle Pass",
                                des: `Game Lead Eino Joas runs through the design thinking of the two-year journey the team took to create the Battle Pass and finesse the game fundamentals.`,
                                link: "/",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                thumbSrc: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/video_jonathan.a51763a0.jpg"),
                                backgroundRight: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/clash_pattern.acb81af0.webp"),
                                title: "Quality is Worth Killing For",
                                des: `Game Artist Jonathan Dower sheds light on why and how we develop and kill game projects. “Supercell’s always been a serial-killer.”`,
                                link: "/",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                thumbSrc: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/video_ilkka.0316e37b.jpg"),
                                backgroundRight: require("../../../../access/image/careers/whyYouMight/sliderIntroGame/clash_pattern.acb81af0.webp"),
                                title: "Supercell’s Cell Structure",
                                des: `“What if power was given to the people who actually make the games?” CEO Ilkka Paananen explains how our culture works.`,
                                link: "/",
                            },
                        ],
                    ]}
                />
                <Story />
                <Interested />
            </div>
            <Footer />
        </>
    );
};

export default WhyYouMightLoveItHere;
