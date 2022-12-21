import classNames from "classnames/bind";
import style from "./style.module.scss";
import OfficeLivingProvider from "./Provider/OfficeLivingProvider";
import ForWeb from "./components/ForWeb";
import ForMobile from "./components/ForMobile";

type Props = {};
const cx = classNames.bind(style);

const OfficeLiving = (props: Props) => {
    return (
        <div className={cx("wrapper")}>
            <OfficeLivingProvider>
                <ForWeb />
                <ForMobile />
            </OfficeLivingProvider>
        </div>
    );
};

export default OfficeLiving;
