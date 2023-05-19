import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Context.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
