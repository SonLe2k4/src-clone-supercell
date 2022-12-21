import classNames from "classnames/bind";
import { IDataSlider } from "../../../components/common/Slider/Slider";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SliderLink from "../../../components/common/Slider";
import ArticlePageGame from "./components/ArticlePageGame";
import style from "./style.module.scss";
import Timeline from "./components/Timeline";
import { ITimelines } from "./components/Timeline/Timeline";
import Panel from "../../../components/Panel";

interface SliderBody {
    backgroundWeb?: string;
    backgroundMobile?: string;

    title?: string;
    des?: string;
    thumb?: string;
    classNameThumb?: string;

    listAppDownload?: { link: string; id: string; src: string }[];
    titleLinks?: string;
    whiteColorInfo?: boolean;
}

export interface IDataPageDetailGame {
    sliderMain: {
        logo: string;
        backgroundWeb: string;
        backgroundMobile: string;
        headingHeroDisplay?: "none";
    };
    timelines: {
        timelineBar?: ITimelines[];
        title?: string;
        des?: string;
        thumb?: string;
        classNameThumb?: string;
    }
    ArticleBody?: {
        first?: SliderBody;
        second?: SliderBody;
    };
    sliderLink?: IDataSlider[][];
}

type Props = {
    data: IDataPageDetailGame;
};
const cx = classNames.bind(style);
const PageDetailGame = (props: Props) => {
    const { data } = props;

    const { ArticleBody, sliderMain, sliderLink, timelines } = data;

    return (
        <>
            <Header />
            <div className={cx("games-page")}>
                <Panel
                    backgroundImage={{
                        forMobile: sliderMain.backgroundMobile,
                        forWeb: sliderMain.backgroundWeb,
                    }}
                    headingHeroDisplay={sliderMain.headingHeroDisplay}
                    logo={sliderMain.logo}
                />
                {ArticleBody?.first && (
                    <ArticlePageGame
                        des={ArticleBody?.first.des || ""}
                        title={ArticleBody?.first.title || ""}
                        listAppDownload={
                            ArticleBody?.first.listAppDownload || []
                        }
                        thumb={ArticleBody?.first.thumb || ""}
                        styleThumb={ArticleBody?.first.classNameThumb || ""}
                        backgroundWeb={ArticleBody?.first.backgroundWeb || ""}
                        backgroundMobile={
                            ArticleBody?.first.backgroundMobile || ""
                        }
                        whiteColorInfo={ArticleBody?.first.whiteColorInfo}
                    />
                )}
                <Timeline
                    timeline={
                        timelines.timelineBar || []
                    }
                    title={timelines.title || ''}
                    des={timelines.des || ''}
                    thumb={timelines.thumb || ''}
                    classNameThumb={timelines.classNameThumb || ''}
                />
                {ArticleBody?.second && (
                    <ArticlePageGame
                        des={ArticleBody?.second.des || ""}
                        title={ArticleBody?.second.title || ""}
                        listAppDownload={
                            ArticleBody?.second.listAppDownload || []
                        }
                        thumb={ArticleBody?.second.thumb || ""}
                        styleThumb={ArticleBody?.second.classNameThumb || ""}
                        backgroundWeb={ArticleBody?.second.backgroundWeb || ""}
                        backgroundMobile={
                            ArticleBody?.second.backgroundMobile || ""
                        }
                        whiteColorInfo={ArticleBody?.second.whiteColorInfo}
                        titleLinks={ArticleBody?.second.titleLinks}
                    />
                )}

                <SliderLink itemIsVideoYtb={true} data={sliderLink || []} />
            </div>
            <Footer />
        </>
    );
};

export default PageDetailGame;
