import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);
const FooterEnd = (props: Props) => {
    const renderMail = () => {
        const mail = [
            "Supercell Oy",
            "Jätkäsaarenlaituri 1",
            "00180 Helsinki",
            "Finland",
        ];
        return mail.map((el) => <span key={el}>{el}</span>);
    };
    return (
        <div className={cx("footer-end-wrapper")}>
            <address>{renderMail()}</address>
            <div className={cx('logo')}>
                <Link to='/'></Link>
            </div>
        </div>
    );
};

export default FooterEnd;
