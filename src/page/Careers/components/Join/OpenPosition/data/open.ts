import { v4 } from "uuid";
import { IDataUL } from "../components/UL/UL";

const category: IDataUL[] = [
    { id: v4(), link: "/", textBtn: "GAME DEVELOPMENT" },
    { id: v4(), link: "/", textBtn: "COMMUNITY" },
    { id: v4(), link: "/", textBtn: "MARKETING" },
    { id: v4(), link: "/", textBtn: "PLAYER SUPPORT" },
    { id: v4(), link: "/", textBtn: "TECH & ANALYTICS" },
    { id: v4(), link: "/", textBtn: "BUSINESS & OPERATION" },
    { id: v4(), link: "/", textBtn: "OTHER", disable: true },
];

const location: IDataUL[] = [
    { id: v4(), link: "/", textBtn: "HELSINKI, FINLAND" },
    { id: v4(), link: "/", textBtn: "Shanghai, China" },
    { id: v4(), link: "/", textBtn: "San Francisco, USA", disable: true },
    { id: v4(), link: "/", textBtn: "Seoul, South Korea", disable: true },
];

export { category, location };
