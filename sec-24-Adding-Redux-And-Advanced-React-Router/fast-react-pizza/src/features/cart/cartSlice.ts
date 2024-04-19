import { createSlice, ReducerType } from "@reduxjs/toolkit";
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
      cartItem.totalPrice = cartItem?.unitPrice * cartItem.quantity;
    },
    decreasingAmount(state, action) {
      const cartItem: Item = state.cart.find(
        (item) => item.pizzaId === action.payload
      ) as Item;
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.unitPrice * cartItem.quantity;
      if (cartItem.quantity <= 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
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

export const getTotalCartQuantity = (state: States): number =>
  state.cart?.cart.reduce(
    (sum: number, item: Item) => sum + item.quantity,
    0
  ) as number;

export const getTotalCartPrice = (state: States) =>
  state.cart?.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantity =
  (id: string): ((state: States) => number) =>
  (state: States): number => {
    const cartItem = state.cart?.cart.find((item: Item) => item.pizzaId === id);
    return cartItem?.quantity ?? 0;
  };
