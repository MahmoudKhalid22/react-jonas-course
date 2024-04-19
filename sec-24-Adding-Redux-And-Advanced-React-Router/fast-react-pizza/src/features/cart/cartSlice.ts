import { createSlice } from "@reduxjs/toolkit";
import { CartState, Item, States } from "../../utilities/types";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item: Item) => item.pizzaId !== action.payload
      );
    },
    increasingAmount(state, action) {
      const cartItem: Item = state.cart.find(
        (item) => item.pizzaId === action.payload
      ) as Item;
      cartItem.quantity++;
      cartItem.unitPrice = cartItem?.unitPrice * cartItem.quantity;
    },
    decreasingAmount(state, action) {
      const cartItem: Item = state.cart.find(
        (item) => item.pizzaId === action.payload
      ) as Item;
      cartItem.quantity--;
      cartItem.unitPrice = cartItem.unitPrice * cartItem.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increasingAmount,
  decreasingAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: States) => state.cart?.cart;

export const getTotalCartQuantity = (state: States) =>
  state.cart?.cart.reduce((sum: number, item: Item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: States) =>
  state.cart?.cart.reduce((sum, item) => sum + item.totalPrice, 0);
