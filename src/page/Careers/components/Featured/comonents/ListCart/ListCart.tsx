import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames/bind";
import Button from "../../../../../../components/common/Button";
import featuredPositionsData from "../../featuredData";
import style from "./style.module.scss";

type Props = {};

const cx = classNames.bind(style);

const Cart = (props: Props) => {
    const renderData = () => {
        return featuredPositionsData.map((data) => (
            <div className={cx("cart")} key={data.id}>
                <div className={cx("content")}>
                    <h4>{data.position}</h4>
                    <p>{data.location}</p>
                </div>
                <Button
                    text="APPLY NOW"
                    type={["primary"]}
                    className={cx("btn-cart")}
                    to={data.link}
                ></Button>
            </div>
        ));
    };
    return (
        <div className={cx("wrapper-cart")}>
            {renderData()}
            <div className={cx("cart", "transparent-br", 'no-box-shadow')}>
                <Button
                    text="SEE ALL OPEN POSITIONS"
                    to="/"
                    type={["primary", "rounded"]}
                    iconLeft={<BsChevronDown />}
                ></Button>
            </div>
        </div>
    );
};

export default Cart;
