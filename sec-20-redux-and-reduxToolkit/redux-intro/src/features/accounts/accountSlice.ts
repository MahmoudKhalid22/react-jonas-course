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
};
type Action = RequestLoanAction | NormalAction;

export default function accountReducer(
  state: AccountState = initialStateAccount,
  action: Action
): AccountState {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance + action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: (action.payload as Payload)?.amount,
        balance: state.balance + (action.payload as Payload)?.amount,
        purpose: (action.payload as Payload)?.purpose,
      };
    case "account/payLoan":
      return { ...state, balance: state.balance - state.loan, purpose: "" };
    default:
      return state;
  }
}

export function deposit(amount: number): NormalAction {
  return { type: "account/deposit", payload: amount };
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
export function payLoan(amount: number): NormalAction {
  return { type: "account/payLoan", payload: amount };
}
