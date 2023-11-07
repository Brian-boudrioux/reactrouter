import { createContext, useState, useContext, useMemo } from "react";

const basketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const value = useMemo(() => {
    return { basket, setBasket };
  }, [basket]);
  return (
    <basketContext.Provider value={value}>{children}</basketContext.Provider>
  );
}

export default () => useContext(basketContext);
