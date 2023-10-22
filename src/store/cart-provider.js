// STEP 2: manage the context here
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//reducer function to be used by useReducer
const cartReducer = (state, action) => {
  if (action.type === "ADD-ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // check if item already exists in cart t/f
    const exisitingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    // get the item from item array
    const existingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      // change the amount only of item as it already exists
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // replace item in the items array
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE-ITEM") {
    const exisitingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[exisitingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    // remove from the cart
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item =>{
        return item.id !== action.id
      })
    } // keep in the cart but decrease the amount
    else{
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}
      updatedItems  =[...state.items]
      updatedItems[exisitingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD-ITEM", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE-ITEM", id: id });
  };

  const defaultVal = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
