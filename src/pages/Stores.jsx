import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Stores() {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://wild.creativebrain.fr/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  return (
    <main>
      {stores.map((store) => {
        return (
          <article
            key={store.storeID}
            onClick={() => navigate(`/deals/${store.storeID}`)}
          >
            <p>{store.storeName}</p>
          </article>
        );
      })}
    </main>
  );
}

export default Stores;
