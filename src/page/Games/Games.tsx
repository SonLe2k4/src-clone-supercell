import classNames from "classnames/bind";
import img from "../../access/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Panel from "../../components/Panel";
import GamesList from "./components/gamesList";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);
const Games = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("games-page")}>
                <Panel
                    backgroundImage={{
                        forMobile: img.slider.gamesPage.mobile,
                        forWeb: img.slider.gamesPage.web,
                    }}
                    heroHeading={{
                        title: 'games',
                        noBtn: true,
                        des: 'Farm, Clash, Boom, Battle, Brawl!'
                    }}
                />
                <GamesList />
            </div>
            <Footer />
        </>
    );
};

export default Games;
