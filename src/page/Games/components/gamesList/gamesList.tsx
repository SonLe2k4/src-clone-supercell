import ListCard from '../../../../components/common/ListCard';
import { v4 } from "uuid";
import img from "../../../../access/image";
import { ICard } from "../../../../components/common/ListCard/ListCard";

type Props = {}

const listGames: ICard[] = [
    {
        id: v4(),
        category: "FARM WITH FRIENDS AND FAMILY",
        link: "/games/hayday",
        linkThumb: "/games/hayday",
        text: "Hay Day",
        thumbSrc: img.games.listGames.hayDay,
    },
    {
        id: v4(),
        category: "LEAD YOUR CLAN TO VICTORY!",
        link: "/games/clashofclans",
        linkThumb: "/games/clashofclans",
        text: "Clash of Clans",
        thumbSrc: img.games.listGames.coc,
    },
    {
        id: v4(),
        category: "BUILD. PLAN. BOOM!",
        link: "/games/boombeach",
        linkThumb: "/games/boombeach",
        text: "Boom Beach",
        thumbSrc: img.games.listGames.boomBeach,
    },
    {
        id: v4(),
        category: "EPIC REAL-TIME CARD BATTLES",
        link: "/games/clashroyale",
        linkThumb: "/games/clashroyale",
        text: "Clash Royale",
        thumbSrc: img.games.listGames.clashroyale,
    },
    {
        id: v4(),
        category: "3V3 AND BATTLE ROYALE",
        link: "/games/brawlstars",
        linkThumb: "/games/brawlstars",
        text: "Brawl Stars",
        thumbSrc: img.games.listGames.brawlstars,
    },
];

const GamesList = (props: Props) => {
  return (
    <ListCard data={listGames}/>
  )
}

export default GamesList