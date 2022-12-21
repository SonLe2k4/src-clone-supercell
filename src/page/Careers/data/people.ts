import { v4 } from "uuid";
import { IDataSlider } from "../../../components/common/Slider/Slider";

const people: IDataSlider[][] = [
    [
        {
            id: v4(),
            link: "/",
            thumbSrc: require("../../../access/image/careers/people/quote_sheila.jpg"),
            title: "Sheila, Marketing",
            des: "“As I reflect, I realise that being a minority has never deterred me from my work. Something that perhaps speaks on the kind of progressive work culture Supercell has had from the beginning. Even though we are still working towards being a diverse company, your skills, talents and work matter more.“",
        },
        {
            id: v4(),
            thumbSrc: require("../../../access/image/careers/people/quote_darian.jpg"),
            title: "Darian, Community",
            des: `"Working at Supercell, I feel my voice matters. Whether it's discussing the future of our games, company culture, or daily team interactions, it's great to know every person's contribution is held in equal measure. Few places have given me the confidence to help my career blossom into something amazing that impacts millions of players around the world."`,
        },
    ],
    [
        {
            id: v4(),
            link: "/",
            thumbSrc: require("../../../access/image/careers/people/3_camilla.jpg"),
            title: "Camilla, Game Designer",
            des: `"What I enjoy about Supercell is being truly responsible for my work and putting out quality games together with a great team that also gives their best. I feel respected and trusted. The acknowledgement of the importance of work-life balance creates opportunities for fun times with really good colleagues."`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../access/image/careers/people/1_brice.jpg"),
            title: "Brice, Character Artist",
            des: `"For me, it’s all about being self-driven. I get to organize my own work and calendar while never forgetting that my main goal is to help my team. I like working here because I don't feel any kind of pressure, even if we make big decisions everyday. There’s no “studio stress” – at least not the unhealthy kind."`,
        },
    ],
    [
        {
            id: v4(),
            thumbSrc: require("../../../access/image/careers/people/3_camilla.jpg"),
            title: "Stuart, Game Programmer",
            des: `"I like being able to decide what to work on with my team and then just do it without having to seek approval or permission from anyone else. Everyone in the company plays at least one of our games passionately. The best players of a certain game might work in marketing or finance instead of a game team."`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../access/image/careers/people/1_brice.jpg"),
            title: "Laura, LiveOps",
            des: `"I love that I get to work on the games that I love with some of the best, most thoughtful people I’ve ever worked with. At Supercell, we set a high bar for ourselves and the work that we do. Because we’re constantly pushing ourselves, we’re constantly learning which makes work very fulfilling to me."`,
        },
    ],
];

export default people