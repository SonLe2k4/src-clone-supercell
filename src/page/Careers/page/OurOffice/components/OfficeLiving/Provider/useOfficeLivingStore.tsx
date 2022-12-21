import React from "react";
import { OfficeLiving } from "./OfficeLivingProvider";

const useOfficeLivingStore = () => React.useContext(OfficeLiving);

export default useOfficeLivingStore;

// use to get Context in child components 