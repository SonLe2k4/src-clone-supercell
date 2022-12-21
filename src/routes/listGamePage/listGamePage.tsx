import { v4 } from "uuid";

interface IAppDownLoad {
    id: string;
    link: string;
    thumb: string;
}

interface IIntro {
    thumb: string;
    title: string;
    des: string;
    appDownLoad: IAppDownLoad[];
    backgroundIntro?: string;
}

interface IItemPageGame {
    name: string;
    path: string;
    slider: {
        web: any;
        mobile: any;
        logo: any;
    };
    intro_1: IIntro;
    intro_2: IIntro;
}

const listGamePage: IItemPageGame[] = [
    {
        path: '/games/hayday',
        name: 'hayday',
        slider: {
            web: require("../../access/image/slider/GamesPage/listSliderGames/hayday/bg_hero_hayday.jpg"),
            mobile: require("../../access/image/slider/GamesPage/listSliderGames/hayday/bg_hero_hayday_m.jpg"),
            logo: require("../../access/image/slider/GamesPage/listSliderGames/hayday/logo.jpg"),
        },
        intro_1: {
            thumb: require("../../access/image/hayday/bg_intro_hayday.jpg"),
            title: "FARM WITH FRIENDS AND FAMILY",
            des: `
            You don’t have to be from a farm to be a great farmer. Hay Day lets you get back to nature and experience the simple life of working the land. It’s a special game set in a real special place. Food grows free, people smile and the animals are always happy to see you. It never rains here, but the crops never die. And if you’re craving a little bacon, one of the pigs will be happy to fry some up for you. After all, what are pigs... oops, we mean neighbors for?`,
            appDownLoad: [
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/appstore.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/googleplay.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/galaxystore.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/amazon_appstore.png"),
                },
            ],
        },
        intro_2: {
            thumb: require("../../access/image/hayday/bg_intro_hayday.jpg"),
            title: "FARM WITH FRIENDS AND FAMILY",
            des: `
            You don’t have to be from a farm to be a great farmer. Hay Day lets you get back to nature and experience the simple life of working the land. It’s a special game set in a real special place. Food grows free, people smile and the animals are always happy to see you. It never rains here, but the crops never die. And if you’re craving a little bacon, one of the pigs will be happy to fry some up for you. After all, what are pigs... oops, we mean neighbors for?`,
            appDownLoad: [
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/appstore.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/googleplay.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/galaxystore.png"),
                },
                {
                    id: v4(),
                    link: "/",
                    thumb: require("../../access/image/footer/down-load/amazon_appstore.png"),
                },
            ],
        }
    },
]

export default listGamePage;
