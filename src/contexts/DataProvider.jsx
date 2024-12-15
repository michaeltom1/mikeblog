import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [footerHeight, setFooterHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  return (
    <div>
      <DataContext.Provider
        value={{ footerHeight, setFooterHeight, navHeight, setNavHeight }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

export default DataProvider;

export function useData() {
  return useContext(DataContext);
}
