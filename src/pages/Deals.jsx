import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useBasketContext from "../context/basket";

function Deals() {
  const { storeID } = useParams();
  const [deals, setDeals] = useState([]);

  const { basket, setBasket } = useBasketContext();

  useEffect(() => {
    fetch(`https://wild.creativebrain.fr/deals?storeID=${storeID}`)
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  function addToBasket(deal) {
    const updatedBasket = [...basket, deal];
    setBasket(updatedBasket);
  }

  return (
    <>
      {deals.map((deal) => {
        return (
          <div key={deal.dealID}>
            <p>{deal.title}</p>
            <p>{deal.salePrice}</p>
            <button type="button" onClick={() => addToBasket(deal)}>
              Buy
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Deals;
