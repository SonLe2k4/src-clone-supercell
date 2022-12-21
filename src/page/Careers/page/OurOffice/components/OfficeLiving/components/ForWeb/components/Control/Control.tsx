import { useCallback, useMemo } from "react";
import useOfficeLivingStore from "../../../../Provider/useOfficeLivingStore";
import style from "../../style.module.scss";
import classNames from "classnames/bind";
type Props = {};
const cx = classNames.bind(style);
const Control = (props: Props) => {
    const { setActive, data, active } = useOfficeLivingStore();

    const arrData = useMemo(() => {
        return Object.values(data).map((e) => e.control);
    }, [data]);

    const renderLiTag = useCallback(
        () =>
            arrData.map((e) => (
                <li key={e.title} className={cx(active === e.title && 'active')} onClick={() => setActive(e.title)}>
                    <h3>{e.title}</h3>
                    <p>{e.position}</p>
                </li>
            )),
        [arrData, setActive, active]
    );

    return (
        <div className={cx("wrapper-control")}>
            <ul>{renderLiTag()}</ul>
        </div>
    );
};

export default Control;
