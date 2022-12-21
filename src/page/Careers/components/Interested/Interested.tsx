import classNames from "classnames/bind";
import Button from "../../../../components/common/Button";
import style from "./style.module.scss";

type Props = {};

const cx = classNames.bind(style);

const Interested = (props: Props) => {
    return (
        <div className={cx("wrapper-interested")}>
            <div className={cx("container", "shrink_web", "shrink_mobile")}>
              <div className={cx("left")}>
                <h2>interested in working with us?</h2>
                <Button
                  text="see all positions"
                  type={['rounded2']}
                  className={cx('btn-interested')}
                ></Button>
              </div>
              <div className={cx("right")}>
                <img src={require('../../../../access/image/careers/mini_pekka_fl.9f294fd5.png')} alt="" />
              </div>
            </div>
        </div>
    );
};

export default Interested;
