import { createSlice } from "@reduxjs/toolkit";
import { AccountState, NormalAction, RequestLoanAction } from "../../types";

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  purpose: "",
};
export type Action = RequestLoanAction | NormalAction;

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      state.loan = action.payload?.amount;
      state.balance += action.payload?.amount;
      state.purpose = action.payload?.purpose;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.purpose = "";
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// export default function accountReducer(
//   state = initialState,
//   action: Action
// ): AccountState {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + (action.payload as number) };
//     case "account/withdraw":
//       return { ...state, balance: state.balance + (action.payload as number) };
//     case "account/requestLoan":
//       return {
//         ...state,
//         loan: (action.payload as Payload)?.amount,
//         balance: state.balance + (action.payload as Payload)?.amount,
//         purpose: (action.payload as Payload)?.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loan: 0,
//         purpose: "",
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount: number): NormalAction {
//   return { type: "account/deposit", payload: amount };
// }
// export function withdraw(amount: number): NormalAction {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(
//   amount: number,
//   purpose: string
// ): RequestLoanAction {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }
// export function payLoan() {
//   return { type: "account/payLoan", payload: 0 };
// }
