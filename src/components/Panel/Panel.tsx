import classNames from "classnames/bind";
import img from "../../access/image";
import HeroHeading from "./HeroHeading";
import { IHeroHeading } from "./HeroHeading/HeroHeading";
import style from "./style.module.scss";

type Props = {
    backgroundImage?: {
        forWeb: string;
        forMobile: string;
        classNameBrWeb?: string;
        classNameBrMobile?: string;
    };
    backgroundVideo?: {
        forWeb: string;
        forMobile?: string;
    };

    heroHeading?: IHeroHeading;
    headingHeroDisplay?: "none";
    logo?: string;
    classNameWrapper?: string;
};
const cx = classNames.bind(style);
const Panel = (props: Props) => {
    const { backgroundImage, backgroundVideo, classNameWrapper } = props;

    const renderBr = () => {
        if (backgroundVideo)
            return (
                <>
                    <video src={backgroundVideo.forWeb} autoPlay muted loop>
                        <source
                            src={backgroundVideo.forWeb}
                            type="video/mp4"
                        ></source>
                    </video>
                </>
            );
        return (
            <>
                <picture>
                    <source
                        media="(min-width: 767px)"
                    />

                    <img
                        src={backgroundImage?.forWeb || img.slider.homePage.web}
                        alt=""
                        className={cx(backgroundImage?.classNameBrWeb)}
                    />
                </picture>

                {/* for mobile */}
                <div className={cx("slider-mobile")}>
                    <picture>
                        <source
                            media="(max-width: 1024px)"
                            srcSet={
                                backgroundImage?.forMobile ||
                                img.slider.homePage.mobile
                            }
                        />

                        <img
                            src={
                                backgroundImage?.forMobile ||
                                img.slider.homePage.mobile
                            }
                            alt=""
                            className={cx(backgroundImage?.classNameBrMobile)}
                        />
                    </picture>
                </div>
            </>
        );
    };
    return (
        <div className={cx("wrapper-slider", classNameWrapper)}>
            {renderBr()}

            {props.headingHeroDisplay !== "none" && (
                <HeroHeading
                    logo={props.logo}
                    heroHeading={props.heroHeading}
                />
            )}
        </div>
    );
};

export default Panel;
