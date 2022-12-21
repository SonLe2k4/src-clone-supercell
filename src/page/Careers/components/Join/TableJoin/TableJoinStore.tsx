import React from "react";
import { DataTableJoinContext } from "./TableJoinProvider";

const TableJoinStore = () => {
    return React.useContext(DataTableJoinContext);
};

export default TableJoinStore;
