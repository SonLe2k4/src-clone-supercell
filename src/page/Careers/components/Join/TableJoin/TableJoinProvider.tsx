import React, { createContext } from "react";

type Props = {};

export const DataTableJoinContext = createContext({} as {
    onClickStrongTag: (e: React.MouseEvent<HTMLElement, MouseEvent>, type: string) => void;
    stringActive: string
});

const TableJoinProvider = (props: React.PropsWithChildren<Props>) => {
    const [stringActive, setStringActive] = React.useState<string>("");


    const onClickStrongTag = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        type: string
    ) => {
        if (type === stringActive) return setStringActive("");
        setStringActive(type);
    };



    return (
        <DataTableJoinContext.Provider
            value={{
                onClickStrongTag,
                stringActive,
            }}
        >
            {props.children}
        </DataTableJoinContext.Provider>
    );
};

export default TableJoinProvider;
