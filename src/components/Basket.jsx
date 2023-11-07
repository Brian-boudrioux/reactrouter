import useBasketContext from "../context/basket";

function Basket() {
  const { basket, setBasket } = useBasketContext();

  function removeFromBasket(deal) {
    const updatedBasket = basket.filter(
      (product) => product.dealID !== deal.dealID
    );
    setBasket(updatedBasket);
  }

  return (
    <>
      {basket.map((deal) => {
        return (
          <div>
            <p>{deal.title}</p>
            <button type="button" onClick={() => removeFromBasket(deal)}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Basket;
