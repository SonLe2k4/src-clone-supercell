import { v4 } from "uuid";
import { IDataSlider } from "../../../components/common/Slider/Slider";

const dataSlideCareers: IDataSlider[][] = [
    [
        {
            id: v4(),
            link: "/",
            thumbSrc: require("../../../access/image/careers/slides/bg_fullvideo_makingofhero.jpg"),
            title: "The Making of a Hero",
            des: "CLASH OF CLANS",
        },
    ],
    [
        {
            id: v4(),
            link: "/",
            thumbSrc: require("../../../access/image/careers/slides/bg_fullvideo_goblincage.jpg"),
            title: "Making of Goblin Cage",
            des: "CLASH ROYALE",
        },
    ],
    [
        {
            id: v4(),
            link: "/",
            thumbSrc: require("../../../access/image/careers/slides/bg_fullvideo_giantgoblin.jpg"),
            title: "The Making of a Hero",
            des: "CLASH ROYALE",
        },
    ],
];

export default dataSlideCareers;
