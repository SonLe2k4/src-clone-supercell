import classNames from "classnames/bind";
import style from "./style.module.scss";
import img from "../../../access/image/index";
type Props = {};
const cx = classNames.bind(style);

const SocialMediaMenu = (props: Props) => {
    const renderSocialMediaLink = () =>
        img.footer["link-social-media"].map((img) => (
            <li key={img.img}>
                <a
                    href={img.link}
                    style={{ backgroundImage: `url(${img.img})` }}
                >
                    {""}
                </a>
            </li>
        ));
    const renderSocialDownload = () =>
        img.footer.download.map((e) => (
            <a
                href={e.link}
                key={e.id}
                style={{ backgroundImage: `url(${e.img})` }}
            >
                {""}
            </a>
        ));
    return (
        <div className={cx("social-media-menu-wrapper")}>
            <div className={cx("link")}>
                <h5>Follow us on</h5>
                <ul>{renderSocialMediaLink()}</ul>
            </div>

            <div className={cx("down-load")}>
                <h5>Download our games from</h5>
                <div>{renderSocialDownload()}</div>
            </div>
        </div>
    );
};

export default SocialMediaMenu;
