import { Dispatch } from "redux";
import {
  AccountState,
  NormalAction,
  Payload,
  RequestLoanAction,
} from "../../types";

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  purpose: "",
  isLoading: false,
};
export type Action = RequestLoanAction | NormalAction;

export default function accountReducer(
  state = initialStateAccount,
  action: Action
): AccountState {
  switch (action.type) {
    case "account/converting":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + (action.payload as number),
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - (action.payload as number) };
    case "account/requestLoan":
      return {
        ...state,
        loan: (action.payload as Payload)?.amount,
        balance: state.balance + (action.payload as Payload)?.amount,
        purpose: (action.payload as Payload)?.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        purpose: "",
      };

    default:
      return state;
  }
}

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
export function withdraw(amount: number): NormalAction {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(
  amount: number,
  purpose: string
): RequestLoanAction {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan", payload: 0 };
}
