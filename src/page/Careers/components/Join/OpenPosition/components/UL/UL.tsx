import classNames from "classnames/bind";
import React from "react";
import Button from "../../../../../../../components/common/Button";
import style from "./style.module.scss";

export interface IDataUL {
    textBtn: string;
    link: string;
    id: string;
    disable?: boolean;
}

type Props = {
    title?: string;
    data: IDataUL[];
};
const cx = classNames.bind(style);
const UL = (props: Props) => {
    const { data, title } = props;
    return (
        <div className={cx("sj")}>
            <strong>{title}</strong>
            <div className={cx("wrapper-ul")}>
                {data.map((e) => (
                    <div className={cx("item")} key={e.id}>
                        <Button
                            text={e.textBtn}
                            to={e.link}
                            type={["primary", "rounded"]}
                            disable={e.disable}
                            className={cx('button-ul-open-position', e.disable && 'disable')}
                        ></Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UL;
