import { v4 } from "uuid";
import img from "../../../../access/image";
import { ICard } from "../../../../components/common/ListCard/ListCard";

const listNews: ICard[] = [
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Everdale Ending Development",
        thumbSrc: img.news.img_1,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Congratulations to the Champions!",
        thumbSrc: img.news.img_2,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Clash Quest Ending Development",
        thumbSrc: img.news.img_3,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Final Level: Rustpunk Rascals, and what we learned while doing it!",
        thumbSrc: img.news.img_4,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Better Games Together",
        thumbSrc: img.news.img_5,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "See You at GDC",
        thumbSrc: img.news.img_6,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "Are Our Best Days Behind Us or Ahead of Us?",
        thumbSrc: img.news.img_7,
    },
    {
        id: v4(),
        category: "news",
        link: "#",
        linkThumb: "/",
        text: "North America Game Studio",
        thumbSrc: img.news.img_8,
    },
];

export default listNews;
