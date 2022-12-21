import { v4 } from "uuid";
import { IDataTBody } from "../components/Tbody/Tbody";



const dataTableJoin: IDataTBody[] = [
    {
        id: v4(),
        title: `Community Lead, Investments`,
        link: "/",
        location: `CHINA`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Senior Full-Stack Developer, Supercell Store`,
        link: "/",
        location: `VIETNAM`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Data Analyst, Player Support`,
        link: "/",
        location: `KOREAN`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Global Corporate Communications Lead`,
        link: "/",
        location: `JAPAN`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Senior Product Marketing Manager`,
        link: "/",
        location: `AMERICA`,
        position: `PART-TIME`,
    },
    {
        id: v4(),
        title: `UI Programmer, Clash Royale`,
        link: "/",
        location: `USA`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Gameplay Programmer, Clash Royale`,
        link: "/",
        location: `HELSINKI, FINLAND`,
        position: `FULLTIME`,
    },
    {
        id: v4(),
        title: `Game Tech Programmer, Clash Royale`,
        link: "/",
        location: `HELSINKI, FINLAND`,
        position: `FULLTIME`,
    },
];

export { dataTableJoin }
