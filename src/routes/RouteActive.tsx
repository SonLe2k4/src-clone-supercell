import React, { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";

type Props = {};

export const RouteActiveContext = createContext(
    {} as {
        activeRoute: string;
        setActiveRoute: React.Dispatch<React.SetStateAction<string>>;
    }
);

const RouteActive = (props: PropsWithChildren<Props>) => {
    const [activeRoute, setActiveRoute] = useState<string>("/");
    return (
        <RouteActiveContext.Provider
            value={{
                activeRoute,
                setActiveRoute,
            }}
        >
            {props.children}
        </RouteActiveContext.Provider>
    );
};


export default RouteActive;
