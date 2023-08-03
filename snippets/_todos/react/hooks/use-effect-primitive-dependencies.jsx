const CartItem = ({ item }) => {
  useEffect(() => {
    console.log(`${item.name} quantity has changed to ${item.quantity}.`);
  }, [item]);

  return (
    <>
      <h3>{item.name}</h3>
      <span>
        {item.price} x {item.quantity}
      </span>
    </>
  );
};

const CartItem = ({ item }) => {
  const { name, quantity, price } = item;

  useEffect(() => {
    console.log(`${name} quantity has changed to ${quantity}.`);
  }, [name, quantity]);

  return (
    <>
      <h3>{name}</h3>
      <span>
        {price} x {quantity}
      </span>
    </>
  );
};
