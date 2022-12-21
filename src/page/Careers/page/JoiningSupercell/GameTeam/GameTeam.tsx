import classNames from "classnames/bind";
import style from "./style.module.scss";
type Props = {};
const cx = classNames.bind(style);
const positionHiring = [
    "GAME PROGRAMMER",
    "GAME ARTIST",
    "SERVER ENGINEER",
    "GAME TESTER",
    "DATA SCIENTIST",
    "GAME CHAMPION",
    "COMMUNITY MANAGER",
    "GAME DESIGNER",
];
const GameTeam = (props: Props) => {
    return (
        <div className={cx("wrapper")}>
            <h2>Composition of our Typical live Game Team:</h2>
            <div className={cx("list")}>
                <ul>
                    {positionHiring.map((p) => (
                        <li key={p}>{p}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameTeam;
