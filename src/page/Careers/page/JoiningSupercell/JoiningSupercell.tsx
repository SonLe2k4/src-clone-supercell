import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Panel from "../../../../components/Panel";
import Article from "../../../../components/common/Article";
import HiringProcess from "./HiringProcess";
import GameTeam from "./GameTeam";

type Props = {};
const cx = classNames.bind(style);
const JoiningSupercell = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <Panel
                    heroHeading={{
                        colorTitle: "#fff",
                        colorDes: "#fff",
                        title: "OINING SUPERCELL",
                        des: "What to expect when becoming part of our team",
                        noBtn: true,
                    }}
                    backgroundImage={{
                        forMobile: require("../../../../access/image/careers/JoiningSupercell/joining_sc_hero.378cc188.webp"),
                        forWeb: require("../../../../access/image/careers/JoiningSupercell/joining_sc_hero.378cc188.webp"),
                        classNameBrMobile: cx("backGr-Img-Slider-Panel"),
                        classNameBrWeb: cx("backGr-Img-Slider-Panel"),
                    }}
                    classNameWrapper={cx("wrapper-panel")}
                />
                <Article
                    classNameContent={cx("content-joining")}
                    classNameInfo={cx("content-info-joining")}
                    classNameThumb={cx("thumb-joining")}
                    classNameBtn={cx("content-btn-why")}
                    info={{
                        JSXElementDes: (
                            <>
                                <h2>How we hire</h2>
                                <p>
                                    We believe in fostering a culture of
                                    independence and trust. One way that we do
                                    this at Supercell is by staying small as it
                                    minimizes the amount of bureaucracy and
                                    processes while maximizing room for
                                    innovation. Our teams are nimble,
                                    experimenting with new features and failing
                                    smarter to maximize learning. We are
                                    constantly looking for proactive doers who
                                    strive in this environment to create the
                                    best games.
                                </p>
                                <p>
                                    Our focus is on ensuring potential hires are
                                    a great fit. We also want to give you a
                                    clear understanding of what it would be like
                                    to work here. You’ll get to meet many people
                                    during the process and get interviewed
                                    across several different teams.
                                </p>
                                <p>
                                    We truly appreciate you taking the step of,
                                    and time to, apply to work at Supercell. We
                                    hope this is the right opportunity for you!
                                </p>
                            </>
                        ),
                    }}
                    thumb={require("../../../../access/image/careers/JoiningSupercell/HowWeHire/now_hiring.d48d4166.webp")}
                />
                <HiringProcess />
                <GameTeam />
            </div>
            <Footer />
        </>
    );
};

export default JoiningSupercell;
