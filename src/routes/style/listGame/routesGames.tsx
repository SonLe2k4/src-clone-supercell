import { BsFlag } from "react-icons/bs";
import classNames from "classnames/bind";
import { v4 } from "uuid";
import PageDetailGame from "../../../page/Games/pageDetailGame/pageDetailGame";

import styleGame from "./game.module.scss";

const cx = classNames.bind(styleGame);

const routesGames = [
    {
        id: v4(),
        path: "/games/hayday",
        element: (
            <PageDetailGame
                data={{
                    sliderMain: {
                        logo: require("../../../access/image/games/hayday/sliderMain/logo.jpg"),
                        backgroundMobile: require("../../../access/image/games/hayday/sliderMain/bg_hero_hayday_m.jpg"),
                        backgroundWeb: require("../../../access/image/games/hayday/sliderMain/bg_hero_hayday.jpg"),
                    },
                    ArticleBody: {
                        first: {
                            title: `FARM WITH FRIENDS AND FAMILY`,
                            des: `You don’t have to be from a farm to be a great farmer. Hay Day lets you get back to nature and experience the simple life of working the land. It’s a special game set in a real special place. Food grows free, people smile and the animals are always happy to see you. It never rains here, but the crops never die. And if you’re craving a little bacon, one of the pigs will be happy to fry some up for you. After all, what are pigs... oops, we mean neighbors for?`,
                            thumb: require("../../../access/image/games/hayday/sliderBody/first/bg_intro_hayday.jpg"),
                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/appstore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/googleplay.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/galaxystore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/amazon_appstore.png"),
                                },
                            ],
                        },
                        second: {
                            title: "STAY UP-TO-DATE",
                            des: "To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.",

                            backgroundWeb: require("../../../access/image/games/hayday/sliderBody/second/games_hayday_community_bg.jpg"),
                            backgroundMobile: require("../../../access/image/games/hayday/sliderBody/second/games_hayday_community_m_bg.jpg"),

                            thumb: require("../../../access/image/games/hayday/sliderBody/second/bg_gamewebsite_hayday.png"),
                            whiteColorInfo: true,
                            titleLinks: "FOLLOW HAY DAY ON",

                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_reddit.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_youtube.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_facebook.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_twitter.png"),
                                },
                            ],
                        },
                    },
                    timelines: {
                        timelineBar: [
                            {
                                id: v4(),
                                title: "Global Launch",
                                year: "2012",
                                icon: <BsFlag />,
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Neighborhoods",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Town",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Derby",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Valley",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Farm Pass",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "",
                                background: "",
                                year: "today",
                            },
                        ],
                        thumb: require("../../../access/image/games/hayday/timeline/bg_timeline_hayday.png"),
                        title: "CONSTANTLY EVOLVING",
                        des: "Hay Day has been constantly evolving to offer more user-friendly, consistent and fun online experiences for Supercell gamers. There have been countless updates since the game launched in 2012.",
                        classNameThumb: cx("thumbHayday"),
                    },
                    sliderLink: [
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/hayday/sliderLink/games_hayday_video_toomuchwool_thumbnail.jpg"),
                                title: "to much wool",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/hayday/sliderLink/games_hayday_video_cake_thumbnail.jpg"),
                                title: "cake",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/hayday/sliderLink/games_hayday_video_grouphug_thumbnail.jpg"),
                                title: "Neighborhood Group Hug",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/hayday/sliderLink/games_hayday_video_hayday360_thumbnail.jpg"),
                                title: "360 Hug",
                            },
                        ],
                    ],
                }}
            />
        ),
    },
    {
        id: v4(),
        path: "/games/clashofclans",
        element: (
            <PageDetailGame
                data={{
                    sliderMain: {
                        logo: require("../../../access/image/games/coc/sliderMain/main_logo_clashofclans.png"),
                        backgroundMobile: require("../../../access/image/games/coc/sliderMain/hero_bg_clashofclans_m_0.jpg"),
                        backgroundWeb: require("../../../access/image/games/coc/sliderMain/hero_bg_clashofclans_.jpg"),
                    },
                    ArticleBody: {
                        first: {
                            title: `LEAD YOUR CLAN TO VICTORY!`,
                            des: `Answer the call of the mustache! Join the international fray that is Clash of Clans. Customize your village, build an army and crush your opponents. Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians. Download for free and Clash on, Chief!`,
                            thumb: require("../../../access/image/games/coc/sliderBody/first/bg_intro_clashofclans.jpg"),
                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/appstore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/googleplay.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/amazon_appstore.png"),
                                },
                            ],
                        },
                        second: {
                            title: "SEE THE LATEST",
                            des: "To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.",

                            backgroundWeb: require("../../../access/image/games/coc/sliderBody/second/bg_gamesocial_clashofclans.jpg"),
                            backgroundMobile: require("../../../access/image/games/coc/sliderBody/second/games_clashofclans_community_m_bg.jpg"),

                            thumb: require("../../../access/image/games/coc/sliderBody/second/bg_gamewebsite_clashofclans.png"),
                            whiteColorInfo: true,
                            titleLinks: "FOLLOW CLASH OF CLANS ON",

                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_reddit.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_youtube.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_facebook.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_twitter.png"),
                                },
                            ],
                        },
                    },
                    timelines: {
                        timelineBar: [
                            {
                                id: v4(),
                                title: "Clash",
                                year: "1982",
                                icon: <BsFlag />,
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Clash Dash",
                                background: "",
                                year: "1992",
                            },
                            {
                                id: v4(),
                                title: "Clash: Cradle of Darkness",
                                background: "",
                                year: "2002",
                            },
                            {
                                id: v4(),
                                title: "Clash of Clans Global Launch",
                                background: "",
                                year: "2012",
                            },
                            {
                                id: v4(),
                                title: "",
                                background: "",
                                year: "today",
                            },
                        ],
                        title: "CONSTANTLY EVOLVING",
                        des: `Since 1982, Clash has never stopped evolving. From the first Clash arcade game, to the hit racing game Clash Dash, and even to its darkest point in history with Clash: Cradle of Darkness, the village building game we know and love today has taken many different forms.

                        Whether you're beating a high score at the arcade, or joining your clanmates in a raid, Clash has always offered user-friendly & fun experiences for gamers.`,
                        thumb: require("../../../access/image/games/coc/timeline/barbarianevolution_02_3.png"),
                        classNameThumb: cx("thumbCoc"),
                    },
                    sliderLink: [
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_goblinwizard_thumbnail.jpg"),
                                title: "The Tale of The Goblin Wizard",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_partywizard_thumbnail.jpg"),
                                title: "Party Wizard Party Time",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_eightclansenter_thumbnail.jpg"),
                                title: "Eight Clans Enter, One Clan Leaves",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_comeback_builder_thumbnail.jpg"),
                                title: "Come Back Builder",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_hammerjam_thumbnail.jpg"),
                                title: "Hammer Jam!",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/coc/sliderLink/games_clashofclans_video_hogrider360_thumbnail.jpg"),
                                title: "Hog Rider 360",
                            },
                        ],
                    ],
                }}
            />
        ),
    },
    {
        id: v4(),
        path: "/games/boombeach",
        element: (
            <PageDetailGame
                data={{
                    sliderMain: {
                        logo: require("../../../access/image/games/boombeach/sliderMain/main_logo_boombeach.png"),
                        backgroundMobile: require("../../../access/image/games/boombeach/sliderMain/hero_bg_boombeach_m_0.jpg"),
                        backgroundWeb: require("../../../access/image/games/boombeach/sliderMain/hero_bg_boombeach.jpg"),
                    },
                    ArticleBody: {
                        first: {
                            title: `BUILD. PLAN. BOOM!`,
                            des: `Come with a plan or leave in defeat! Welcome to Boom Beach, an epic combat strategy game where your brains and your troop’s brawn fight against the evil Blackguard. Attack bases to free enslaved islanders or create a task force with friends and other players to take on the enemy together, all while exploring and unlocking secrets of this beautiful archipelago. Scout, plan, then BOOM THE BEACH!`,
                            thumb: require("../../../access/image/games/boombeach/sliderBody/first/bg_intro_boombeach.jpg"),
                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/appstore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/googleplay.png"),
                                },
                            ],
                        },
                        second: {
                            title: "STAY UP-TO-DATE",
                            des: "To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.",

                            backgroundWeb: require("../../../access/image/games/boombeach/sliderBody/second/bg_gamesocial_boombeach.jpg"),
                            backgroundMobile: require("../../../access/image/games/boombeach/sliderBody/second/games_boombeach_community_m_bg.jpg"),

                            thumb: require("../../../access/image/games/boombeach/sliderBody/second/bg_gamewebsite_boombeach.png"),
                            whiteColorInfo: true,
                            titleLinks: "FOLLOW BOOM BEACH ON",

                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_reddit.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_youtube.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_facebook.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_twitter.png"),
                                },
                            ],
                        },
                    },
                    timelines: {
                        timelineBar: [
                            {
                                id: v4(),
                                title: "Global Launch",
                                year: "2014",
                                icon: <BsFlag />,
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Friendly Battles",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "The First Mega Crab",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Heroes & Tribes",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Blackguard Base Builder",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Warships",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "",
                                background: "",
                                year: "today",
                            },
                        ],
                        title: "CONSTANTLY EVOLVING",
                        des: "Boom Beach is constantly evolving to offer more user-friendly, consistent, and fun online experiences for our players.",
                        thumb: require("../../../access/image/games/boombeach/timeline/bg_timeline_boombeach.png"),
                        classNameThumb: cx("thumbBoombeach", "thumbHayday"),
                    },
                    sliderLink: [
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/boombeach/sliderLink/games_boombeach_video_lonelyatthetop_thumbnail.jpg"),
                                title: "It's Lonely At The Top",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/boombeach/sliderLink/games_boombeach_video_drthirst_thumbnail.jpg"),
                                title: "Dr. Thirst's New and Improved Mega Crab",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/boombeach/sliderLink/games_boombeach_video_whereisdrt_thumbnail.jpg"),
                                title: "Dr. T Goes Undercover",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/boombeach/sliderLink/games_boombeach_video_song_thumbnail.jpg"),
                                title: "Dr. T's Song",
                            },
                        ],
                    ],
                }}
            />
        ),
    },
    {
        id: v4(),
        path: "/games/clashroyale",
        element: (
            <PageDetailGame
                data={{
                    sliderMain: {
                        logo: require("../../../access/image/games/clashroyale/sliderMain/main_logo_clashroyale.png"),
                        backgroundMobile: require("../../../access/image/games/clashroyale/sliderMain/hero_bg_clashroyale_m_0.jpg"),
                        backgroundWeb: require("../../../access/image/games/clashroyale/sliderMain/hero_bg_clashroyale.jpg"),
                    },
                    ArticleBody: {
                        first: {
                            title: `EPIC REAL-TIME CARD BATTLES`,
                            des: `Clash Royale is a real-time multiplayer game starring the Royales, your favourite Clash characters and much, much more. Collect and upgrade dozens of cards featuring the Clash of Clans troops, spells and defenses you know and love, as well as the Royales: Princes, Knights, Baby Dragons and more. Knock the enemy King and Princesses from their towers to defeat your opponents and win Trophies, Crowns and glory in the Arena.`,
                            thumb: require("../../../access/image/games/clashroyale/sliderBody/first/bg_intro_clashroyale.jpg"),
                            classNameThumb: cx(
                                "clashroyale_article_thumb_first"
                            ),
                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/appstore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/googleplay.png"),
                                },
                            ],
                        },
                        second: {
                            title: "SEE THE LATEST",
                            des: "To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.",

                            backgroundWeb: require("../../../access/image/games/clashroyale/sliderBody/second/bg_gamesocial_clashroyale.jpg"),
                            backgroundMobile: require("../../../access/image/games/clashroyale/sliderBody/second/games_clashroyale_community_m_bg.jpg"),

                            classNameThumb: cx(
                                "clashroyale_article_thumb_first",
                                "clashroyale_article_thumb_second"
                            ),
                            thumb: require("../../../access/image/games/clashroyale/sliderBody/second/bg_social_clashroyale.png"),
                            whiteColorInfo: true,
                            titleLinks: "FOLLOW BRAWL STARS ON",

                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_reddit.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_youtube.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_facebook.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_twitter.png"),
                                },
                            ],
                        },
                    },
                    timelines: {
                        timelineBar: [
                            {
                                id: v4(),
                                title: "Global Launch",
                                year: "2016",
                                icon: <BsFlag />,
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Clan Wars",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Trophy Road",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Star Levels",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Magic Items",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Champions",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "",
                                background: "",
                                year: "today",
                            },
                        ],
                        title: "LAUNCH IS ONLY THE BEGINNING",
                        des: "Clash Royale has been constantly evolving to offer more user-friendly, more consistent and more fun online experiences for Supercell gamers.",
                        thumb: require("../../../access/image/games/clashroyale/timeline/bg_timeline_clashroyale.png"),
                        classNameThumb: cx("clashroyale_thumb_timeline"),
                    },
                    sliderLink: [
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_deckthearena_thumbnail.jpg"),
                                title: "Deck the Arena!",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_elixirgolem_thumbnail.jpg"),
                                title: "Elixir Golem",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_flood_thumbnail.jpg"),
                                title: "The Flood",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_ram-rider_thumbnail.jpg"),
                                title: "Ram Rider",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_starlevel_thumbnail.jpg"),
                                title: "Introducing Star Levels",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_dramatic_approach_thumbnail.jpg"),
                                title: "Clan Wars is Here",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_last_second_thumbnail.jpg"),
                                title: "Last Second",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/clashroyale/sliderLink/games_clashroyale_video_epic_comeback_thumbnail.jpg"),
                                title: "Epic Comeback",
                            },
                        ],
                    ],
                }}
            />
        ),
    },
    {
        id: v4(),
        path: "/games/brawlstars",
        element: (
            <PageDetailGame
                data={{
                    sliderMain: {
                        logo: require("../../../access/image/games/brawlstars/sliderMain/main_logo_brawlstars.png"),
                        backgroundMobile: require("../../../access/image/games/brawlstars/sliderMain/hero_bg_brawlstars_m.jpg"),
                        backgroundWeb: require("../../../access/image/games/brawlstars/sliderMain/hero_bg_brawlstars_.jpg"),
                    },
                    ArticleBody: {
                        first: {
                            title: `3V3 AND BATTLE ROYALE`,
                            des: `Time to BRAWL! Team up with your friends and get ready for epic multiplayer MAYHEM! Brawl Stars is the newest game from the makers of Clash of Clans and Clash Royale. Jump into your favorite game mode and play quick matches with your friends. Shoot 'em up, blow 'em up, punch 'em out and win the BRAWL.`,
                            thumb: require("../../../access/image/games/brawlstars/sliderBody/first/bg_intro_brawlstars.jpg"),
                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/appstore.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/footer/down-load/googleplay.png"),
                                },
                            ],
                        },
                        second: {
                            title: "STAY UP-TO-DATE",
                            des: "To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.",

                            backgroundWeb: require("../../../access/image/games/brawlstars/sliderBody/second/bg_gamesocial_brawlstars.jpg"),
                            backgroundMobile: require("../../../access/image/games/brawlstars/sliderBody/second/games_brawlstars_community_m_bg.jpg"),

                            thumb: require("../../../access/image/games/brawlstars/sliderBody/second/bg_gamewebsite_brawlstars.png"),
                            whiteColorInfo: true,
                            titleLinks: "FOLLOW CLASH OF CLANS ON",

                            listAppDownload: [
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_reddit.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_youtube.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_facebook.png"),
                                },
                                {
                                    link: "/",
                                    id: v4(),
                                    src: require("../../../access/image/links/icon_gs_twitter.png"),
                                },
                            ],
                        },
                    },
                    timelines: {
                        timelineBar: [
                            {
                                id: v4(),
                                title: "Global Launch",
                                year: "2018",
                                icon: <BsFlag />,
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Power Play",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "2nd Star Powers",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Gadgets",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "China Launch",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "Brawl Pass",
                                background: "",
                            },
                            {
                                id: v4(),
                                title: "",
                                background: "",
                                year: "today",
                            },
                        ],
                        title: "CONSTANTLY EVOLVING",
                        des: "Brawl Stars has seen many developments ever since soft launch. Going global is just a new beginning.",
                        thumb: require("../../../access/image/games/brawlstars/timeline/bg_timeline_brawlstars.png"),
                        classNameThumb: cx('thumbHayday'),
                    },
                    sliderLink: [
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_ricolove_thumbnail.jpg"),
                                title: "My Sweet Brawlentine!",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_pipers_thumbnail.jpg"),
                                title: "Piper's Sugar & Spice!",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_starrpark_thumbnail.jpg"),
                                title: "Starr Park: Invest in the Future",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_barleys_thumbnail.jpg"),
                                title: "Barley's Last Call!",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_mechamayhem_thumbnail.jpg"),
                                title: "Mecha Mayhem!",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_retropolis_thumbnail.jpg"),
                                title: "Welcome to Retropolis!",
                            },
                        ],
                        [
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_notime_thumbnail.jpg"),
                                title: "No Time to Explain",
                            },
                            {
                                id: v4(),
                                link: "/",
                                thumbSrc: require("../../../access/image/games/brawlstars/sliderLink/games_brawlstars_video_wizard_thumbnail.jpg"),
                                title: "Barley Wizard Skin",
                            },
                        ],
                    ],
                }}
            />
        ),
    },
];
export default routesGames