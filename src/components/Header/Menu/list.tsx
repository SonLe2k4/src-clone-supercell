import { v4 } from "uuid";

export interface nav {
    link?: string;
    text: string;
    id: string;
    children?: nav[];
}

const listNav: nav[] = [
    {
        id: `idGames`,
        text: "Games",
        children: [
            {
                id: `idGames_`,
                link: "/games",
                text: "Games",
            },
            {
                id: `idGamesHayday`,
                link: "/games/hayday",
                text: "Hay Day",
            },
            {
                id: `idGamesClashOfClans`,
                link: "/games/clashofclans",
                text: "Clash of Clans",
            },
            {
                link: "/games/boombeach",
                id: `idGamesBoomBeach`,
                text: "Boom Beach",
            },
            {
                link: "/games/clashroyale",
                id: `idGamesClashRoyale`,
                text: "Clash Royale",
            },
            {
                link: "/games/brawlstars",
                id: `idGamesBrawlStars`,
                text: "Brawl Stars",
            },
        ],
    },
    {
        id: `idCareers`,
        text: "Careers",
        children: [
            {
                link: "/careers",
                id: `idCareers_`,
                text: "Careers",
            },
            {
                id: `idCareersWYMLIH`,
                link: "/careers/why-you-might-love-it-here",
                text: "Why You Might Love It Here",
            },
            {
                id: `idCareersOO`,
                link: "/careers/our-offices",
                text: "Our Offices",
            },
            {
                link: "/careers/joining-supercell",
                id: `idCareersJS`,
                text: "Joining Supercell",
            },
            {
                link: "/careers/living-in-helsinki",
                id: `idCareersLIH`,
                text: "Living in Helsinki",
            },
            {
                link: "/careers/living-in-shanghai",
                id: `idCareersLIS`,
                text: "Living in Shanghai",
            },
            {
                link: "/careers/join",
                id: `idCareersJ`,
                text: "Open Positions",
            },
        ],
    },
    {
        id: `idSupport`,
        text: "Support",
        children: [
            {
                link: "/support",
                id: `idSupport_`,
                text: "Support",
            },
            {
                id: `idSupportSPF`,
                link: "/support/safe-play-fair",
                text: "Be Safe & Play Fair",
            },
        ],
    },
    {
        id: `idAboutUs`,
        text: "About Us",
        children: [
            {
                link: "/about-us",
                id: `idAboutUs_`,
                text: "About Us",
            },
            {
                id: `idAboutUsN`,
                link: "/about-us/news",
                text: "News",
            },
            {
                id: `idAboutUsI`,
                link: "/about-us/investments",
                text: "Investments",
            },
            {
                id: `idAboutUsLU`,
                link: "/about-us/level-up",
                text: "Level Up",
            },
        ],
    },
];

export default listNav;
