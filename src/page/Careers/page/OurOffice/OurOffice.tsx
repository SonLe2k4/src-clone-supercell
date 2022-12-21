import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Panel from "../../../../components/Panel";
import Helsinki from "./components/Helsinki";

type Props = {};
const cx = classNames.bind(style);
const OurOffice = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <Panel
                    heroHeading={{
                        colorTitle: "#fff",
                        colorDes: "#fff",
                        title: "OUR OFFICES",
                        des: "Four unique personalities. One unifying culture.",
                        noBtn: true,
                    }}
                    backgroundImage={{
                        forMobile: require('../../../../access/image/careers/ourOffice/our_offices_hero.5e45caa8.jpg'),
                        forWeb: require('../../../../access/image/careers/ourOffice/our_offices_hero.5e45caa8.jpg'),
                        classNameBrMobile: cx('backGr-Img-Slider-Panel'),
                        classNameBrWeb: cx('backGr-Img-Slider-Panel'),
                    }}
                    classNameWrapper={cx("wrapper-panel")}
                />
                <Helsinki />
            </div>
            <Footer />
        </>
    );
};

export default OurOffice;
