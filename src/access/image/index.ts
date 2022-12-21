import { v4 } from "uuid";

const img = {
    logo: require("./logo_supercell@2x.png"),
    games: {
        listGames: {
            hayDay: require("./slider/GamesPage/listGames/games_thumbnail_hayday.jpg"),
            coc: require("./slider/GamesPage/listGames/games_thumbnail_clashofclans.jpg"),
            boomBeach: require("./slider/GamesPage/listGames/games_thumbnail_boombeach.jpg"),
            clashroyale: require("./slider/GamesPage/listGames/games_thumbnail_clashroyale.jpg"),
            brawlstars: require("./slider/GamesPage/listGames/games_thumbnail_brawlstars.jpg"),
        },
    },

    slider: {
        homePage: {
            web: require("./slider/HomePage/web.png"),
            mobile: require("./slider/HomePage/mobile.png"),
        },
        gamesPage: {
            web: require("./slider/GamesPage/web.png"),
            mobile: require("./slider/GamesPage/mobile.png"),
        },
    },
    slider_link: {
        mobileGamerBiz: require("./homePage/slider_link/ourstory_news_mobilegamer.jpg"),
    },
    news: {
        img_1: require("./homePage/news/img-1.png"),
        img_2: require("./homePage/news/img-2.png"),
        img_3: require("./homePage/news/img-3.png"),
        img_4: require("./homePage/news/img-4.png"),
        img_5: require("./homePage/news/img-5.png"),
        img_6: require("./homePage/news/img-6.png"),
        img_7: require("./homePage/news/img-7.png"),
        img_8: require("./homePage/news/img-8.png"),
    },
    article: {
        background: {
            img_1: require("./homePage/article/background/bg_wmg_brawlstars.jpg"),
            img_1_mobile: require("./homePage/article/background/bg_wmg_brawlstars_mobile.jpg"),

            img_2: require("./homePage/article/background/bg_fp_nextstep.jpg"),
            img_2_mobile: require("./homePage/article/background/bg_nextstep_mobile.jpg"),
        },
        thumb: {
            img_1: require("./homePage/article/thumb/img-1.png"),
        },
    },
    footer: {
        "link-social-media": [
            {
                link: "#",
                img: require("./footer/link-social/some_youtube.png"),
            },
            {
                link: "#",
                img: require("./footer/link-social/some_facebook.png"),
            },
            {
                link: "#",
                img: require("./footer/link-social/some_instagram.png"),
            },
            {
                link: "#",
                img: require("./footer/link-social/some_twitter.png"),
            },
            {
                link: "#",
                img: require("./footer/link-social/some_linkedin.png"),
            },
            {
                link: "#",
                img: require("./footer/link-social/some_glassdoor.png"),
            },
        ],

        download: [
            {
                link: "#",
                id: v4(),
                img: require("./footer/down-load/appstore.png"),
            },
            {
                link: "#",
                id: v4(),
                img: require("./footer/down-load/googleplay.png"),
            },
        ],
    },

    appDownLoad: {
        appstore: {
            link: "/",
            id: v4(),
            src: require("./footer/down-load/appstore.png"),
        },
        ggplay: {
            link: "/",
            id: v4(),
            src: require("./footer/down-load/googleplay.png"),
        },
        galaxystore: {
            link: "/",
            id: v4(),
            src: require("./footer/down-load/galaxystore.png"),
        },
        amazon_appstore: {
            link: "/",
            id: v4(),
            src: require("./footer/down-load/amazon_appstore.png"),
        },
    },
};


export default img;
