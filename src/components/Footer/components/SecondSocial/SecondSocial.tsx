import classNames from "classnames/bind";
import { v4 } from "uuid";
import style from "./style.module.scss";
const cx = classNames.bind(style);

type Props = {};

const SecondSocial = (props: Props) => {
    const renderLiTag = () => {
        const linkSocial = [
            {
                id: v4(),
                text: "Terms of Service",
                link: "/",
            },
            {
                id: v4(),
                text: "Privacy Policy",
                link: "/",
            },
            {
                id: v4(),
                text: `Parent's Guide`,
                link: "/",
            },
            {
                id: v4(),
                text: `Safe and Fair Play Policy`,
                link: "/",
            },
            {
                id: v4(),
                text: `Other Legal Docs`,
                link: "/",
            },
            {
                id: v4(),
                text: `For Media`,
                link: "/",
            },
        ];
        return linkSocial.map((item) => (
            <li key={item.id}>
                <a href={item.link}>{item.text}</a>
            </li>
        ));
    };
    return (
        <nav className={cx("wrapper-second-social")}>
            <ul>{renderLiTag()}</ul>
        </nav>
    );
};

export default SecondSocial;
