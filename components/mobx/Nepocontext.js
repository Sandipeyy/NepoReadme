import React from "react";
import { useLocalStore } from "mobx-react";
import { createNepoStore } from "./nepoStore";

const NepoContext = React.createContext(null);

export const NepoProvider = ({ children }) => {
  const nepoStore = useLocalStore(createNepoStore);

  return (
    <NepoContext.Provider value={nepoStore}>{children}</NepoContext.Provider>
  );
};

export const useNepoStore = () => React.useContext(NepoContext);