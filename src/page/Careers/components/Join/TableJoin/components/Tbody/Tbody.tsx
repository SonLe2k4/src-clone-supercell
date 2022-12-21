import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "../../../../../../../components/common/Button";
import style from "../../style.module.scss";
import TableJoinStore from "../../TableJoinStore";
import { useCallback } from "react";

export interface IDataTBody {
    id: string;
    title: string;
    link: string;
    location: string;
    position: string;
}

type Props = {
    data: IDataTBody[];
};
const cx = classNames.bind(style);

const Tbody = (props: Props) => {
    const { stringActive } = TableJoinStore();

    const { data } = props;

    const renderData = useCallback(
        () =>
            stringActive === "0"
                ? data.sort((a, b) => a.title.localeCompare(b.title))
                : stringActive === "1"
                ? data.sort((a, b) => a.location.localeCompare(b.location))
                : stringActive === "1"
                ? data.sort((a, b) => a.position.localeCompare(b.position))
                : data,
        [stringActive, data]
    );

    return (
        <tbody>
            {renderData().map((e) => (
                <tr key={e.id}>
                    <td>
                        <strong>
                            <Link to={e.link}>{e.title}</Link>  
                        </strong>
                    </td>
                    <td>
                        <strong>{e.location}</strong>
                    </td>
                    <td>
                        <strong>{e.position}</strong>
                    </td>
                    <td>
                        <Button
                            text="APPLY"
                            to={e.link}
                            type={["primary", "rounded2"]}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;
