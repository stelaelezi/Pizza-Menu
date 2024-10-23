const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} />
      <h3>{pizzaObj.name}</h3>
      <div>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
        {/* <span>{pizzaObj.soldOut}</span> */}
      </div>
    </li>
  );
};
export default Pizza;
