import { useState } from "react";
import Nav from "./Nav";
import useBasketContext from "../context/basket";
import Basket from "./Basket";

function Header() {
  const { basket } = useBasketContext();
  const [showBasket, setShowBasket] = useState(false);
  return (
    <>
      <h1>dealsApp</h1>
      <Nav />
      <p onClick={() => setShowBasket(!showBasket)}>{basket.length}</p>
      {showBasket && <Basket />}
    </>
  );
}

export default Header;
