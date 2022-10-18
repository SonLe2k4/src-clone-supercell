import { PropsWithChildren } from "react";

import classNames from "classnames/bind";
import style from "./style.module.scss";
type Props = {};
const cx = classNames.bind(style);
const WrapperLayOut = (props: PropsWithChildren<Props>) => {
  return <div className={cx("wrapper-layout")}>{props.children}</div>;
};

export default WrapperLayOut;
