import React, { createContext, useState } from "react";

export const sidebarShowContext = createContext();

const SidebarContext = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <sidebarShowContext.Provider value={[sidebar, setSidebar]}>
      {children}
    </sidebarShowContext.Provider>
  );
};

export default SidebarContext;
