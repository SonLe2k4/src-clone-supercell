import classNames from "classnames/bind";
import style from "../../style.module.scss";
import TableJoinStore from "../../TableJoinStore";

type Props = {};
const cx = classNames.bind(style);

const Thead = (props: Props) => {
    const { stringActive, onClickStrongTag } = TableJoinStore();

    return (
        <thead>
            <tr>
                <th>
                    <strong
                        onClick={(e) => onClickStrongTag(e, "0")}
                        className={cx(stringActive === "0" && "active")}
                    >
                        Title
                    </strong>
                </th>
                <th>
                    <strong
                        onClick={(e) => onClickStrongTag(e, "1")}
                        className={cx(stringActive === "1" && "active")}
                    >
                        Location
                    </strong>
                </th>
                <th>
                    <strong
                        onClick={(e) => onClickStrongTag(e, "2")}
                        className={cx(stringActive === "2" && "active")}
                    >
                        Position
                    </strong>
                </th>
                <th></th>
            </tr>
        </thead>
    );
};

export default Thead;
