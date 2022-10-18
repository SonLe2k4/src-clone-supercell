import { v4 } from "uuid";

export interface nav {
  link: string;
  text: string;
  id: string;
  children?: nav[];
}

const listNav: nav[] = [
  {
    id: v4(),
    link: "/games",
    text: "Games",
    children: [
      {
        id: v4(),
        link: "/games/hayday",
        text: "Hay Day",
      },
      {
        id: v4(),
        link: "/games/clashofclans",
        text: "Clash of Clans",
      },
      {
        link: "/games/boombeach",
        id: v4(),
        text: "Boom Beach",
      },
      {
        link: "/games/clashroyale",
        id: v4(),
        text: "Clash Royale",
      },
      {
        link: "/games/brawlstars",
        id: v4(),
        text: "Brawl Stars",
      },
    ],
  },
  {
    link: "/careers",
    id: v4(),
    text: "Careers",
    children: [
      {
        id: v4(),
        link: "/games/Why-You-Might-Love-It-Here",
        text: "Why You Might Love It Here",
      },
      {
        id: v4(),
        link: "/games/clashofclans",
        text: "Our Offices",
      },
      {
        link: "/games/boombeach",
        id: v4(),
        text: "Joining Supercell",
      },
      {
        link: "/games/clashroyale",
        id: v4(),
        text: "Living in Helsinki",
      },
      {
        link: "/games/brawlstars",
        id: v4(),
        text: "Living in Shanghai",
      },
      {
        link: "/games/brawlstars",
        id: v4(),
        text: "Open Positions",
      },
    ],
  },
  {
    link: "/support",
    id: v4(),
    text: "Support",
    children: [
      {
        id: v4(),
        link: "/support/safe-play-fair",
        text: "Be Safe & Play Fair",
      },
    ],
  },
  {
    link: "/about-us",
    id: v4(),
    text: "About Us",
    children: [
      {
        id: v4(),
        link: "/about-us/news",
        text: "News",
      },
      {
        id: v4(),
        link: "/about-us/investments",
        text: "Investments",
      },
      {
        id: v4(),
        link: "/about-us/level-up",
        text: "Level Up",
      },
    ],
  },
];

export default listNav;
