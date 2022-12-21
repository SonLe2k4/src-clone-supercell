import { Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import Careers from "../page/Careers";
import OurOffice from "../page/Careers/page/OurOffice/OurOffice";
import WhyYouMightLoveItHere from "../page/Careers/page/WhyYouMightLoveItHere";
import Games from "../page/Games";
import Home from "../page/Home";


import routesGames from "./style/listGame/routesGames";
import JoiningSupercell from "../page/Careers/page/JoiningSupercell";



type TProps = {};

const routes = [
    { id: v4(), path: "/", element: <Home /> },

    { id: v4(), path: "/games", element: <Games /> },
    ...routesGames,
    
    { id: v4(), path: "/careers", element: <Careers /> },
    { id: v4(), path: "/careers/join", element: <Careers /> },
    { id: v4(), path: "/careers/why-you-might-love-it-here", element: <WhyYouMightLoveItHere />},
    { id: v4(), path: "/careers/our-offices", element: <OurOffice />},
    { id: v4(), path: "/careers/joining-supercell", element: <JoiningSupercell />},

];

const RenderRoutes = (props: TProps) => {
    return (
        <Routes>
            {routes.map((r) => (
                <Route path={r.path} key={r.id} element={r.element} />
            ))}
        </Routes>
    );
};

export default RenderRoutes;
