import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Deals() {
  const { storeID } = useParams();
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch(`https://wild.creativebrain.fr/deals?storeID=${storeID}`)
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <>
      {deals.map((deal) => {
        return (
          <div key={deal.dealID}>
            <p>{deal.title}</p>
            <p>{deal.salePrice}</p>
          </div>
        );
      })}
    </>
  );
}

export default Deals;
