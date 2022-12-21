import classNames from "classnames/bind";
import Header from "../../components/Header";
import style from "./style.module.scss";
import Article from "../../components/common/Article";
import {AiOutlineDoubleRight} from "react-icons/ai"
import Featured from "./components/Featured";
import Panel from "../../components/Panel";
import Slider from "../../components/common/Slider";
import dataSlideCareers from "./data/dataSlides";
import people from "./data/people";
import Office from "./components/Office";
import Living from "./components/Living";
import Join from "./components/Join";
import Footer from "../../components/Footer";

type Props = {};

const cx = classNames.bind(style);

const Careers = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("careers-page")}>
                <Panel
                    heroHeading={{
                        colorTitle: "#fff",
                        colorDes: "#fff",
                        title: "CAREERS",
                        des: "We create games that are played for years and remembered forever.",
                        contentBtn: "see positions",
                    }}
                    backgroundVideo={{
                        forWeb: require("../../access/video/careers_bg_1920x1080.mp4"),
                    }}
                />
                <Article
                    classNameContent={cx("content-why")}
                    classNameInfo={cx("content-info-why")}
                    classNameBtn={cx("content-btn-why")}
                    info={{
                        colorDes: "#000",
                        colorTitle: "#000",
                        title: "WHY YOU MIGHT LOVE IT HERE",
                        des: [
                            `We believe games have the power to bring people around the world together and closer to each other. We work to create new, innovative, memorable experiences no one has played before. This is why we try to design games that excite wide and diverse player communities as well as to expand the audience for otherwise smaller “niche” game concepts.`,

                            `If you love to think, talk, play and make games, Supercell is the place for you. We’ve built a company of proactive and independent teams with the freedom to do what they think is best for their players, our games and the company at large.`,
                        ],
                        textBtn: "Read more",
                        iconRightBtn: <AiOutlineDoubleRight />
                    }}
                    thumb={require("../../access/image/careers/rascals-render-002@2x.jpg")}
                    classNameThumb={cx("thumb-why")}
                />
                <Featured />
                <Slider 
                    data={dataSlideCareers}
                    type='fullScreen'
                    controlKeyboard="none"
                />
                <Slider 
                    data={people}
                />
                <Office />
                <Living />
                <Join />
                <Footer />
            </div>
        </>
    );
};

export default Careers;
