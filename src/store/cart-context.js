//STEP 1: create a general cart context

import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;