// STEP 2: manage the context here

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};

  const defaultVal = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    // Any component being wrapped here will get access to the CartContext using the provider
    <CartContext.Provider value={defaultVal}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
