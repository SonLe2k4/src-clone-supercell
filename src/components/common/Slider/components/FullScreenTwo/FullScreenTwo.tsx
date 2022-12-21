import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./style.module.scss";


type Props = {
    data: {
        des: string;
        title: string;
        thumbSrc: string;
        backgroundRight: string;
        link: string;
    }
};

const cx = classNames.bind(style);
const FullScreenTwo = (props: Props) => {
    const {data} = props; 
    return <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <img src={data.thumbSrc} alt="" />
            <Link to={data.link}></Link>
        </div>
        <div className={cx('right')}>
            <div className={cx('content')}>
                <h2>{data.title}</h2>
                <p>{data.des}</p>
            </div>
            <img src={data.backgroundRight} alt="" />
        </div>
    </div>;
};

export default FullScreenTwo;
