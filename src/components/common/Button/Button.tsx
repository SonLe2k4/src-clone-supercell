import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
type Props = {
    className?: string;
    to?: string;
    href?: string;

    text: string;

    type?: ("primary" | "rounded" | 'rounded2' | "simple")[];

    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;

    disable?: boolean;
};

const Button = (props: Props) => {
    const { text, to, href, className, type, iconLeft, iconRight, disable } =
        props;

    const classes = cx(
        "reset-btn",
        "btn",
        type?.includes("primary") && "primary",
        type?.includes("rounded") && "rounded",
        type?.includes("rounded2") && "rounded2",
        type?.includes("simple") && "simple",
        disable ? "disabled" : "",

        className
    );

    let BtnTag = (
        <button
            className={classes}
            onClick={(e) => {
                disable && e.preventDefault()
            }}
        >
            {iconLeft && <div className={cx("icon", "left")}>{iconLeft}</div>}{" "}
            {text}
            {iconRight && (
                <div className={cx("icon", "right")}>{iconRight}</div>
            )}
        </button>
    );

    if (to)
        return (BtnTag = (
            <Link
                to={to}
                className={classes}
                onClick={(e) => {
                    disable && e.preventDefault()
                }}
            >
                {iconLeft && (
                    <div className={cx("icon", "left")}>{iconLeft}</div>
                )}{" "}
                {text}
                {iconRight && (
                    <div className={cx("icon", "right")}>{iconRight}</div>
                )}
            </Link>
        ));
    if (href)
        return (BtnTag = (
            <a
                href={href}
                className={classes}
                onClick={(e) => {
                    disable && e.preventDefault()
                }}
            >
                {iconLeft && (
                    <div className={cx("icon", "left")}>{iconLeft}</div>
                )}{" "}
                {text}
                {iconRight && (
                    <div className={cx("icon", "right")}>{iconRight}</div>
                )}
            </a>
        ));

    return BtnTag;
};

export default Button;
