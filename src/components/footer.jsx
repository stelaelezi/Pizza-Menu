function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  function Order({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We are open from {openHour}:00 until {closeHour}:00. Come visit us or
          order online!
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }
}
export default Footer;
