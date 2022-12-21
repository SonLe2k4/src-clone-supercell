import { v4 } from "uuid";

const featuredPositionsData: {
    id: string;
    position: string;
    location: string;
    link: string;
}[] = [
    {
        id: v4(),
        position: "Senior Server Engineer",
        location: "Helsinki, Finland",
        link: "/",
    },
    {
        id: v4(),
        position: "Senior UI/UX Artist",
        location: "Helsinki, Finland",
        link: "/",
    },
    {
        id: v4(),
        position: "Senior Client Engineer, Clash Mini",
        location: "Shanghai, China",
        link: "/",
    },
    {
        id: v4(),
        position: "Community Manager, Clash Royale or Brawl Stars",
        location: "Helsinki, Finland",
        link: "/",
    },
    {
        id: v4(),
        position: "Senior Full-Stack Developer, Supercell Store",
        location: "Finland, Helsinki",
        link: "/",
    },
];

export default featuredPositionsData;
