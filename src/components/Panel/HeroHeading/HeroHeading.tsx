import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Button from "../../common/Button";

export interface IHeroHeading {
    title?: string;
    noBtn?: boolean;
    contentBtn?: string;
    hrefBtn?: string;
    toBtn?: string;
    des?: string;
    colorTitle?: string;
    colorDes?: string;
}

type Props = {
    heroHeading?: IHeroHeading;
    logo?: string;
};

const cx = classNames.bind(style);
const HeroHeading = (props: Props) => {
    const { heroHeading, logo } = props;

    return (
        <div className={cx("hero-heading", logo && "logo")}>
            {logo ? (
                <div className={cx("logo")}>
                    <img src={logo} alt="" />
                </div>
            ) : (
                <>
                    <h2 style={{color: heroHeading?.colorTitle}}>{heroHeading?.title || "SUPERCELL"}</h2>
                    <p style={{color: heroHeading?.colorDes}}>{heroHeading?.des}</p>

                    {!heroHeading?.noBtn && (
                        <Button
                            text={heroHeading?.contentBtn || "Alibaba"}
                            href={heroHeading?.hrefBtn}
                            to={heroHeading?.toBtn}
                            className={cx("btn")}
                            type={["primary", "rounded"]}
                            iconLeft={
                                <BsChevronDown
                                    className={cx("icon-btn-hero")}
                                />
                            }
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default HeroHeading;
