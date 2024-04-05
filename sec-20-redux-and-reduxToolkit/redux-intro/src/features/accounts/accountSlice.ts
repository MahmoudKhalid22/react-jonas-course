import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { AccountState, NormalAction, RequestLoanAction } from "../../types";

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  purpose: "",
  isLoading: false,
};
export type Action = RequestLoanAction | NormalAction;

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
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
    converting(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(
  amount: number,
  currency: string
): (dispatch: Dispatch<any>) => Promise<void> {
  if (currency === "USD") {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: "account/deposit", payload: amount });
      return Promise.resolve();
    };
  }

  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: "account/converting" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();

    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
}

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
