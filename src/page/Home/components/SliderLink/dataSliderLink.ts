import { v4 } from "uuid";

const dataSliderLink: {
    id: string;
    thumbSrc: any;
    link: string;
    title: string;
    des: string;
}[][] = [
    [
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_gamasutra.jpg"),
            link: "/",
            title: `Less management, more success - Inside Supercell's upside-down organization`,
            des: `
            There is no greenlight process from management, no milestone meetings where teams need to justify their project’s existence to finance. Teams can kill their games and move on if deemed necessary. All creative decisions are up to the teams. So the role of management in an upside structure? Build great teams, and support them in their efforts in order to facilitate their success.`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_gamesindustry.jpg"),
            link: "/",
            title: `Trust Games`,
            des: `
    It all starts from trust. If the team's working independently, it can't work without trust. That trust needs to be mutual. The management needs to trust their developers to make great games, but the developers also need to trust the management to have their backs. If developers are afraid of failing because there will be consequences, then they won't take risks.`,
        },
    ],
    [
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_mobilegamer.jpg"),
            link: "/",
            title: `Supercell dodged ‘the great resignation’, but it’s doubling down on staff wellbeing anyway`,
            des: `“We work with a company who did a whole bunch of training to increase awareness of mental health and also reduce the stigma,” says Mansford. “If people aren’t talking about it, then that’s a problem in itself.” Staff can ask to be trained like mental health first aiders under a program called ‘Jedis of the mind’, and in Helsinki there’s a psychologist on-site twice a week. There are a raft of other training and online resources for staff who want to learn more in a less public way as well.`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_pocketgamer.jpg"),
            link: "/",
            title: `Supercell talks breaking the mould of puzzle games with Clash Quest`,
            des: `"In my experience, whenever you change some design fundamentals, the whole game needs to be built in a different way. I don’t think many players will notice these differences, but they can have a big impact on how the game needs to be built.”`,
        },
    ],
    [
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_theverge2.jpg"),
            link: "/",
            title: `Brawl Stars is nearing its global launch`,
            des: `Development on Brawl Stars began around four years ago, and according to Jon Franzas, a designer and programmer who initially served as the project lead, it changed a lot over that time. “As a company we don’t have so much experience with this type of game,” Franzas explains. “So we wanted to launch it very early, in a very raw and unfinished state.”`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_venturebeat.jpg"),
            link: "/",
            title: `Supercell CEO thrives on trusting the instincts of game developers`,
            des: `Our threshold for releasing anything to beta should be low, but our bar for releasing anything globally should be high. But one way to fail as a company would be you paralyze yourself. Nothing is ever good enough and you don’t put anything out. One thing we fundamentally believe in is that how we ultimately achieve the best quality is we learn as quickly as possible. If you never ship anything to real players, you never learn, and you never achieve ultimate quality.`,
        },
    ],
    [
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_mobilegamer.jpg"),
            link: "/",
            title: `Supercell dodged ‘the great resignation’, but it’s doubling down on staff wellbeing anyway`,
            des: `“We work with a company who did a whole bunch of training to increase awareness of mental health and also reduce the stigma,” says Mansford. “If people aren’t talking about it, then that’s a problem in itself.” Staff can ask to be trained like mental health first aiders under a program called ‘Jedis of the mind’, and in Helsinki there’s a psychologist on-site twice a week. There are a raft of other training and online resources for staff who want to learn more in a less public way as well.`,
        },
        {
            id: v4(),
            thumbSrc: require("../../../../access/image/homePage/slider_link/ourstory_news_pocketgamer.jpg"),
            link: "/",
            title: `Supercell talks breaking the mould of puzzle games with Clash Quest`,
            des: `"In my experience, whenever you change some design fundamentals, the whole game needs to be built in a different way. I don’t think many players will notice these differences, but they can have a big impact on how the game needs to be built.”`,
        },
    ],
];

export default dataSliderLink;
