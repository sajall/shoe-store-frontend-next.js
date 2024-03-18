import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeItem: (state, action) => {
      const index = action.payload
      state.cart.splice(index, 1)
    },
    resetCart: (state, action)=>{
      state.cart = []
    }
  },
});

export const { setCart , removeItem, resetCart} = CartSlice.actions;
export default CartSlice.reducer;
