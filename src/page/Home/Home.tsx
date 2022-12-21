import classNames from "classnames/bind";
import img from "../../access/image";
import Article from "../../components/common/Article";
import SliderLink from "../../components/common/Slider/Slider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Panel from "../../components/Panel";
import News from "./components/News";
import dataSliderLink from "./components/SliderLink/dataSliderLink";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("home-page")}>
                <Panel 
                    heroHeading={{
                        des: 'Makers of Hay Day, Clash of Clans, Boom Beach, Clash Royale and Brawl Stars.'
                    }}
                />
                <News />
                <Article
                    classNameWp={cx("mt-40")}
                    brColor={"#238cf0"}
                    thumb={img.article.thumb.img_1}
                    backgroundImage={img.article.background.img_1}
                    backgroundImageMobile={img.article.background.img_1_mobile}
                    info={{
                        textBtn: "see games",
                        des: `
                    Our dream is to create games that as many people as possible play for years and that are remembered forever.`,
                        linkBtn: "/games",
                        title: "games",
                    }}
                />
                <Article
                    isReverse={true}
                    backgroundImage={img.article.background.img_2}
                    backgroundImageMobile={img.article.background.img_2_mobile}
                    brColor={"#08090a"}
                    classNameWp={cx('art-next-step')}
                    classNameInfo={cx('info-next-step')}
                    info={{
                        textBtn: "see careers",
                        des: `Join us to create games that excite and help our players around the world make memories.`,
                        title: "CAREERS",
                        linkBtn: "/careers",
                    }}
                />
                <SliderLink 
                    data={dataSliderLink}
                />
            </div>
            <Footer />
        </>
    );
};

export default Home;
