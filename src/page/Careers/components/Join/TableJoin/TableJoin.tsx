import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tbody from "./components/Tbody";
import Thead from "./components/Thead";
import { dataTableJoin } from "./data";
import style from "./style.module.scss";
import TableJoinProvider from "./TableJoinProvider";
import TableJoinStore from "./TableJoinStore";
type Props = {};
const cx = classNames.bind(style);

const TableJoin = (props: Props) => {
    const { stringActive, onClickStrongTag } = TableJoinStore();

    const renderLiTagMobile = () =>
        dataTableJoin.map((e) => (
            <li key={e.id}>
                <div className={cx("content")}>
                    <Link to={e.link}>{e.title}</Link>
                    <span>{e.position}</span>
                </div>
                <Link to={e.link}></Link>
            </li>
        ));

    return (
        <div className={cx("wrapper")}>
            {/* web */}
            <TableJoinProvider>
                <table className={cx("for-web")}>
                    <Thead />
                    <Tbody data={dataTableJoin} />
                    {/* <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>$180</td>
                    </tr>
                </tfoot> */}
                </table>
                <ul className={cx("for-mobile")}>
                    <div className={cx("title")}>
                        <h5>SORT BY</h5>
                        <div className={cx("fields")}>
                            <h5
                                onClick={(e) => onClickStrongTag(e, "0")}
                                className={cx(stringActive === "0" && "active")}
                            >
                                title
                            </h5>
                            <h5
                                
                                onClick={(e) => onClickStrongTag(e, "1")}
                                className={cx(stringActive === "1" && "active")}
                            >location</h5>
                        </div>
                    </div>
                    {renderLiTagMobile()}
                </ul>
            </TableJoinProvider>
        </div>
    );
};

export default TableJoin;
